import { Geist, Geist_Mono, Nunito } from "next/font/google";
import Image from "next/image";
import KezakoModal from "@/components/KezakoModal";

import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const nunito = Nunito({
    variable: "--font-nunito",
    subsets: ["latin"],
});

export const metadata = {
    title: "J'y vais accompagné",
    description:
        "Un nouveau service de transport et d'accompagnement pour les aînés.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#5603AD] ${nunito.variable} overflow-hidden`}
            >
                <div className="h-screen w-screen isolate overflow-y-auto overflow-x-hidden text-white/80">
                    <header className="relative lg:absolute top-0 z-50 w-full">
                        <nav className="flex flex-1 items-center justify-between p-6 xl:py-8">
                            <div className="flex-col items-center px-8">
                                <Image
                                    src="logo-jva.svg"
                                    alt="5191"
                                    width="120"
                                    height="120"
                                />
                            </div>
                            <div className="px-8">
                                <KezakoModal />
                            </div>
                        </nav>
                    </header>
                    <Image
                        alt="background image"
                        src={
                            "https://images.unsplash.com/photo-1603306557434-284b08b2e0c2?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                        }
                        fill
                        className="fixed inset-0 w-full h-full object-cover -z-10 opacity-80"
                    />
                    <div className="mix-blend-exclusion opacity-40 absolute top-0 h-screen w-screen overflow-hidden pointer-events-none">
                        <video
                            className="absolute top-1/2 left-1/2 w-auto h-auto -translate-x-1/2 -translate-y-1/2 min-h-screen min-w-screen object-cover z-0"
                            autoPlay
                            loop
                            muted
                        >
                            <source src="file.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div
                        className="
                    max-w-2xl pt-32 pb-56 mx-12"
                    >
                        {children}
                    </div>
                    <footer className="flex flex-col gap-10 lg:gap-0 lg:flex-row w-full items-end justify-between lg:absolute lg:bottom-0 p-6 xl:py-8">
                        <div className="order-2 lg:order-1">
                            © {new Date().getFullYear()}, tous droits réservés.
                        </div>
                        <div className="flex gap-6 items-end lg:order-2 order-1">
                            <div className="flex gap-2">
                                Propulsé par
                                <Image
                                    src="/logo-5191.svg"
                                    alt="5191 logo"
                                    height={56}
                                    width={56}
                                />
                            </div>
                            <div className="flex gap-2 items-end">
                                <Image
                                    src="/logo-fais.png"
                                    alt="FAIS logo"
                                    height={120}
                                    width={120}
                                />
                            </div>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
