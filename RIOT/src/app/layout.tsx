import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "리그오브레전드",
    description: "리그오브레전드 백과사전",
    icons: {
        icon: "./icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <link rel="icon" href="./icon.png" sizes="any" />
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <header>
                    <nav className="nav flex justify-between bg-[#111]">
                        <Link className="btn" href={"/"}>
                            홈
                        </Link>
                        <Link className="btn" href={"/champions"}>
                            챔피언 목록
                        </Link>
                        <Link className="btn" href={"/items"}>
                            아이템 목록
                        </Link>
                        <Link className="btn" href={"/rotation"}>
                            챔피언 로테이션
                        </Link>
                    </nav>
                </header>
                {children}
            </body>
        </html>
    );
}
