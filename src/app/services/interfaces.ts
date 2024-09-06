// export interface Product {
//     id: number;
//     title: string;
//     price: number;
//     category: string;
//     description: string;
//     image: string;
//     rating: {
//         rate: number,
//         count: number;
//     };
// }

export interface Product {
    id: number;
    title: string;
    description?: string;
    price: number;
    rating: number;
    thumbnail: string;
    category: string;
    brand: string;
}

export interface ApiResult {
    page: number;
    results: Product[];
    total_pages: number;
    total_results: number;
}

export interface TinResult {

}