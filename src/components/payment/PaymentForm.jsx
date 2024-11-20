import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { ToastContainer, toast } from 'react-toastify';
import { userApi } from '../../Apis/index.jsx';

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
      const cardElement = elements.getElement(CardNumberElement);

      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        console.error(error);
        toast.error('Payment failed. Please try again.');
        return;
      }

      console.log('PaymentMethod:', paymentMethod);

      // Simulating a payment request
      const paymentData = {
        amount: 1000,
        currency: 'usd',
        paymentMethodId: paymentMethod.id,
        callbackUrl: 'https://yourcallbackurl.com',
      };

      // Replace with your actual API call
      const response = await userApi.Createrstripe(paymentData);
      if (response?.paymentIntent?.status === 'succeeded') {
        toast.success('Payment Successful!');
        setPaymentSuccess(true);
        setTimeout(() => navigate('/login'), 2000);
      } else {
        toast.error('Payment failed.');
        navigate('/error');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred.');
      navigate('/error');
    }
  };
  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = value => {
    setValue(value);
  };
  return (
    <>
      <ToastContainer />
      <div className='max-w-lg mx-auto mt-10 p-6 bg-white border border-gray-200 shadow-md rounded-lg'>
        <h2 className='text-xl font-semibold text-gray-800 mb-4 text-center'>
          Pay with Card
        </h2>

        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Email */}
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full p-3 border border-gray-300 rounded-md'
              placeholder='Enter your email'
            />
          </div>

          {/* Cardholder Name */}
          <div>
            <label
              htmlFor='cardholder-name'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Cardholder Name
            </label>
            <input
              type='text'
              id='cardholder-name'
              className='w-full p-3 border border-gray-300 rounded-md'
              placeholder='Full name on card'
            />
          </div>

          {/* Country */}
          <div>
            <label
              htmlFor='country'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Country
            </label>
            <Select options={options} value={value} onChange={changeHandler} />
          </div>

          {/* Card Number */}
          <div>
            <label
              htmlFor='card-number'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Card number
            </label>
            <div className='p-3 border border-gray-300 rounded-md flex items-center'>
              <CardNumberElement
                id='card-number'
                options={{
                  showIcon: true,
                  style: {
                    base: {
                      color: '#32325d',
                      fontSize: '16px',
                      '::placeholder': { color: '#aab7c4' },
                    },
                  },
                }}
                className='w-full focus:outline-none'
              />
            </div>
          </div>

          {/* Expiration Date and CVC */}
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='card-expiry'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Expiration date
              </label>
              <div className='p-3 border border-gray-300 rounded-md'>
                <CardExpiryElement
                  id='card-expiry'
                  options={{
                    style: {
                      base: {
                        color: '#32325d',
                        fontSize: '16px',
                        '::placeholder': { color: '#aab7c4' },
                      },
                    },
                  }}
                  className='w-full focus:outline-none'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='card-cvc'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Security code
              </label>
              <div className='p-3 border border-gray-300 rounded-md'>
                <CardCvcElement
                  id='card-cvc'
                  options={{
                    style: {
                      base: {
                        color: '#32325d',
                        fontSize: '16px',
                        '::placeholder': { color: '#aab7c4' },
                      },
                    },
                  }}
                  className='w-full focus:outline-none'
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full py-3 bg-gray-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:ring focus:ring-blue-300'
          >
            Pay $10.00
          </button>

          {paymentSuccess && (
            <div className='mt-4 text-green-600 text-center'>
              Payment Successful! Redirecting...
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default PaymentForm;
