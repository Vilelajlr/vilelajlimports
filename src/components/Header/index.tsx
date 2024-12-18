import { BiCart } from "react-icons/bi";
import { Navbar } from "./navbar";
import { MdAccountCircle } from "react-icons/md";
import Cart from "../../components/cart";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectProductsCount } from "../../redux/cart/cart.selector";
import { Link } from "react-router";

export function Header() {
    const [cartIsVisible, setCartIsVisible] = useState(false);
    const [menuIsVisible, setMenuIsVisible] = useState(false); // Estado para o menu hambúrguer
    
    const handleCartClick = () => {
        setCartIsVisible(true);
    };

    const cartQuantity = useSelector(selectProductsCount);

    const toggleMenu = () => {
        setMenuIsVisible(!menuIsVisible);
    };

    return (
        <header className="w-full h-[10dvh] fixed bg-backgound-matteBlack z-50">
            <div className="w-full h-full max-w-[1440px] flex items-center justify-between mx-auto px-4 md:px-8">
    
                <div>
                    <Link to="/">
                        <h1 className=" text-xl sm:text-3xl text-text-white font-bold font-montserrat">VilelaJLimports</h1>
                    </Link>
                </div>

                <div className="hidden md:flex">
                    <Navbar />
                </div>

                <div className="flex items-center gap-5">
                    <div onClick={handleCartClick} className="cursor-pointer relative">
                        <BiCart fontSize={25} color="white" />
                        {cartQuantity > 0 && (
                            <span className="absolute top-0 right-0 bg-blue-500 w-[18px] h-[18px] rounded-[50%] flex items-center justify-center font-bold text-sm text-white">{cartQuantity}</span>
                        )}
                    </div>
                    <MdAccountCircle fontSize={25} color="white" />
                    <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        <div className="w-6 h-0.5 bg-white my-1"></div>
                        <div className="w-6 h-0.5 bg-white my-1"></div>
                        <div className="w-6 h-0.5 bg-white my-1"></div>
                    </button>
                </div>
            </div>

            <div 
                className={`fixed inset-0 bg-[rgba(0,0,0,0.8)] z-40 transform transition-transform duration-500 ease-in-out ${menuIsVisible ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-end p-5">
                    <button onClick={toggleMenu} className="text-white text-3xl">×</button>
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                    <Navbar />
                </div>
            </div>
        </header>
    );
}
