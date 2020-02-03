import { URL_API } from "./base";

export function getProducts(id){
    return fetch(`${URL_API}/productList`).then(result => result.json());
}