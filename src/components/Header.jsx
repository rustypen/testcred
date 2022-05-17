import React, { useState } from 'react';

import Link from 'next/link';

import Form from './form';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <nav className="nav flex flex-wrap items-center justify-between p-10 py-6">
        <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
          <Link href="/">
            <a className="font-semibold text-xl tracking-tight w-60">
              <img
                src="/assets/images/Logo.png"
                alt="logo"
                className="w-full"
              />
            </a>
          </Link>
        </div>

        <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
          htmlFor="menu-btn"
        >
          <span className="navicon bg-grey-darkest flex items-center relative"></span>
        </label>

        <ul className="menu flex justify-end list-reset m-0 w-full md:w-auto items-center">
          <li className="">
            <Link href="/#about">
              <a
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker text-xl"
              >
                About
              </a>
            </Link>
          </li>

          <li className="">
            <a
              href="https://docs.credore.xyz/"
              className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker text-xl"
            >
              Docs
            </a>
          </li>
          <li className="">
            <button
              className="ml-3 p-4 py-2 text-base flex-shrink-0 text-white bg-[#29564B]"
              type="button"
              onClick={openModal}
            >
              Early Access
            </button>
          </li>
        </ul>
      </nav>
      <Form isOpen={isOpen} closeModal={closeModal} openModal={openModal} />
    </>
  );
};

export default Menu;
