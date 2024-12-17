// @ts-check
"use client";
import Button from "@/app/components/button.jsx";
import Screen from "@/app/components/screen.jsx";
import config from "@/config";
import SWR from "@/functions/swr";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Page() {
	const { status, data } = useSession();
	const { isLoading, data: admins } = SWR(`${config.api.link}/admins`);

	if (status === "loading" || isLoading) return <Screen.Loading />;

	return (
		<Screen.Center>
			{status === "unauthenticated" ? (
				<Button.SignIn>Google ile Oturum aç</Button.SignIn>
			) : (
				<div className="flex flex-col items-center space-y-4">
					<Image src={data.user.image} alt={data.user.name} height={100} width={100} />
					<div className="flex gap-x-2">
						{admins.includes(data.user.email) && <Button.Admin>Dashboard</Button.Admin>}
						<Button.SignOut>Çıkış yap</Button.SignOut>
					</div>
				</div>
			)}
		</Screen.Center>
	);
}

