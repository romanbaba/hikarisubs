// @ts-check
"use client";
import Header from "@/app/components/header.jsx";
import Screen from "@/app/components/screen.jsx";
import config from "@/config";
import SWR from "@/functions/swr";
import { useSession } from "next-auth/react";

export default function Page() {
	const { status, data } = useSession();
	const { isLoading, data: admins } = SWR(`${config.api.link}/admins`);

	if (status === "loading" || isLoading) return <Screen.Loading />;

	return (
		<div className="grid h-full place-items-center">
			<div className="h-full w-[1194px]">
				<Header />
				<Screen.Center>
					<div className="flex flex-col items-center">
						<h1 className="font-semibold text-2xl">Bir şeyler ters gitti.</h1>
						<p className="text-[#a7a7a7]">Sana gösterebilecek seri veya film bulamadık.</p>
					</div>
				</Screen.Center>
			</div>
		</div>
	);
}
