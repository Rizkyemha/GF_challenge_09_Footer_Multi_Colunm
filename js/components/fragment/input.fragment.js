const INPUT_OPTIONS = (
	name = "input",
	type = "text",
	placeholder = "any placeholder"
) => {
	return {
		name,
		type,
		placeholder,
	};
};

const Input = (options) => {
	return `
    <input id=${options.name} class="input-${options.name}" type="${options.type}" name="${options.name}" placeholder="${options.placeholder}" />
  `;
};

export { Input, INPUT_OPTIONS };
