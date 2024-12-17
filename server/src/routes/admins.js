// @ts-check
import settings from "@/settings";

/** @type {import("express").Handler} */
export async function get(req, res) {
	if (req.method !== "GET") {
		res.status(405);
		return;
	}

	const admins = settings.admins;
	res.status(200).send([...admins]);
}