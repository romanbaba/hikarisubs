// @ts-check
/** @type {import("express").Handler} */
export async function get(req, res) {
	if (req.method !== "GET") {
		res.status(405);
		return;
	}

	res.status(200).send({ content: "slm" });
}