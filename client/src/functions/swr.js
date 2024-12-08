"use client";
import useSWR from "swr";

/** @param {string} url  */
export default function SWR(url) {
	return useSWR(url, async (args) => {
		const response = await fetch(args);
		const data = await response.json();

		return data;
	});
}