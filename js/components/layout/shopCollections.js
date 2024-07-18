import Container_list from "../fragment/containerList.fragment.js";

const ShopCollections = () => {
	return `
  <div class="shop-collections">
    <h3>SHOP COLLECTIONS</h3>
    ${Container_list("collections")}
  </div>
  `;
};

export default ShopCollections;
