

import { Carrosel } from "../../components/carrosel";
import { InfosHome } from "../../components/infosHome";
import { Instagram } from "../../components/instagram";
import { MaisVendas } from "../../components/maisVendas";
import { Ofertas } from "../../components/ofertas";
import { ReviewsCarousel } from "../../components/reviews";





export function Home(){

    

    return (
        <main className="bg-backgound-whiteBack min-h-[100dvh] pt-[10dvh]">
            <div>
                <Carrosel />
                <InfosHome />
            </div>
           

            <div className="w-full max-w-[1440px] mx-auto">
               <MaisVendas />
                <ReviewsCarousel />
            </div>

            <Ofertas />
            <Instagram />

        </main>
    );
}