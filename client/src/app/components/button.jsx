// @ts-check
import { signIn, signOut } from "next-auth/react";
import React from "react";
import { FaGoogle } from "react-icons/fa";

/** @param {{ children: React.ReactNode } & React.HTMLAttributes<HTMLButtonElement>} args */
export default function Button({ children, ...args }) {
	return (
		<button {...args}>{children}</button>
	);
}

/** @param {{ children: React.ReactNode } & React.HTMLAttributes<HTMLButtonElement>} args */
Button.SignIn = function ButtonSignIn({ children, ...args }) {
	return (
		<Button
			onClick={() => signIn("google")}
			className="px-4 py-1.5 flex items-center justify-center gap-x-2 rounded-full text-black bg-white text-sm font-semibold hover:bg-white/70 transition-colors"
			{...args}
		>
			<FaGoogle /> {children}
		</Button>
	);
};

/** @param {{ children: React.ReactNode } & React.HTMLAttributes<HTMLButtonElement>} args */
Button.SignIn = function ButtonSignIn({ children, ...args }) {
	return (
		<Button
			onClick={() => signIn("google")}
			className="px-4 py-1.5  flex items-center justify-center gap-x-2 rounded-full text-black bg-white text-sm font-semibold hover:bg-white/70 transition-colors"
			{...args}
		>
			<FaGoogle /> {children}
		</Button>
	);
};

/** @param {{ children: React.ReactNode } & React.HTMLAttributes<HTMLButtonElement>} args */
Button.SignOut = function ButtonSignOut({ children, ...args }) {
	return (
		<Button
			onClick={() => signOut()}
			className="px-4 py-1.5 flex items-center justify-center gap-x-2 rounded-full text-white bg-[#e5484d] text-sm font-semibold hover:bg-[#e5484d]/70 transition-colors"
			{...args}
		>
			{children}
		</Button>
	);
};

/** @param {{ children: React.ReactNode } & React.HTMLAttributes<HTMLButtonElement>} args */
Button.Admin = function ButtonAdmin({ children, ...args }) {
	return (
		<Button
			onClick={() => signOut()}
			className="px-4 py-1.5 flex items-center justify-center gap-x-2 rounded-full text-white bg-[#0090ff] text-sm font-semibold hover:bg-[#0090ff]/70 transition-colors"
			{...args}
		>
			{children}
		</Button>
	);
};