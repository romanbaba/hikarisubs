// @ts-check
import cn from "@/functions/cn";
import { Loader2 } from "lucide-react";
import { signIn, signOut } from "next-auth/react";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

/** @param {{ children: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>} args */
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
	const [ isAuthorizing, setAuthorizing ] = useState(false);
	const handleChange = () => {
		signIn("google");
		setAuthorizing(!isAuthorizing);
	};

	return (
		<Button
			disabled={isAuthorizing}
			onClick={handleChange}
			className={cn("px-4 py-1.5 flex items-center justify-center gap-x-2 rounded-full text-black bg-white text-sm font-semibold hover:bg-white/70 transition-all", isAuthorizing && "bg-white/70 cursor-not-allowed")}
			{...args}
		>
			{isAuthorizing ? <Loader2 size={14} className="animate-spin font-semibold" /> : <FaGoogle />} {children}
		</Button>
	);
};

/** @param {{ children: React.ReactNode } & React.HTMLAttributes<HTMLButtonElement>} args */
Button.SignOut = function ButtonSignOut({ children, ...args }) {
	return (
		<Button
			onClick={() => signOut()}
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