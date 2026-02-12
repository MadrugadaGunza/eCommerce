import { API_URL } from "./api"

export const GET_PRODUCTS = () => {
    return {
        url: `${API_URL}/products`,
        options: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }
}

type GetProductByIdParams = {
    id: number
}

export const GET_PRODUCT_BY_ID = ({ id }: GetProductByIdParams) => {
    return {
        url: `${API_URL}/products/${id}`,
        options: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }
}
