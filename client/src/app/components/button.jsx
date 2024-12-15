// @ts-check
import React from "react";

/** @param {{ children: React.ReactNode } & React.HTMLAttributes<HTMLButtonElement>} args */
export default function Button({ children, ...args }) {
	return (
		<button {...args}>{children}</button>
	);
}

/** @param {{ children: React.ReactNode } & React.HTMLAttributes<HTMLButtonElement>} args */
Button.Session = function ButtonSession({ children, ...args }) {
	return (
		<Button
			className="px-4 py-1.5 flex items-center justify-center rounded-full text-black bg-white text-sm font-semibold hover:bg-white/70 transition-colors"
			{...args}
		>
			{children}
		</Button>
	);
};