// @ts-check
"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

/** @param {{ children: React.ReactNode }} args */
export default function Providers({ children }) {
	return (
		<SessionProvider>
			{children}
		</SessionProvider>
	);
}