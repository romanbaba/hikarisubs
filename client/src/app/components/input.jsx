// @ts-check
import React from "react";
import { FaSearch } from "react-icons/fa";

/** @param {React.InputHTMLAttributes<HTMLInputElement>} args */
export default function Input({ ...args }) {
	return (
		<input {...args} />
	);
}

Input.Search = function InputSearch() {
	return (
		<div className="w-9/12 h-10 flex items-center rounded-[40px] border border-white/5 bg-[#121212]">
			<FaSearch color="#fafafa" className="mx-3" />
			<Input
				type="text"
				autoComplete="off"
				autoCorrect="off"
				placeholder="Ara"
				className="size-full bg-transparent focus:outline-none mr-5 placeholder-[#686868]"
			/>
		</div>
	);
};