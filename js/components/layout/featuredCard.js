import ShopCategories from "./shopCattegories.js";
import ShopCollections from "./shopCollections.js";
import Moto from "./moto.js";

const Featured_card = () => {
	return `
    <div class="card featured-card">
      ${Moto()}
      ${ShopCategories()}
      ${ShopCollections()}
    </div>
  `;
};

export default Featured_card;
