import React from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";

function KezakoModal(props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div>
                    <Button
                        variant="secondary"
                        size="lg"
                        className="rounded-full text-lg py-6 px-8 lg:flex hidden"
                    >
                        Qu'est-ce que c'est ?
                    </Button>
                    <Info
                        size={24}
                        className="stroke-white lg:hidden bg-transparent color-white"
                    />
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-screen-md">
                <DialogHeader>
                    <DialogTitle className="text-xl">
                        « J'y vais accompagné », propulsé par 5191
                    </DialogTitle>
                </DialogHeader>
                <div className="text-lg space-y-4 my-2">
                    <p>
                        Sécurité, partage et collectivité : voilà les valeurs
                        que nous souhaitions réunir dans un seul et même
                        service.
                    </p>
                    <p>
                        Fiers de nos 80 ans dans l'industrie du transport, en
                        collaboration avec la fondation{" "}
                        <a
                            className="border-b hover:italic"
                            href="https://fondationfais.org/"
                        >
                            FAiS (Fondation pour les Aînés et l'Innovation
                            Sociale)
                        </a>{" "}
                        Taxi Coop Québec 5191 est ravi de proposer le projet «
                        J'y vais accompagner ».
                    </p>
                    <p>
                        Avec comme combat l'isolement social et le respect de
                        l'autonomie des aînés, JVA souhaite renforcer leurs
                        liens sociaux en les accompagnant durant la plupart de
                        leurs déplacements et activités quotidiennes, et en leur
                        assurant une assistance jusqu'à ce qu'ils soient rentrés
                        à bon port.
                    </p>
                    <p>
                        Chaque trajet, un moment de partage et de soutien, une
                        compagnie ; parce que chaque déplacement mérite un
                        compagnon de confiance.
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default KezakoModal;
