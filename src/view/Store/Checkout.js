import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'grommet';
import { Money } from 'grommet-icons'

import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';

const CURRENCY = 'EUR';

const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
  console.log(data);
};

const errorPayment = data => {
  alert('Payment Error');
  console.log(data);
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
    name={name}
    description={description}
    label="Obtener"
    panelLabel="Suscribete"
    ComponentClass="div"
    amount={fromEuroToCent(amount)}//Amount in cents $9.99
    token={onToken(amount, description)}
    locale="es"
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  >
    <Button
      hoverIndicator={{
        background: 'status-ok',
        textColor: 'white'
      }}
      primary
      style={{ borderRadius: '0' }}
      icon={<Money />}
      label='Suscribete'
    />
  </StripeCheckout>

export default Checkout;