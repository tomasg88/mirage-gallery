
export default function Footer() {
  return (
    <button className="relative flex items-center justify-center px-6 py-3 text-sm font-normal text-white bg-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
        className="mr-2"
      >
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1.532 5.596h13.301c.921 0 1.667.746 1.667 1.667v7.57c0 .917-.75 1.667-1.667 1.667H3.167c-.921 0-1.667-.746-1.667-1.667V5.91c0-.693.43-1.314 1.078-1.559l8.628-3.257a.833.833 0 0 1 1.127.779v3.723"
        />
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12.333 10.77a.313.313 0 1 0 .002.627.313.313 0 0 0-.002-.626"
        />
      </svg>
      Connect Wallet
    </button>
  );
}
