import { Product } from "../../service/apiTypes";
import cartActionTypes from "./action-types";

interface CartState {
    products: Product[];
    totalPrice: number;
}

const initialState: CartState = {
    products: [],
    totalPrice: 0,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cartReducer = (state = initialState, action: any): CartState => {
    switch (action.type) {
        case cartActionTypes.ADD_PRODUCT: {
                const productIsAlreadyInCart = state.products.some(
                    (product) => product.id === action.payload.id
                );
                return {
                    ...state,
                    products: productIsAlreadyInCart
                        ? state.products.map((product) =>
                            product.id === action.payload.id
                                ? { ...product, quantity: product.quantity + 1 }
                                : product
                        )
                        : [...state.products, { ...action.payload, quantity: 1 }],
                    totalPrice: state.totalPrice + action.payload.price,
                };
            }
        case cartActionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((product) => product.id !== action.payload.id),
                totalPrice: state.totalPrice - action.payload.price,
            };
        case cartActionTypes.INCREMENT_PRODUCT:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                ),
                totalPrice: state.totalPrice + action.payload.price,
            };
        case cartActionTypes.DECREMENT_PRODUCT:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id
                        ? { ...product, quantity: product.quantity - 1 }
                        : product
                ),
                totalPrice: state.totalPrice - action.payload.price,
            };

        default:
            return state;
    }
};

export default cartReducer;
