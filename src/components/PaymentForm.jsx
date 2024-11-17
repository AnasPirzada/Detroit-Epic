import React from 'react'
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe('your-public-key-here'); // Replace with your actual Stripe public key

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }

    // Create a payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log('[Error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Handle the payment intent logic here
      // You would typically send the payment method ID to your backend here
      setPaymentSuccess(true);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="card-element" className="block text-lg font-medium text-gray-700">
          Credit or Debit Card
        </label>
        <CardElement id="card-element" className="p-3 border border-gray-300 rounded-lg" />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white bg-black py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
      >
        Pay Now
      </button>

      {paymentSuccess && (
        <div className="mt-4 text-green-500">
          <p>Payment Successful!</p>
        </div>
      )}
    </form>
    </div>
  )
}
export default PaymentForm