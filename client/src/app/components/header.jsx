// @ts-check
import Button from "@/app/components/button.jsx";
import Input from "@/app/components/input.jsx";

export default function Header() {
	return (
		<header className=" w-full flex items-center justify-between pl-[1.33em]">
			<div>logo</div>
			<Input.Search />
			<Button.Session> Google ile Oturum aç </Button.Session>
		</header>
	);
}