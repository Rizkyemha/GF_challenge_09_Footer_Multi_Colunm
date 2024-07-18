import { Image, IMAGE_CONTROLER } from "../fragment/image.fragment.js";

const Contacts = () => {
	return `
    <div class="contact-list">
      ${Image(IMAGE_CONTROLER.facebook)}
      ${Image(IMAGE_CONTROLER.youtube)}
      ${Image(IMAGE_CONTROLER.instagram)}
      ${Image(IMAGE_CONTROLER.github)}
      ${Image(IMAGE_CONTROLER.twitter)}
    </div>
  `;
};

export default Contacts;
