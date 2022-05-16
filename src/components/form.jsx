import { Fragment, useState, createRef } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import ReCAPTCHA from 'react-google-recaptcha';

function Home() {
  const recaptchaRef = createRef();
  const [emailError, setEmailError] = useState('');
  const [email, setEmail] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
  const [successStatus, setSuccessStatus] = useState(false);

  const validateEmail = (data) => {
    return String(data)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const submitData = (value) => {
    fetch(
      'https://eoql7b7hs2.execute-api.us-east-2.amazonaws.com/dev/v1/early-access',
      {
        method: 'POST',
        body: JSON.stringify({
          email: value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data?.message) {
          setSuccessStatus(data?.message);
        } else {
          setSuccessStatus(
            'Thank you for registration. We will notify you as soon as the app is available.'
          );
        }
      })
      .catch(() => setSuccessStatus('Something Went Wrong'));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!validateEmail(email)) {
      setEmailError('Enter valid Email!');
    } else if (!recaptchaValue) {
      setCaptchaError(true);
    } else {
      setCaptchaError(false);
      setEmailError(null);
      submitData(email);
    }
  };

  const secretKey = '6LctN-cfAAAAABG5jg9iToRqj-IojqOhY5hBltWS';

  return (
    <form onSubmit={onSubmit}>
      <div className="my-3">
        <input
          type="text"
          className="p-2 border-4 border-[#29564B] outline-none text-lg w-full"
          onChange={onChangeEmail}
          value={email}
          placeholder="Enter Your Email"
        />
        <div className="text-red-500">{emailError}</div>
      </div>
      <div className="my-3">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LctN-cfAAAAAPoMPQhN4xmcxvQ9GmO2gEKzPJqQ"
          onChange={() => captchaError(false)}
        />
      </div>
      <button
        className="p-3 text-lg flex-shrink-0 text-white bg-[#29564B]"
        type="submit"
      >
        Early Access
      </button>
      {successStatus === 'Something Went Wrong' ? (
        <div className="text-red-500">{successStatus}</div>
      ) : (
        <div className="text-blue-500">{successStatus}</div>
      )}
    </form>
  );
}

export default function MyModal({ isOpen, closeModal }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-4xl font-medium leading-6 text-gray-900 mb-10"
                  >
                    Register
                  </Dialog.Title>
                  <div className="mt-2">
                    <Home />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
