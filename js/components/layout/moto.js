import { Image, IMAGE_CONTROLER } from "../fragment/image.fragment.js";

const Moto = () => {
	return `
    <div class="moto">
      ${Image(IMAGE_CONTROLER.brand)}
      <p>Craft stunning style journeys that weave more joy into every thread.</p>
    </div>
  `;
};

export default Moto;
