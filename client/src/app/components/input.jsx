// @ts-check
import React, { forwardRef } from "react";
import { CiSearch } from "react-icons/ci";

// eslint-disable-next-line no-inline-comments
const Input = forwardRef(function Input(/** @type {React.InputHTMLAttributes<HTMLInputElement>} */ { ...args }, ref) {
	return <input {...args} ref={ref} />;
});

Input.Search = function InputSearch() {
	return (
		<form action={"/search"} className="ml-24 flex h-10 w-[39.5rem] flex-row rounded-full border border-[#303030] bg-[#121212]">
			<Input type="text" name="query" autoComplete="off" autoCorrect="off" placeholder="Ara" className="ml-5 size-full placeholder-[#666] focus:outline-none bg-transparent" required/>
			<button type="submit" className="flex h-full w-16 items-center justify-center rounded-r-full border-l border-[#303030] bg-[#222222]">
				<CiSearch size={24} />
			</button>
		</form>
	);
};

export default Input;