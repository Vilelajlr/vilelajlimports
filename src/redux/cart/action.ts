import { Product } from "../../service/apiTypes";
import cartActionTypes from "./action-types";

export const addProductToCart = (product: Product) => ({
        type: cartActionTypes.ADD_PRODUCT,
        payload: product
})

export const removeProductFromCart = (product: Product) => ({
        type: cartActionTypes.REMOVE_PRODUCT,
        payload: product
})

export const incrementProduct = (product: Product) => ({
        type: cartActionTypes.INCREMENT_PRODUCT,
        payload: product
})

export const decrementProduct = (product: Product) => ({
        type: cartActionTypes.DECREMENT_PRODUCT,
        payload: product
})