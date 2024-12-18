
import { FaFacebook, FaInstagram} from "react-icons/fa6";
import { sociais } from "./sociasTypes";
import { BsTiktok } from "react-icons/bs";



export function Sociais() {


    const handleSetIcons = (icon: string) => {
        switch (icon) {
            case "instagram":
                return <FaInstagram color="#E1306C" size={30}/>
            case "facebook":
                return <FaFacebook color="#1877F2" size={30}/>
            case "tiktok":
                return <BsTiktok color="#000000" size={30}/>
            default:
                return null;
        }
    }



 return (
        <div className="flex items-center justify-center gap-4">
            {
                sociais.map((social, index) => (
                        <a href={social.href} key={index} className="p-2 rounded-[50%] transition-transform bg-white hover:scale-110">
                            {handleSetIcons(social.icon)}
                        </a>    
                ))
            }
        </div>
   
 );
}