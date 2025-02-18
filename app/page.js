"use client";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
    return (
        <div className="relative mt-32">
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl drop-shadow-lg font-nunito">
                    « J'y vais accompagné » arrive
                    <span className="text-9xl inline-flex mt-4">
                        BIENT
                        <span className="relative">
                            Ô
                            <svg
                                width="100"
                                className="absolute top-20 -translate-y-1 left-1/2 -translate-x-1/2"
                                viewBox="0 0 300 90"
                                fill="none"
                            >
                                <path
                                    d="M3.13013 19.916C7.88832 14.2293 16.3615 13.4787 22.0484 18.2494C45.2541 37.6756 94.4772 56.9492 156.919 53.896C185.341 52.5093 210.035 46.7972 229.92 39.8638L217.44 19.1654C215.773 16.4047 215.429 13.0462 216.511 10.0184C217.592 6.99059 219.971 4.59888 222.999 3.5048C239.131 -2.29636 257.134 0.158964 269.945 3.3267C276.548 4.9551 282.235 6.90153 286.293 8.44087C288.316 9.2169 289.958 9.89116 291.103 10.3873C291.675 10.629 292.133 10.8326 292.451 10.9852L292.846 11.1506L292.96 11.2142L292.998 11.227L293.011 11.2397H293.024C296.942 13.0844 299.372 17.1172 299.181 21.4426V21.5062L299.169 21.6461L299.143 22.066C299.118 22.4222 299.092 22.9183 299.041 23.5417C298.94 24.7884 298.774 26.5441 298.507 28.7068C297.985 33.0067 297.057 38.9479 295.415 45.5505C292.248 58.3487 286.014 75.4213 273.355 86.9855C270.988 89.1609 267.757 90.1532 264.576 89.6952C261.383 89.2245 258.584 87.3671 256.917 84.6065L244.068 63.3102C220.989 71.8974 191.906 79.0725 158.229 80.7136C90.4188 84.0213 34.1601 63.4119 4.80948 38.8334C-0.877448 34.0754 -1.62806 25.6026 3.13013 19.916Z"
                                    fill="#6F2DBD"
                                />
                            </svg>
                        </span>
                        T !
                    </span>
                </h2>
                <h3 className="text-2xl">
                    <a
                        href="http://www.taxiscoop-quebec.com/"
                        title="Taxi Coop Québec 5191"
                        className="border-b hover:italic"
                    >
                        Taxi Coop Québec 5191
                    </a>{" "}
                    est fier de préparer son tout nouveau service de transport
                    et d'accompagnement pour les aînés.<br></br>
                    Inscrivez-vous pour être informé de son lancement !
                </h3>
            </div>
            <div className="mt-12">
                <NewsletterForm />
            </div>
        </div>
    );
}
