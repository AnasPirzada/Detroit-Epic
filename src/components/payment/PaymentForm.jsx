import { userApi } from '@/Apis'; // Ensure this points to your actual API file
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.log('Stripe.js has not loaded yet.');
      return;
    }

    try {
      // Static data for the API request
      const paymentData = {
        amount: 1000, // Amount in cents
        currency: 'usd',
        paymentMethodId: 'pm_card_visa', // Replace with a valid payment method ID
        callbackUrl: 'https://yourcallbackurl.com',
      };

      // Call your API
      const response = await userApi.Createrstripe(paymentData);
      console.log('stripe response', response);

      if (response?.paymentIntent.status) {
        console.log('Payment successful:', response.paymentIntent.status);
        toast.success(response.paymentIntent.status);
        setPaymentSuccess(true);

        // Redirect to the login page after 2 seconds
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        console.log(response);
        console.error(
          'Payment failed:',
          response?.data?.message || 'Unknown error'
        );
      }
    } catch (error) {
      console.error('API error:', error);
    }
  };

  return (
    <>
      <ToastContainer />

      <div className='max-w-md mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg'>
        <h2 className='text-2xl font-semibold text-gray-800 text-center mb-6'>
          Secure Payment
        </h2>
        <p className='text-gray-500 text-sm text-center mb-8'>
          Complete your payment using a credit or debit card.
        </p>

        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Card Element */}
          <div className='space-y-2'>
            <label
              htmlFor='card-element'
              className='block text-sm font-medium text-gray-700'
            >
              Credit or Debit Card
            </label>
            <div className='p-4 border border-gray-300 rounded-lg shadow-sm focus-within:border-blue-500'>
              <CardElement
                id='card-element'
                className='text-gray-700 focus:outline-none'
              />
            </div>
          </div>

          <button
            type='submit'
            className='w-full py-3 bg-gray-900 text-white rounded-lg font-semibold shadow-md'
          >
            Pay $10.00
          </button>

          {/* Success Message */}
          {paymentSuccess && (
            <div className='mt-4 text-center text-green-600'>
              <p>Payment Successful!</p>
            </div>
          )}
        </form>

        {/* Footer Info */}
        <div className='mt-6 text-center text-sm text-gray-500'>
          <p>Your payment information is encrypted and secure.</p>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
