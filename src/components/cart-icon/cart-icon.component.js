import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCardHidden } from '../../redux/cart/cart.actions'

const CartIcon = ({ toggleCardHidden }) => (
    <div className='cart-icon' >
        <ShoppingIcon className='shopping-icon' onClick={toggleCardHidden} />
        <span className='item-count'> 0 </span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
})
export default connect(
    null, 
    mapDispatchToProps)(CartIcon);