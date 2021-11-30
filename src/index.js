// Work
const siteContent = {
	// DO NOT CHANGE THIS OBJECT
	nav: {
		"nav-item-1": "Services",
		"nav-item-2": "Product",
		"nav-item-3": "Vision",
		"nav-item-4": "Features",
		"nav-item-5": "About",
		"nav-item-6": "Contact",
	},
	cta: {
		h1: "DOM Is Awesome",
		button: "Get Started",
	},
	"main-content": {
		"features-h4": "Features",
		"features-content":
			"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"about-h4": "About",
		"about-content":
			"About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"services-h4": "Services",
		"services-content":
			"Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"product-h4": "Product",
		"product-content":
			"Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"vision-h4": "Vision",
		"vision-content":
			"Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
	},
	contact: {
		"contact-h4": "Contact",
		address: "123 Way 456 Street Somewhere, USA",
		phone: "1 (888) 888-8888",
		email: "sales@greatidea.io",
	},
	footer: {
		copyright: "Copyright Great Idea! 2021",
	},
	images: {
		"logo-img": "http://localhost:9000/img/logo.png",
		"cta-img": "http://localhost:9000/img/cta.png",
		"accent-img": "http://localhost:9000/img/accent.png",
	},
};

console.log("project wired!");

// Identifying Object
const navLinks = Array.from(document.querySelectorAll("nav a"));
// Declaring Data Object
const textContent = siteContent.nav;
//
const keys = Object.keys(textContent);
keys.forEach((key) => {
	const content = textContent[key];
	const el = navLinks.shift();
	if (el) {
		el.textContent = content;
	} else {
		console.log(`could not find element using selector ".${key}"`);
	}
});
console.log(textContent);

// HEADER Query Selector
const headerImg = document.querySelector("#logo-img");
headerImg.src = siteContent["images"]["logo-img"];

// CTA IMG QUERY SELECTOR
const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["images"]["cta-img"];

// MIDDLE IMG QUERY SELECTOR
const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["images"]["accent-img"];

// NAV ITALIC CLASS QUERY SELECTOR
const italicClass = document.querySelectorAll(" nav a");
italicClass.forEach((el) => (el.className = "italic"));

// Element Selectors
const ctaHeader = document.querySelector("h1");
ctaHeader.textContent = siteContent["cta"]["h1"];
const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

// MAIN SELECTORS
const firstTopContent = document.querySelector(".text-content:nth-of-type(1)");
const secondTopContent = document.querySelector(".text-content:nth-of-type(2)");
const firstBotContent = document.querySelector(".text-content:nth-of-type(3)");
const secondBotContent = document.querySelector(".text-content:nth-of-type(4)");

const topFirstHeader = firstTopContent.querySelector("h4");
const topFirstPara = firstTopContent.querySelector("p");
const topSecondHeader = secondTopContent.querySelector("h4");
const topSecondPara = secondTopContent.querySelector("p");

// const botFirstHeader = firstBotContent.querySelector("h4");
// const botFirstPara = firstBotContent.querySelector("p");
// const botSecondHeader = secondTopContent.querySelector("h4");
// const botSecondPara = secondTopContent.querySelector("p");

topFirstHeader.textContent = siteContent["main-content"]["features-h4"];
topFirstPara.textContent = siteContent["main-content"]["features-content"];
topSecondHeader.textContent = siteContent["main-content"]["about-h4"];
topSecondPara.textContent = siteContent["main-content"]["about-content"];
// botFirstHeader.textContent = siteContent["main-content"]["services-h4"];
// botFirstPara.textContent = siteContent["main-content"]["services-content"];
