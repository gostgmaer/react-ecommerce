import React from 'react'

const CartRight = () => {
    return (
        <div className='CartRight'>
            <div className="cartSummery">

                <div className="coupon">
                    <input type="text" className="form-control" placeholder="Coupon Code" />
                    <div className="input-group-append">
                        <button className="btn btn-coupon">Apply Coupon</button>
                    </div>
                </div>


                <div className="cartprices">
                    <h5 className="section-title"><span>Cart Summary</span></h5>
                    <div className="prices">
                        <div className="Subtotal">
                            <h6>Subtotal</h6>
                            <h6>$150</h6>
                        </div>
                        <div className="Shipping">
                            <h6 className="">Shipping</h6>
                            <h6 className="">$10</h6>
                        </div>
                    </div>
                    <div className="total-block">
                        <div className="Total">
                            <h5>Total</h5>
                            <h5>$160</h5>
                        </div>
                        <button className="btn btn-checkout">Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartRight