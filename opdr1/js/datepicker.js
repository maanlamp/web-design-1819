import Lexer from "./modules/lexer/Lexer.js";
import { days, months } from "./modules/data.js";
import parser from "./modules/parser.js";

function makeOptional (str) {
	const letters = [...str];
	return "(?:"
		+ str
			.substring(0, 1)
		+ letters
			.slice(1)
			.reduce((str, letter) => str + `(?:${letter}`)
		+ ")?".repeat(letters.length - 2)
		+ ")";
}

const optDays = new RegExp(`\\b(${days["nl"].map(makeOptional).join("|")})\\b`, "i");
const optMonths = new RegExp(`\\b(${months["nl"].map(makeOptional).join("|")})\\b`, "i");
const picker = document.querySelector("#picker>#input");
const pickerVisuals = document.querySelector("#picker>#vis");
const lexer = (new Lexer())
	.rule("whitespace", /[\n\r\t\f\v]+/)
	.rule("number", /\d+/)
	.rule("day", optDays)
	.rule("month", optMonths)
	.rule("operator", /[\+\-\^]/)
	.rule("range", /\.\./)
	.rule("divider", /[ `/;:'\\]+/)
	.rule("placeholder", /\?|\,/)
	.rule("error", /.+/);

document.querySelectorAll("#picker button").forEach(button => button.addEventListener("click", event => {
	picker.value += button.dataset.date;
	doTheThing();
}));
picker.addEventListener("input", doTheThing);

function doTheThing () {
	const input = picker.value;
	const tokens = lexer.lex(input);
	pickerVisuals.innerHTML = tokens.map(token => `<span class="${token.type}">${(token.type === "divider") ? " " : token.lexeme}</span>`).join("");
	const parsed = parser(tokens);
	console.log(parsed);
}