const initialState = {
    products: [],
    product: [],
    cart: [],
    borderImg: null,
    previewImg: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "GET_PRODUCTS":
        return { ...state, products: payload }
    case "GET_PRODUCT":
        return { ...state, product: payload }
    case "ADD_BORDER_IMAGE":
        return { ...state, borderImg: payload }
    case "ADD_PREVIEW_IMAGE":
        return { ...state, previewImg: payload }
    case "ADD_PRODUCT_TO_CART":
        return { ...state, cart: [...state.cart, payload] }
    case "CLEAR_CART":
        return { ...state, cart: payload }
    default:
        return state
    }
}
