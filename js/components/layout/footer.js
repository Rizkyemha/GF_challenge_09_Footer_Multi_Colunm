import Footer_info from "./footerInfo.js";
import Featured_card from "./featuredCard.js";
import Promotion_card from "./promotionCard.js";

const Footer = () => {
	return `
    <footer>
      ${Promotion_card()}
      ${Featured_card()}
      ${Footer_info()}
    </footer>
  `;
};

export default Footer;
