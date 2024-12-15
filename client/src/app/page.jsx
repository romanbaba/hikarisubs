// @ts-check
"use client";
import Header from "@/app/components/header.jsx";
import config from "@/config.js";
import SWR from "@/functions/swr.js";
import Link from "next/link";
import Card from "./components/card";
import Chip from "./components/chip";

export default function Page() {
	const { isLoading, data } = SWR(config.api.link);
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
		"Isekai",
		"Korku",
		"Macera",
		"Mecha",
		"Müzik",
		"Okul",
		"Oyun",
		"Spor",
		"Suç",
		"Süper Güçler",
		"Şeytanlar",
		"Şizofreni",
		"Tarihi",
		"Uzay",
		"Vampir",
		"Yaşamdan Kesitler",
	].slice(0, 17);

	/** @type {{ title: string; description: string; minutes: string; background: string; }[]} */
	const movies = [
		{ title: "Dream", description: "Blue Lock — 1. Sezon 1. Bölüm", background: "https://image.tmdb.org/t/p/original/ejH2YmotIR43Ly3rg4sFyRDpgTW.jpg", minutes: "24:57" },
		{ title: "The Blood Warfare", description: "Bleach — 2. Sezon 1. Bölüm", background: "https://image.tmdb.org/t/p/original/wh0G2DV1rR914iMKmFlqgmXH7AC.jpg", minutes: "24:24" },
		{ title: "First Love", description: "Dandadan — 1. Sezon 11. Bölüm", background: "https://image.tmdb.org/t/p/original/ukLCwrihDj0hYDMolv5KsNanIed.jpg", minutes: "24:28" },
		{ title: "You Won't Miss Out", description: "Kimi wa Meido-sama — 1. Sezon 4. Bölüm", background: "https://image.tmdb.org/t/p/original/3WZoU2MP03ZflkTfFDU44oELlWk.jpg", minutes: "24:00" },
		{ title: "Girls...", description: "Blue Box — 1. Sezon 12. Bölüm", background: "https://image.tmdb.org/t/p/original/5SiX9HLF2OOvh3kJA2fxZP4SLq2.jpg", minutes: "23:48" },
		{ title: "War Game", description: "Danmachi — 5. Sezon 10. Bölüm", background: "https://image.tmdb.org/t/p/original/2jitn2Zxro2CgRGtZe8oi1CpiGl.jpg", minutes: "23:51" },
		{ title: "The Dirt Under Your Nails", description: "Arcane — 2. Sezon 9. Bölüm", background: "https://image.tmdb.org/t/p/original/7wYoQZAdbB6e3CFDDYvxQY1sM7.jpg", minutes: "50:21" },
		{ title: "The End of Dawn", description: "Kami no Tou — 2. Sezon 23. Bölüm", background: "https://image.tmdb.org/t/p/original/A4nVRXZmxk9mGlQq8j2pgA0IGer.jpg", minutes: "23:40" },
	];

	return (
		<div className="max-w-[1346px] container mx-auto">
			<div className="p-[1.33em]">
				<Header />
				<div className="flex justify-start mt-2">
					{tags.map((tag, index) => <Link key={index} href={"#"}><Chip active={index === 0}>{tag}</Chip></Link>)}
				</div>
				<div className="pt-4 grid grid-cols-4 gap-x-[0.5rem] gap-y-[1.5rem]">
					{movies.map((movie, index) => <Card.Thumbnail {...movie} key={index} />)}
				</div>
			</div>
		</div>
	);
}

