import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

 const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async event => {
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
      setPaymentSuccess(true);

      // Redirect to the login page after payment success
      setTimeout(() => {
        navigate('/login'); // Redirect to the login page
      }, 2000); // Delay the redirect by 2 seconds for a better UX
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='space-y-2'>
          <label
            htmlFor='card-element'
            className='block text-lg font-medium text-gray-700'
          >
            Credit or Debit Card
          </label>
          <CardElement
            id='card-element'
            className='p-3 border border-gray-300 rounded-lg'
          />
        </div>

        <button
          type='submit'
          className='w-full bg-blue-500 text-white bg-black py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400'
        >
          Pay Now
        </button>

        {paymentSuccess && (
          <div className='mt-4 text-green-500'>
            <p>Payment Successful!</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default PaymentForm;
