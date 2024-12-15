// @ts-check
import Button from "@/app/components/button.jsx";
import Input from "@/app/components/input.jsx";

export default function Header() {
	return (
		<header className="flex items-center justify-between">
			<div>logo</div>
			<Input.Search />
			<Button.Session> Google ile Oturum aç </Button.Session>
		</header>
	);
}