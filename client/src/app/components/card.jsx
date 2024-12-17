// @ts-check
import Image from "next/image";
import React from "react";

/** @param {{ children: React.ReactNode; } & React.HTMLAttributes<HTMLDivElement>} args */
export default function Card({ children, ...args }) {
	return (
		<div {...args}>
			{children}
		</div>
	);
}

/** @param {{ title: string; description: string; minutes: string; background: string; }} args */
Card.Thumbnail = function CardThumbnail({ title, description, minutes, background }) {
	return (
		<Card className="cursor-pointer group">
			<div className="relative z-0 w-[19.387rem] h-[10.904rem] overflow-hidden rounded-xl group-hover:rounded-none transition-all">
				<Image src={background} alt={title} width={310.192} height={174.464} className="rounded-xl group-hover:rounded-none transition-all"/>
				<div className="absolute left-0 top-0 z-20 flex h-full w-full items-end justify-end py-2 px-3">
					<span className="text-xs font-semibold py-1 px-2  rounded bg-[#00000099]">{minutes}</span>
				</div>
			</div>
			<div className="mt-1">
				<h1 className="text-lg font-semibold">{title}</h1>
				<p className="text-sm text-[#aaa] mb-1">{description}</p>
			</div>
		</Card>
	);
};