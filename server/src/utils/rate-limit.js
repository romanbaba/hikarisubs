// @ts-check
import { rateLimit } from "express-rate-limit";
import process from "process";

const message = {
	success: false,
	error: "Too many requests, please try again later.",
	status: 429,
};

function skip() {
	if (process.env["NODE_ENV"] === "development") return true;
}

export default rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 100,
	standardHeaders: "draft-7",
	legacyHeaders: false,
	message,
	skipFailedRequests: true,
	skip,
});