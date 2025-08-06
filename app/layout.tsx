import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";

export const metadata: Metadata = {
	title: "iOCR",
	description: "Image to Text.",
};

const geistMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

type RootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body
				className={clsx(
					geistMono.variable,
					"font-mono bg-gray-50 dark:bg-gray-950 text-black dark:text-white px-3 lg:px-10 py-4 lg:py-10 min-h-dvh flex flex-col"
				)}
			>
				<h1 className="font-semibold text-center text-2xl bg-gradient-to-b dark:from-gray-50 dark:to-gray-200 from-gray-950 to-gray-800 bg-clip-text text-transparent select-none">
					iOCR
				</h1>

				<main className="grow flex flex-col lg:flex-row gap-6 py-4 lg:py-10">
					{children}
				</main>

				<footer className="lg:flex flex-row justify-between text-center text-sm dark:text-gray-400 text-gray-600 select-none">
					<p>
						Built with ❤️ by{" "}
						<A href="https://suresh.app">Suresh Kaleyannan</A>
					</p>
					<p>Made in Malaysia</p>
				</footer>

				<Toaster richColors theme="system" />
				<Analytics />
			</body>
		</html>
	);
}

function A(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
	return (
		<a {...props} className="text-black dark:text-white hover:underline">
			{props.children}
		</a>
	);
}
