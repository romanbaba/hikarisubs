/** @type {import("next").NextConfig["images"]["remotePatterns"]} */
const remotePatterns = [
	{ protocol: "https", hostname: "image.tmdb.org" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: { remotePatterns },
};

export default nextConfig;
