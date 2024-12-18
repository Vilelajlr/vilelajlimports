import { FaInstagram } from "react-icons/fa6";

export function Instagram() {
 return (
   <section className="min-h-[300px] flex flex-col gap-5 items-center justify-center">
        <div className="contents">
            <h1 className="flex gap-1 items-center justify-center text-3xl sm:text-5xl font-montserrat font-bold"><FaInstagram /> <span>VilelaJLImports</span></h1>
            <span className="text-xl font-roboto">Estamos no instagram</span>
            <a href="#" className="px-5 py-2 border border-solid border-black rounded-[70px] font-bold font-roboto transition-colors ease-in-out delay-150 hover:text-text-white hover:bg-black ">SIGA-NOS</a>
        </div>
   </section>
 );
}