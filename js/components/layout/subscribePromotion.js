import { Input, INPUT_OPTIONS } from "../fragment/input.fragment.js";
import { Button, BUTTON_OPTIONS } from "../fragment/button.fragment.js";

const Subscribe_promotion = () => {
	return `
    <div class="subscribe-promotion">
      ${Input(INPUT_OPTIONS("email-subscribe", "email", "Enter your email"))}
      ${Button(
			BUTTON_OPTIONS("email-submit-subcribe", "primary", null, "Subcribe")
		)}
    </div>
  `;
};

export default Subscribe_promotion;
