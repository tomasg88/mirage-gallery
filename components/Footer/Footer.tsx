import Link from "next/link";
import Logo from "../Logo";
import { ROUTES } from "@/utils/routes";
export default function Footer() {
  return (
    <div className="w-full px-2 pb-24 mx-auto text-center max-w-screen-2xl">
      <div className="flex justify-start gap-6">
        <Logo />
        <nav className="items-center justify-start hidden pl-6 space-x-6 border-l border-gray-200 lg:flex">
          {ROUTES.map((route) => {
            return (
              <Link
                href={route.path}
                key={route.path}
                title={route.ariaLabel}
                className="text-xs font-normal text-gray-400 hover:text-[#920d3d] uppercase duration-100 cursor-pointer underline-offset-2 hover:underline"
                aria-label={route.ariaLabel}
              >
                {route.title}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center justify-between pt-24">
        <p className="text-xs">© 2022 by Mirage Gallery LLC</p>
        <div style={{ flex: "1" }} />
        <div className="flex items-center justify-end space-x-6">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="24"
              fill="none"
            >
              <path
                fill="#000"
                d="M26.824 2.01A26.19 26.19 0 0 0 20.291 0c-.308.552-.588 1.12-.837 1.701a24.328 24.328 0 0 0-7.25 0A17.996 17.996 0 0 0 11.367 0 26.374 26.374 0 0 0 4.83 2.015C.695 8.132-.426 14.097.134 19.978A26.335 26.335 0 0 0 8.147 24a19.353 19.353 0 0 0 1.716-2.767 17.041 17.041 0 0 1-2.702-1.29c.226-.165.448-.334.662-.498a18.823 18.823 0 0 0 16.02 0c.217.176.438.346.663.498-.863.51-1.77.942-2.708 1.292A19.183 19.183 0 0 0 23.514 24a26.214 26.214 0 0 0 8.018-4.02c.657-6.82-1.124-12.73-4.708-17.97ZM10.573 16.361c-1.562 0-2.852-1.417-2.852-3.16 0-1.744 1.245-3.174 2.847-3.174 1.601 0 2.882 1.43 2.854 3.174-.027 1.743-1.258 3.16-2.85 3.16Zm10.52 0c-1.564 0-2.849-1.417-2.849-3.16 0-1.744 1.245-3.174 2.85-3.174 1.603 0 2.874 1.43 2.846 3.174-.027 1.743-1.255 3.16-2.847 3.16Z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="24"
              fill="none"
            >
              <path
                fill="#000"
                d="M27.059 6.1c.018.257.018.515.018.776 0 7.935-6.041 17.086-17.087 17.086v-.005a17 17 0 0 1-9.205-2.692 12.058 12.058 0 0 0 8.887-2.489 6.013 6.013 0 0 1-5.61-4.17c.9.174 1.828.138 2.712-.103a6.006 6.006 0 0 1-4.817-5.886V8.54c.834.465 1.769.723 2.725.752a6.013 6.013 0 0 1-1.859-8.018A17.044 17.044 0 0 0 15.2 7.548 6.012 6.012 0 0 1 25.434 2.07 12.05 12.05 0 0 0 29.246.612a6.028 6.028 0 0 1-2.64 3.32c1.19-.14 2.353-.458 3.448-.945A12.199 12.199 0 0 1 27.06 6.1Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
