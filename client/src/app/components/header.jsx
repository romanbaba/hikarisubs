import Button from "@/app/components/button.jsx";
import Input from "./input";

export default function Header() {
	return (
		<div className="mt-3">
			<div className="flex w-full gap-x-2 justify-between items-center">
				<Input.Search />
				<Button.SignIn>Google ile Oturum aç</Button.SignIn>
			</div>
		</div>
	);
}