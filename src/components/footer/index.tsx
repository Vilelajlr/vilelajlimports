import { Sociais } from "../sociais";
import { departaments } from "./footerTypes";
export function Footer() {

 return (
   <footer className="bg-backgound-matteBlack pt-10 min-h-[300px]">
        <div className="text-white w-full min-h-[300px] max-w-[1440px] mx-auto py-5 flex flex-col justify-between ">
            <div className="flex items-center gap-10 sm:gap-0 sm:items-start justify-between flex-col sm:flex-row">
                <div>
                    <h1 className="text-text-white font-bold text-2xl mb-6 font-openSans">Departamentos</h1>
                    <ul className="list-none">
                        {departaments.map((departament, index) => (
                            <li key={index} className="pb-1">
                                <a href={departament.href} className="text-text-white font-roboto font-bold transition hover:text-Accent-neonPurple">{departament.departaments}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col items-center justify-center gap-5">
                    <h1 className="font-bold font-openSans text-2xl text-text-white">Permaneça conectado</h1>
                    <Sociais />
                </div>

                <div className="flex flex-col items-start justify-center gap-5">
                    <h1 className="font-bold font-openSans text-2xl text-text-white">Endereço</h1>
                    <div className="text-text-white font-roboto font-bold">
                        <p>Rua dos Bobos, nº 0</p>
                        <p>Bairro: Aldeota</p>
                        <p>Fortaleza - CE</p>
                        <p>CEP: 60160-170</p>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center">
                <span className="text-text-white font-roboto ">VilelaJlImports - 2024 &copy; Todos os direitos reservados.</span>
            </div>

        </div>
   </footer>
 );
}