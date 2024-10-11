import Logo from './icons/Logo';
import MobileMenu from './icons/MobileMenu';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className={'text-lightGray pt-[2.5rem] text-[0.938rem] font-bold leading-[1.375rem] lg:pt-[3rem]'}>
      <nav className={'flex items-center'}>
        <a href="#">
          <Logo />
        </a>
        <button className={'ml-auto lg:hidden'} onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}>
          <span className={'sr-only'}>Toggle mobile menu</span>
          <MobileMenu />
        </button>
        <nav
          className={`bg-darkPurple absolute left-0 right-0 top-[5.938rem] ml-6 w-[calc(100vw-3rem)] rounded-xl px-6 py-10 text-center text-[1.125rem] font-bold leading-[1.688rem] text-white lg:hidden ${mobileMenuIsOpen ? 'block' : 'hidden'}`}
        >
          <ul className={`space-y-[1.875rem]`}>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
          <div className={'mt-[1.875rem] h-[1px] w-full bg-[#979797]'}></div>
          <ul className={'space-y-6 pt-[1.875rem]'}>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a className={'bg-aqua flex h-12 w-full items-center justify-center rounded-full'} href="#">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>

        <ul className={'hidden lg:flex lg:gap-x-8 lg:pl-[2.839rem]'}>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
        <ul className={'hidden lg:ml-auto lg:flex lg:gap-x-[2.313rem]'}>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
