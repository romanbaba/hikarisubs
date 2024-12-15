// @ts-check
import cn from "@/functions/cn";
import React from "react";

/** @param {{ key?: number; children: React.ReactNode; active?: boolean; }} args */
export default function Chip({ key = 0, children, active = false }) {
	return (
		<div key={key} className={cn(
			"m-[0.75rem] ml-0 min-h-8 flex items-center text-sm font-semibold rounded-[8px] bg-[#ffffff1a] px-[0.75rem] text-[#f1f1f1]",
			active && "bg-[#f1f1f1] text-[#1f1f1f]",
			!active && "hover:bg-[#3f3f3f] transition-colors"
		)}>
			{children}
		</div>
	);
}
