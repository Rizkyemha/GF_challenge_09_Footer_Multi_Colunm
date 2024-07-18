const IMAGE_CONTROLER = {
	facebook: "/img/facebook_logo.svg",
	youtube: "/img/youtube_logo.svg",
	instagram: "/img/instagram_logo.svg",
	github: "/img/github_logo.svg",
	twitter: "/img/x_logo.svg",
	brand: "/img/abstractly-logo.png",
};

const Image = (name) => {
	return `
    <img class="image-${name}" src=${name} alt="${name} image logo" />
  `;
};

export { Image, IMAGE_CONTROLER };
