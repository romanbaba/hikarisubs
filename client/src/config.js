// @ts-check
const config = {
	api: {
		link: process.env.NODE_ENV === "development" ? "http://localhost:3600/" : "https://hikarisubs.onrender.com/",
	},
};

export default config;