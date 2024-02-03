// Import necessary libraries
import React from 'react';
import { FaYoutube,FaTwitter,FaFacebook } from 'react-icons/fa';


// Define your Footer component
const Footer = () => {
  return (
    <footer className="px-3 mt-[72px] bg-bg-footer bg-gray-200">
      <div className="w-full max-w-[1425px] mx-auto">
        {/* Follow us section */}
        <div className="flex items-center gap-8 py-8">
          <span className="text-base font-medium text-text-dark">Follow us</span>
          {/* Social media icons */}
          <ul className="flex items-center gap-8 text-[20px]">
            <li>
              <a href="https://www.youtube.com/" className="text-text-default hover:text-text-dark">
                <FaYoutube/>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/" className="text-text-default hover:text-text-dark">
                <FaTwitter/>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" className="text-text-default hover:text-text-dark">
                <FaFacebook/>
              </a>
            </li>
          </ul>
        </div>

        {/* Internal Links and Enterprise sections */}
        <div className="flex flex-wrap items-start gap-2 py-10 border-t gap-y-8 border-t-clr-border">
          {/* Internal Links Section */}
          <div className="basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]">
            {/* Internal Links title */}
            <h3 className="pb-6 text-base font-semibold text-text-dark">Internal Links</h3>
            {/* Internal Links list */}
            <ul className="flex flex-col">
              {/* Map over your internal links and create list items */}
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Documentaries</a>
              </li>
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Themes</a>
              </li>
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Chrome Casts</a>
              </li>
              {/* Add more internal links as needed */}
            </ul>
          </div>
          <div className="basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]">
            {/* Internal Links title */}
            <h3 className="pb-6 text-base font-semibold text-text-dark">Enterprise</h3>
            {/* Internal Links list */}
            <ul className="flex flex-col">
              {/* Map over your internal links and create list items */}
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Download Chrome Browser</a>
              </li>
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Chrome Browser For Enterprise</a>
              </li>
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Chrome Browser Devices</a>
              </li>
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Chrome OS</a>
              </li>
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Google Cloud</a>
              </li>
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Google Wordkspace</a>
              </li>
              {/* Add more internal links as needed */}
            </ul>
          </div>
          <div className="basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]">
            {/* Internal Links title */}
            <h3 className="pb-6 text-base font-semibold text-text-dark">Internal Links</h3>
            {/* Internal Links list */}
            <ul className="flex flex-col">
              {/* Map over your internal links and create list items */}
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Documentaries</a>
              </li>
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Themes</a>
              </li>
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Chrome Casts</a>
              </li>
              {/* Add more internal links as needed */}
            </ul>
          </div>
          <div className="basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]">
            {/* Internal Links title */}
            <h3 className="pb-6 text-base font-semibold text-text-dark">Enterprise</h3>
            {/* Internal Links list */}
            <ul className="flex flex-col">
              {/* Map over your internal links and create list items */}
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Download Chrome Browser</a>
              </li>
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Chrome Browser For Enterprise</a>
              </li>
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Chrome Browser Devices</a>
              </li>
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Chrome OS</a>
              </li>
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Google Cloud</a>
              </li>
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Google Wordkspace</a>
              </li>
              {/* Add more internal links as needed */}
            </ul>
          </div>
          <div className="basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]">
            {/* Internal Links title */}
            <h3 className="pb-6 text-base font-semibold text-text-dark">Internal Links</h3>
            {/* Internal Links list */}
            <ul className="flex flex-col">
              {/* Map over your internal links and create list items */}
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Documentaries</a>
              </li>
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Themes</a>
              </li>
              <li>
                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Chrome Casts</a>
              </li>
              {/* Add more internal links as needed */}
            </ul>
          </div>

          {/* Repeat the same structure for Enterprise Section and other sections as needed */}
        </div>

        {/* Bottom section with logo and additional links */}
        <div className="flex flex-wrap items-center gap-6 pt-6 pb-10 border-t md:pb-12 md:pt-8 md:gap-8 border-t-clr-border">
          <div className="flex items-center justify-between grow">
            {/* Your logo section */}
            <a className="logo_wrap__Uh7uD" title="Go to home page" href="/">
            <h3 className='text-2xl font-extrabold'>Zin Tools</h3>
            </a>
            {/* Change Theme button */}
            <div className="md:hidden">
              {/* Include your Change Theme button here */}
            </div>
          </div>
          {/* Additional links section */}
          <ul className="flex flex-wrap items-center gap-8 gap-y-2">
            {/* Map over your additional links and create list items */}
            <li>
              <a className="text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline" href="/privacy/">Privacy Policy</a>
            </li>
            <li>
              <a className="text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline" href="/privacy/">Terms and conditions
</a>
            </li>
            <li>
              <a className="text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline" href="/privacy/">Cookies Policy</a>
            </li>
            <li>
              <a className="text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline" href="/privacy/">About us</a>
            </li>
            <li>
              <a className="text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline" href="/privacy/">EULA</a>
            </li>
            <li>
              <a className="text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline" href="/privacy/">Contact</a>
            </li>
            {/* Add more additional links as needed */}
          </ul>
          {/* Theme button for larger screens */}
          <div className="hidden ml-auto md:block">
          <button
      data-tooltip-id="ts-tooltip"
      data-tooltip-content="Change Theme"
      className="flex items-center justify-center w-12 rounded-full aspect-square text-text-dark bg-bg-controls-hover dark:bg-bg-controls"
    >
      {/* Icon and SVG for the light theme */}
      <i className="icon theme-light">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960">
          <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"></path>
        </svg>
      </i>
    </button>
            {/* Include your Change Theme button here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
