import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

export function Ofertas() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(email);
    }


 return (
   <section className="bg-backgound-matteBlack w-full min-h-[200px] mt-24 flex-col gap-14 flex items-center justify-center py-24">
        
            <div className="text-text-white text-center">
                <h1 className="font-bold text-5xl text-center font-roboto">Receba todas as Ofertas</h1>
                <span className="text-sm">Quer receber nossas ofertas? Cadastre-se e comece a recebê-las!</span>
            </div>

            <form 
                onSubmit={handleSubmit} 
                className="sm:w-[700px] w-[90%]"
            >

                <div className="w-full relative">
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="w-full h-12 rounded-md px- text-lg font-roboto p-4 font-bold outline-none"
                    />
                    <button className="absolute right-2 top-[50%] translate-y-[-50%]"><FaArrowRight size={30}/></button>
                </div>
            </form>
   </section>
 );
}
