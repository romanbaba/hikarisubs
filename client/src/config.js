// @ts-check
const config = {
	api: {
		link: process.env.NODE_ENV === "development" ? "http://localhost:3600/" : "http://localhost:3600/",
	},
};

export default config;