export const getProducts = (payload) => {
    return {
        type: "GET_PRODUCTS",
        payload
    }
}

export const getProduct = (payload) => {
    return {
        type: "GET_PRODUCT",
        payload
    }
}

export const addBorderImg = (payload) => {
    return {
        type: "ADD_BORDER_IMAGE",
        payload
    }
}

export const addPreviewImg = (payload) => {
    return {
        type: "ADD_PREVIEW_IMAGE",
        payload
    }
}

export const addProductToCart = (payload) => {
    return {
        type: "ADD_PRODUCT_TO_CART",
        payload
    }
}

export const clearCart = (payload) => {
    return {
        type: "CLEAR_CART",
        payload
    }
}