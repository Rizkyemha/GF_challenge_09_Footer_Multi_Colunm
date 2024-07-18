import Contacts from "./contacts.js";
import CopyRight from "../fragment/copyRight.fragment.js";

const Footer_info = () => {
	return `
    <div class="card footer-info">
      ${CopyRight()}
      ${Contacts()}
    </div>
  `;
};

export default Footer_info;
