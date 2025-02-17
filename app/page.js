import Image from "next/image";
import { Clock } from "@/components/Clock";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-full relative">
            <Clock />
            <h3 className="text-center text-xl uppercase absolute top-[31%]">
                Un tout nouveau service de transport pour aînés
            </h3>
            <h2 className="text-center text-8xl uppercase drop-shadow-lg font-nunito">
                Arrive
                <br />
                bientôt
            </h2>
            <h3 className="text-center text-xl uppercase absolute bottom-[33.5%]">
                Restez à l'affût !
            </h3>
        </div>
    );
}
