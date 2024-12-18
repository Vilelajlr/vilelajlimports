/* eslint-disable @typescript-eslint/no-explicit-any */

export const selectProductsCount = (rootReducer: any) => {
    return rootReducer.cartReducer.products.reduce((acc: any, curr: any) => acc + curr.quantity, 0);
}

export const selectProductTotalPrice = (rootReducer: any) => {
    return rootReducer.cartReducer.products.reduce((acc: any, curr: any) => acc + curr.price * curr.quantity, 0);
}