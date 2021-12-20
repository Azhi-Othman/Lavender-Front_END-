/**
 *
 * Checkout
 *
 */

import React from 'react';

import Button from '../../Common/Button';

const Checkout = props => {
  const { authenticated, handleShopping, handleCheckout, placeOrder } = props;

  return (
    <div className='easy-checkout'>
      <div className='checkout-actions'>
        <Button
          variant='primary'
          text='بەردەوامبوون لە بازاڕی'
          onClick={() => handleShopping()}
        />
        {authenticated ? (
          <Button
            variant='primary'
            text='داواکردن'
            onClick={() => placeOrder()}
          />
        ) : (
          <Button
            variant='primary'
            text='دڵنیابوونەوە'
            onClick={() => handleCheckout()}
          />
        )}
      </div>
    </div>
  );
};

export default Checkout;
