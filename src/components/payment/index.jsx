import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm.jsx';
const stripePromise = loadStripe('pk_test_v6FgjzIxg2grmoIWKoOWCiAv'); // Replace with your actual Stripe public key

const index = () => {
  return (
    <div>
      <div className='border rounded-lg p-6'>
        <div className='border rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4'>Payment</h2>
          {/* Wrap your payment form with Elements provider */}
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default index;
