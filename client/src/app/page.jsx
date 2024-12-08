// @ts-check
"use client";
import config from "@/config.js";
import cn from "@/functions/cn.js";
import SWR from "@/functions/swr.js";

export default function Page() {
	const { isLoading, data } = SWR(config.api.link);

	return (
		<div className="grid h-full place-items-center">
			<div className={cn("flex items-center gap-x-2 rounded-full px-3 py-1.5", isLoading ? "bg-neutral-500/10  text-neutral-500" : data ? "bg-green-500/10  text-green-500" : "bg-red-500/10  text-red-500")}>
				<div className={cn("size-3 rounded-full", isLoading ? "bg-neutral-500" : data ? "bg-green-500" : "bg-red-500")}></div>
				<span className={cn("text-sm", isLoading ? "text-neutral-500" : data ? "text-green-500" : "text-red-500")}>
					{isLoading ? "Yükleniyor..." : data ? "Bağlandı." : "Bağlanamadı."}
				</span>
			</div>
		</div>
	);
}
