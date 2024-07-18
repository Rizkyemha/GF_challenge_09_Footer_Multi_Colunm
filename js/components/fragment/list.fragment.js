const Categories = ["Unisex", "Women", "Men"];
const Colecctions = [
	"Latest arrivals",
	"Urban Oasis",
	"Cozy Comfort",
	"Fresh Fusion",
];

const List = (list) => {
	return `<li class='shop-category'>${list}</li>`;
};

export { List, Categories, Colecctions };
