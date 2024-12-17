// @ts-check
import Spinner from "@/app/components/spinner.jsx";

/** @param {{ children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>} args */
export default function Screen({ children, ...args }) {
	return (
		<div {...args}>{children}</div>
	);
}

/** @param {{ children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>} args */
Screen.Center = function ScreenCenter({ children, ...args }) {
	return (
		<Screen
			className="h-screen flex justify-center items-center"
			{...args}
		>
			{children}
		</Screen>
	);
};

Screen.Loading = function ScreenLoading() {
	return (
		<Screen.Center>
			<Spinner size={24} />
		</Screen.Center>
	);
};