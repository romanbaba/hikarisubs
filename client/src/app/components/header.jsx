// @ts-check
import Button from "@/app/components/button.jsx";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Header() {
	return (
		<div className="pt-[0.313rem]">
			<div className="py-[0.8rem] px-[1rem]">
				<div className="flex w-full gap-x-2 justify-between items-center">
					<div></div>
					<UserSide />
				</div>
			</div>
		</div>
	);
}

function UserSide() {
	const { status, data } = useSession();

	return (
		<>
			{status === "authenticated" ? (
				<div className="flex flex-row items-center justify-center space-x-5">
					<Image
						src={data.user.image}
						alt={data.user.name}
						className="rounded-full"
						height={40}
						width={40}
					/>


					<div className="flex flex-col items-start">
						<h2 className="text-xs text-[#9999a5]">Merhaba,</h2>
						<DropdownMenu.Root>
							<DropdownMenu.Trigger asChild>
								<button className="focus:outline-none text-sm">
									{data.user.name}
								</button>
							</DropdownMenu.Trigger>

							<DropdownMenu.Portal>
								<DropdownMenu.Content className="bg-[#161616] border border-white/5 mt-3 w-48 p-2 space-y-2 rounded-xl" sideOffset={5}>
									<DropdownMenu.Item className="text-sm hover:outline-none">
										Profil
									</DropdownMenu.Item>


									<DropdownMenu.Item className="text-sm hover:outline-none text-red-500 hover:text-red-500/70 transition-all">
										<Button.SignOut>Çıkış yap</Button.SignOut>
									</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Portal>
						</DropdownMenu.Root>
					</div>
				</div>
			) : (
				<Button.SignIn>Google ile Oturum aç</Button.SignIn>
			)}
		</>
	);
}