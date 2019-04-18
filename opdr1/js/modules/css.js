export default function css (element, style) {
	const rules = style
		.trim()
		.split(/;?\r?\n/)
		.map(rule => rule
			.split(/:/)
			.map(v => v.trim()));
	
	rules
		.forEach(([property, value]) => element
			.style
			.setProperty(property, value));

	return element;
}