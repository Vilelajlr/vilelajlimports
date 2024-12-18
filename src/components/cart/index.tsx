import { useSelector } from "react-redux";
import * as Styles from "./styles";
import CartItem from "../cart-item";

import { RootState } from "../../redux/store";
import { selectProductTotalPrice } from "../../redux/cart/cart.selector";


interface ICart {
    isVisible: boolean;
    setIsVisible: (value: boolean) => void;
}

const Cart = ({ isVisible, setIsVisible }: ICart) => {
    const handleEscapeAreaClick = () => setIsVisible(false);


    

    const { products } = useSelector((state: RootState) => state.cartReducer);

    const totalPrice = useSelector(selectProductTotalPrice);

    const formatoReal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice);

    return (
        <Styles.CartContainer isVisible={isVisible}>
            <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
            <Styles.CartContent>
                <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

                {products.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))}


                {
                    products.length != 0 && (
                        <Styles.CartTotal>   
                            <div>
                                <span>Total </span>
                                <span>{formatoReal}</span>
                            </div>

                            
                            <button className="px-4 py-2 bg-backgound-matteBlack text-text-white rounded-md transition ease-in-out hover:bg-backgound-whiteBack hover:text-backgound-matteBlack">
                                Finalizar Compra
                            </button>
                            

                        </Styles.CartTotal>
                    )
                }

            </Styles.CartContent>
        </Styles.CartContainer>
    );
};

export default Cart;
