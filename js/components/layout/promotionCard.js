import Subscribe_promotion from "./subscribePromotion.js";
import Promotion_context from "./promotionContext.js";

const Promotion_card = () => {
	return `
    <div class="card promotion-card">
      ${Promotion_context()}
      ${Subscribe_promotion()}
    </div>
  `;
};

export default Promotion_card;
