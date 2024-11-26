import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function TermsAndConditions() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <>
        {/* Hamburger Icon */}
        <div className='absolute left-5 top-20'>
          <button
            // onMouseEnter={() => setIsDropdownOpen(true)}
            // onMouseLeave={() => setIsDropdownOpen(false)}
            onClick={() => setIsDropdownOpen(prev => !prev)}
            className='text-gray-800 focus:outline-none'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className='absolute top-32 left-0 w-full bg-white shadow-md rounded-lg mt-2 md:w-auto'>
            <ul className='flex flex-col'>
              <li>
                <Link
                  to='/user-profile'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  User Profile{' '}
                </Link>
              </li>
              <li>
                <Link to='/about' className='block px-4 py-2 hover:bg-gray-100'>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/privacy-policy'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  Privacy
                </Link>
              </li>{' '}
              <li>
                <Link
                  to='/terms-and-conditions'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  Terms
                </Link>
              </li>{' '}
              <li>
                <Link to='/guide' className='block px-4 py-2 hover:bg-gray-100'>
                  Guide
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to='/work' className='block px-4 py-2 hover:bg-gray-100'>
                  How it Works
                </Link>
              </li>
            </ul>
          </div>
        )}
      </>

      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold mb-6'>Terms and Conditions</h1>
        <p className='mb-4'>Last Updated: [Insert Date]</p>

        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-3'>1. Introduction</h2>
          <p className='mb-4'>
            Welcome to [Your Website Name]. By accessing or using our website,
            you agree to comply with and be bound by these Terms and Conditions.
            If you do not agree with these terms, you must not use our website.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-3'>
            2. Use of Our Services
          </h2>
          <p className='mb-4'>
            You agree to use our services for lawful purposes only. You must not
            use our website in any way that violates any applicable local,
            national, or international law.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-3'>
            3. Intellectual Property Rights
          </h2>
          <p className='mb-4'>
            All content on this website, including text, graphics, logos,
            images, and software, is the property of [Your Website Name] or its
            content suppliers and is protected by copyright and intellectual
            property laws.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-3'>4. User Accounts</h2>
          <p className='mb-4'>
            If you create an account on our website, you are responsible for
            maintaining the confidentiality of your account and password and for
            restricting access to your computer. You agree to accept
            responsibility for all activities that occur under your account.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-3'>5. Termination</h2>
          <p className='mb-4'>
            We reserve the right to terminate or suspend your access to our
            services without notice if you violate these Terms and Conditions or
            engage in any fraudulent or illegal activity.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-3'>
            6. Disclaimer of Warranties
          </h2>
          <p className='mb-4'>
            Our website is provided on an "as-is" basis. We make no warranties
            or representations about the accuracy, reliability, or availability
            of our services. Your use of our website is at your own risk.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-3'>
            7. Limitation of Liability
          </h2>
          <p className='mb-4'>
            In no event shall [Your Website Name] be liable for any indirect,
            incidental, special, consequential, or punitive damages, including
            loss of profits, data, use, goodwill, or other intangible losses,
            resulting from your use of our services.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-3'>
            8. Changes to These Terms
          </h2>
          <p className='mb-4'>
            We may update our Terms and Conditions from time to time. Any
            changes will be posted on this page with an updated effective date.
            Your continued use of our services after any changes constitutes
            acceptance of the new Terms and Conditions.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-3'>9. Governing Law</h2>
          <p className='mb-4'>
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of [Your State/Country], without regard to
            its conflict of law principles.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-3'>10. Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at:
          </p>
          <ul className='list-disc pl-5 mb-4'>
            <li>Email: support@detroitepicweekend.com</li>
            <li>Phone: [Your Phone Number]</li>
            <li>Address: [Your Business Address]</li>
          </ul>
        </section>
      </div>
    </>
  );
}
