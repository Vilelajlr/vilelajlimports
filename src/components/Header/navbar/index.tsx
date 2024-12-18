import { Link, useLocation } from "react-router";
import { links } from "./linkTypes";


export function Navbar() {

    const location = useLocation();


 return (
   <nav>
        <ul className="flex flex-col sm:flex-row text-text-white font-bold text-xl gap-10 ">
            {links.map((links, index) => (
                <li key={index} className={`hover:text-Accent-neonPurple transition delay-100 ${
                    location.pathname === links.href ? 'text-Accent-neonPurple' : ''
                }`}>
                    <Link to={links.href}>{links.name}</Link>
                </li>
            ))}
        </ul>
   </nav>
 );
}