import { CiCreditCard1 } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { FaArrowsRotate } from "react-icons/fa6";
import { infos } from "./infosType";

export function InfosHome() {

    const handleIcons = (icons: string) => {

        switch (icons) {
            case 'frete':
                return <TbTruckDelivery  size={50} color="white"/>

            case 'card':
                return <CiCreditCard1  size={50} color="white"/>
                
            case 'seguro':
                return <MdSecurity  size={50} color="white"/>
                
            case 'garantia':
                return <FaArrowsRotate  size={50} color="white"/>
                
            }
        }

    

    


 return (
   <section className="w-full flex items-center justify-center h-[200px] bg-backgound-matteBlack">
        <div className="w-full max-w-[1440px] h-full flex items-center justify-center gap-10 sm:gap-20">
            {
                infos.map((infos, index) => (
                    <div key={index} className="flex items-center sm:gap-5 sm:border rounded-md sm:p-3 sm:w-[300px] h-[120px]">
                        <div>
                            <span>{handleIcons(infos.icon)}</span>
                        </div>
                        <div className=" hidden sm:block">
                            <div>
                                <h1 className="text-text-white font-bold font-openSans">{infos.title}</h1>
                                <span className="text-text-white font-openSans">{infos.description}</span>
                            </div>
                            
                        </div>
                    </div>
                ))
            }
        </div>
   </section>
 );


}