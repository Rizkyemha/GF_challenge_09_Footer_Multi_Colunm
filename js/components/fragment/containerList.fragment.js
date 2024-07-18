import { List, Categories, Colecctions } from "./list.fragment.js";

const Container_list = (type) => {
	return `
    <ul>
      ${List_Handler(type)}
    </ul>
  `;
};

const List_Handler = (type) => {
	if (type == "collections") {
		return Categories.map((category) => List(category)).join("");
	} else if (type == "categories") {
		return Colecctions.map((Colecction) => List(Colecction)).join("");
	}
};

export default Container_list;
