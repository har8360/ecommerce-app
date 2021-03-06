import CartActionTypes from './cart.types'

const INITIL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}
export default cartReducer;