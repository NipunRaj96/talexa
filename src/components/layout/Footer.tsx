
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-7xl px-4 pb-2 pt-12">
      <div className="flex flex-wrap justify-between items-start">
        <div className="mb-8 md:mb-0">
          <div className="text-xl font-medium tracking-wider mb-1">
            TALEXA
          </div>
          <div className="text-sm text-gray-600">
            Because CGPA Isn't Everything.
          </div>
        </div>
        
        <div className="flex gap-6">
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 11.25H10.5C11.3284 11.25 12 10.5784 12 9.75C12 8.92157 11.3284 8.25 10.5 8.25H7.5V11.25Z" fill="currentColor"/>
              <path d="M7.5 15.75H10.875C11.7034 15.75 12.375 15.0784 12.375 14.25C12.375 13.4216 11.7034 12.75 10.875 12.75H7.5V15.75Z" fill="currentColor"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M5.4 2.16C3.75 2.16 2.4 3.512 2.4 5.16V18.84C2.4 20.488 3.75 21.84 5.4 21.84H18.6C20.25 21.84 21.6 20.488 21.6 18.84V5.16C21.6 3.512 20.25 2.16 18.6 2.16H5.4ZM14.4 7.68C14.4 7.04 14.92 6.52 15.56 6.52H18.44C19.08 6.52 19.6 7.04 19.6 7.68C19.6 8.32 19.08 8.84 18.44 8.84H15.56C14.92 8.84 14.4 8.32 14.4 7.68ZM6 7.4V17.4H11.7C13.7 17.4 15.3 15.8 15.3 13.8C15.3 12.5 14.6 11.3 13.5 10.7C14.2 10 14.7 9 14.7 8C14.7 6 13.1 4.4 11.1 4.4H6V7.4ZM15.6 14.7H19.6V10.7H15.6V14.7Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="currentColor"/>
              <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="currentColor"/>
              <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="currentColor"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M2 4.5C2 3.11929 3.11929 2 4.5 2H19.5C20.8807 2 22 3.11929 22 4.5V19.5C22 20.8807 20.8807 22 19.5 22H4.5C3.11929 22 2 20.8807 2 19.5V4.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5V19.5C4 19.7761 4.22386 20 4.5 20H19.5C19.7761 20 20 19.7761 20 19.5V4.5C20 4.22386 19.7761 4 19.5 4H4.5Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM9 11.5C9 10.1193 10.1193 9 11.5 9H14.5C15.8807 9 17 10.1193 17 11.5V14.5C17 15.8807 15.8807 17 14.5 17H11.5C10.1193 17 9 15.8807 9 14.5V11.5ZM11.5 11C11.2239 11 11 11.2239 11 11.5V14.5C11 14.7761 11.2239 15 11.5 15H14.5C14.7761 15 15 14.7761 15 14.5V11.5C15 11.2239 14.7761 11 14.5 11H11.5Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM7 7H10V17H7V7ZM13 7H17V17H13V7Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
      
      <div className="mt-6 text-sm text-center text-gray-500">
        © 2025 Talexa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
