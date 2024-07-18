const BUTTON_OPTIONS = (
	name = "CTA",
	status = "secondary",
	type = null,
	text = "any button"
) => {
	return {
		name,
		status,
		type,
		text,
	};
};

const Button = (options) => {
	if (!options.type) {
		return `<button id="${options.name}" class="btn ${options.status} ${options.name}">${options.text}</button>`;
	} else {
		return `<button id="${options.name}" class="btn ${options.status} ${options.name}" type=${options.type}>${options.text}</button>`;
	}
};

export { Button, BUTTON_OPTIONS };
