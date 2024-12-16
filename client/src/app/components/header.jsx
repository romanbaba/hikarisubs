// @ts-check
import Button from "@/app/components/button.jsx";
import Input from "@/app/components/input.jsx";
import Link from "next/link";
import Chip from "./chip";

export default function Header() {
	const tags = [
		"Genel",
		"Aksiyon",
		"Askeri",
		"Büyü",
		"Dram",
		"Ecchi",
		"Fantastik",
		"Gerilim",
		"Gizem",
		"Harem",
		"Isekai",
		"Komedi",
		"Korku",
		"Macera",
		"Mecha",
		"Müzik",
		"Okul",
		"Oyun",
		"Parodi",
		"Polisiye",
		"Suç",
		"Süper Güçler",
		"Şeytanlar",
		"Şizofreni",
		"Tarihi",
		"Uzay",
		"Vampir",
		"Yaşamdan Kesitler",
	].slice(0, 15);

	return (
		<div>
			<header className="flex items-center justify-between">
				<div>logo</div>
				<Input.Search />
				<Button.Session> Google ile Oturum aç </Button.Session>
			</header>
			<div className="flex justify-start mt-2">
				{tags.map((tag, index) => <Link key={index} href={"#"}><Chip active={index === 0}>{tag}</Chip></Link>)}
			</div>
		</div>
	);
}