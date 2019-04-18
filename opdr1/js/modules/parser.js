import { arraySplit } from "./helpers.js";

function numToDay (num = "?") {
	const currentMonth = (new Date()).getDate();
	if (num === "?") return currentMonth;
	return (typeof num === "string" && /^[\+\-]/.test(num))
		? eval(currentMonth + num)
		: Number(num);
}

function numToMonth (num = "?") {
	const currentMonth = (new Date()).getMonth() + 1;
	if (num === "?") return currentMonth;
	return (typeof num === "string" && /^[\+\-]/.test(num))
		? eval(currentMonth + num)
		: Number(num);
}

function numToYear (num = "?") {
	//I'm sorry for this
	const year = (new Date()).getFullYear();
	if (num === "?") return year;
	if (Number.isNaN(Number(num))) num = Number(num);
	let numAsStr = String(num);
	if (typeof num === "string") {
		if (num.startsWith("^")) {
			num = Number("2000".slice(0, -numAsStr.length+1) + numAsStr.substring(1));
			numAsStr = String(num);
		} else if (/^[\+\-]/.test(num)) {
			return eval(year + num);
		}
	}
	return (typeof num === "string")
		? eval(year + num)
		: (num > Number(String(year).slice(-numAsStr.length)))
			? Number("1900".slice(0, -numAsStr.length) + num)
			: Number("2000".slice(0, -numAsStr.length) + num);
}

function parseDate (day, month, year) {
	return `${numToDay(day)}/${numToMonth(month)}/${numToYear(year)}`;
}

export default function parser (tokens) {
	if (tokens.find(token => token.type === "range")) {
		if (tokens.filter(token => token.type === "range").length > 1) throw new Error("Only one range identifier is allowed.");
		const range = arraySplit(tokens, token => token.type === "range");
		const [dayStart, monthStart, yearStart] = arraySplit(range[0], token => token.type === "divider")
			.map(tokens => tokens
				.map(token => token.lexeme)
				.join(""))
			.flat();
		const [dayEnd, monthEnd, yearEnd] = arraySplit(range[1], token => token.type === "divider")
			.map(tokens => tokens
				.map(token => token.lexeme)
				.join(""))
			.flat();
		return `Van ${parseDate(dayStart, monthStart, yearStart)} tot ${parseDate(dayEnd, monthEnd, yearEnd)}`
	} else {
		const [day, month, year] = arraySplit(tokens, token => token.type === "divider")
			.map(tokens => tokens
				.map(token => token.lexeme)
				.join(""))
			.flat();
		return parseDate(day, month, year);
	}
}