/** @type {import("next").NextConfig["images"]["remotePatterns"]} */
const remotePatterns = [
	{ protocol: "https", hostname: "image.tmdb.org" },
	{ protocol: "https", hostname: "lh3.googleusercontent.com" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: { remotePatterns },
};

export default nextConfig;
