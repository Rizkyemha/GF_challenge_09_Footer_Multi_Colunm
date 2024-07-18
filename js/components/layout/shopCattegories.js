import Container_list from "../fragment/containerList.fragment.js";

const ShopCategories = () => {
	return `
  <div class="shop-categories">
    <h3>SHOP CATEGORIES</h3>
    ${Container_list("categories")}
  </div>
  `;
};

export default ShopCategories;
