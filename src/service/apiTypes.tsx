export interface Product {
    id: string;
    title: string;
    price: number;
    currency_id: string;
    sold_quantity: number;
    available_quantity: number;
    thumbnail: string;
    quantity: number;
}

export interface SearchResponse {
    results: Product[];
}



export interface User {
    name: string;
    photo: string;
  }
  
export interface Review {
    id: number;
    user: User;
    rating: number; 
    comment: string;
    product: string;
    product_photo: string;
}
  