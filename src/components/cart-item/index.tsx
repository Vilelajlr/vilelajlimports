import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";


import * as Styles from "./styles";
import { Product } from "../../service/apiTypes";
import { useDispatch } from "react-redux";
import { decrementProduct, incrementProduct, removeProductFromCart } from "../../redux/cart/action";



interface Products {
    product: Product;
}

    



const CartItem = ({ product }: Products) => {

    const dispatch = useDispatch();

    const handleRemove = (product: Product) => {
        dispatch(removeProductFromCart(product));
    }

    const handleIncrement = (product: Product) => {
        dispatch(incrementProduct(product));
    }

    const handleDecrement = (product: Product) => {
        if(product.quantity === 1) {
            dispatch(removeProductFromCart(product));
        } else {
            dispatch(decrementProduct(product));
        }
    }

    const truncateTitle = (title: string) =>
        title.length > 20 ? title.substring(0, 35) + "..." : title;



    return (
        <Styles.CartItemContainer>
            <Styles.CartItemImage thumbnail={product.thumbnail} />

            <Styles.CartItemInfo>
                <p>{truncateTitle(product.title)}</p>
                <p>R${product.price}</p>

                <Styles.CartItemQuantity>
                    <AiOutlineMinus
                        size={20}
                        aria-label={`Decrease quantity of ${product.title}`}
                        onClick={() => handleDecrement(product)}
                    />
                    <p>{product.quantity}</p>
                    <AiOutlinePlus
                        size={20}
                        aria-label={`Increase quantity of ${product.title}`}
                        onClick={() => handleIncrement(product)}
                    />
                </Styles.CartItemQuantity>
            </Styles.CartItemInfo>

            <Styles.RemoveButton
                aria-label={`Remove ${product.title}`}
                onClick={() => handleRemove(product)}

            >
                <AiOutlineClose size={25} />
            </Styles.RemoveButton>
        </Styles.CartItemContainer>
    );
}

export default CartItem;