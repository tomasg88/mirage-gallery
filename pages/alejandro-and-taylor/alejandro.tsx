import AlejandroHero from 'modules/alejandro-and-taylor/components/AlejandroHero';
import Image from 'next/image';
import Link from 'next/link';

export default function AlejandroPage() {
  return (
    <div className="w-full pb-24">
      <AlejandroHero />
      <div className="my-20 border-b border-gray-300">
        <div className="flex items-center justify-start gap-12 px-2 py-3 mx-auto max-w-screen-2xl">
          <Link className="text-[#074f65]" href="">
            Collection 3
          </Link>
          <Link className="text-[#808080]" href="">
            Collection 2
          </Link>
          <Link className="text-[#808080]" href="">
            Collection 1
          </Link>
        </div>
      </div>
      <div className="px-2 mx-auto max-w-screen-2xl">
        <div className="grid w-full mx-auto my-3 md:grid-cols-2 max-w-screen-2xl">
          <h2 className="text-2xl text-left">Collection 3</h2>
          <div className="flex items-center justify-end ">
            <button className="btn" type="button">
              <div>
                <svg
                  className="w-4 mr-2 fill-current"
                  fill="none"
                  height="20"
                  viewBox="0 0 22 20"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12.7833V13.9444C22 14.0111 21.9597 14.0704 21.901 14.0963C21.5417 14.2519 20.3115 14.8222 19.8 15.5407C18.4947 17.3759 17.4973 20 15.268 20H5.96748C2.67117 20 0 17.2926 0 13.9519V13.8444C0 13.7555 0.0714963 13.6833 0.159488 13.6833H5.34416C5.44682 13.6833 5.52201 13.7796 5.51285 13.8815C5.47617 14.2222 5.5385 14.5704 5.69799 14.887C6.00598 15.5185 6.64402 15.913 7.33332 15.913H9.9V13.8889H7.36267C7.23248 13.8889 7.15551 13.737 7.23066 13.6296C7.25818 13.587 7.28934 13.5426 7.32234 13.4926C7.56248 13.1482 7.90533 12.613 8.24631 12.0037C8.47916 11.5926 8.70467 11.1537 8.88617 10.713C8.92285 10.6333 8.95215 10.5519 8.9815 10.4722C9.03099 10.3315 9.08234 10.2 9.11898 10.0685C9.15566 9.95742 9.185 9.84074 9.21435 9.73147C9.30051 9.35741 9.33715 8.96111 9.33715 8.54999C9.33715 8.38889 9.32982 8.22038 9.31515 8.05924C9.30785 7.88332 9.28584 7.7074 9.26383 7.53148C9.24916 7.37591 9.22168 7.22222 9.19234 7.06112C9.15566 6.82592 9.10434 6.59261 9.04566 6.35741L9.02551 6.26853C8.9815 6.10743 8.94482 5.9537 8.89351 5.7926C8.74865 5.28703 8.58183 4.79444 8.40584 4.33333C8.34168 4.15 8.26832 3.97408 8.195 3.79817C8.08682 3.53333 7.97682 3.2926 7.87598 3.06481C7.82467 2.96111 7.78066 2.86666 7.73668 2.77037C7.68715 2.6611 7.63584 2.55187 7.58449 2.44813C7.54785 2.3685 7.50566 2.29444 7.47631 2.22038L7.16285 1.63518C7.11883 1.55556 7.19215 1.46111 7.27832 1.48518L9.24 2.02223H9.24551C9.24916 2.02223 9.25099 2.02407 9.25285 2.02407L9.51131 2.09629L9.79551 2.17776L9.9 2.2074V1.02964C9.9 0.461107 10.351 0 10.9083 0C11.187 0 11.44 0.114796 11.6215 0.30185C11.803 0.488905 11.9167 0.744453 11.9167 1.02964V2.77778L12.1257 2.83702C12.1422 2.84259 12.1586 2.85 12.1733 2.86109C12.2247 2.89998 12.298 2.95742 12.3915 3.02776C12.4648 3.08704 12.5436 3.15926 12.639 3.23332C12.8278 3.38705 13.0533 3.5852 13.3008 3.81295C13.3668 3.87038 13.431 3.92962 13.4897 3.9889C13.8087 4.28887 14.1662 4.64075 14.5072 5.02964C14.6025 5.13887 14.696 5.24998 14.7913 5.36666C14.8867 5.48518 14.9875 5.60186 15.0755 5.71854C15.191 5.87407 15.3157 6.03517 15.4238 6.20372C15.4751 6.28335 15.5338 6.36482 15.5833 6.44444C15.7227 6.65741 15.8455 6.87779 15.9628 7.09813C16.0123 7.19999 16.0636 7.3111 16.1077 7.42037C16.2378 7.71481 16.3405 8.01482 16.4065 8.31483C16.4267 8.37964 16.4413 8.45001 16.4487 8.51298V8.52776C16.4707 8.61668 16.478 8.71113 16.4853 8.80742C16.5147 9.1148 16.5 9.42221 16.434 9.73147C16.4065 9.86297 16.3698 9.98702 16.3258 10.1185C16.2818 10.2445 16.2378 10.3759 16.181 10.5C16.071 10.7574 15.9408 11.0148 15.7868 11.2555C15.7373 11.3444 15.6786 11.4389 15.62 11.5278C15.5558 11.6222 15.4898 11.7111 15.4312 11.7982C15.3505 11.9093 15.2643 12.0259 15.1763 12.1296C15.0975 12.2389 15.0168 12.3482 14.9288 12.4444C14.806 12.5907 14.6886 12.7296 14.5658 12.863C14.4925 12.95 14.4137 13.0389 14.333 13.1185C14.2542 13.2074 14.1735 13.287 14.1001 13.3611C13.9773 13.4852 13.8747 13.5815 13.7885 13.6611L13.5868 13.8482C13.5575 13.8741 13.519 13.8889 13.4786 13.8889H11.9167V15.913H13.882C14.322 15.913 14.74 15.7555 15.0773 15.4667C15.1928 15.3648 15.697 14.9241 16.2929 14.2593C16.313 14.237 16.3386 14.2204 16.368 14.213L21.7965 12.6278C21.8973 12.5981 22 12.6759 22 12.7833Z" />
                </svg>
              </div>
              Full collection
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 gap-y-20">
          {TOKENS.map((i) => (
            <div className="" key={i.id}>
              <Image
                alt="alt"
                height={900}
                quality={100}
                src={`/assets/alejandrotaylor/${i.img}`}
                width={1200}
              />
              <h4 className="my-3 text-sm ">{i.title}</h4>
              <p className="text-xs uppercase">{i.status}</p>
            </div>
          ))}
          {TOKENS.map((i) => (
            <div className="" key={i.id}>
              <Image
                alt="alt"
                height={900}
                quality={100}
                src={`/assets/alejandrotaylor/${i.img}`}
                width={1200}
              />
              <h4 className="my-3 text-sm ">{i.title}</h4>
              <p className="text-xs uppercase">{i.status}</p>
            </div>
          ))}
          {TOKENS.map((i) => (
            <div className="" key={i.id}>
              <Image
                alt="alt"
                height={900}
                quality={100}
                src={`/assets/alejandrotaylor/${i.img}`}
                width={1200}
              />
              <h4 className="my-3 text-sm ">{i.title}</h4>
              <p className="text-xs uppercase">{i.status}</p>
            </div>
          ))}
          {TOKENS.map((i) => (
            <div className="" key={i.id}>
              <Image
                alt="alt"
                height={900}
                quality={100}
                src={`/assets/alejandrotaylor/${i.img}`}
                width={1200}
              />
              <h4 className="my-3 text-sm ">{i.title}</h4>
              <p className="text-xs uppercase">{i.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const TOKENS = [
  {
    id: 1,
    title: 'Garden Among the Trees',
    img: 'alejandro1.png',
    status: 'sold',
  },
  {
    id: 2,
    title: 'The Last Mistake of Spring​',
    img: 'alejandro2.png',
    status: 'sold',
  },
  {
    id: 3,
    title: 'Sunset at the Dunes',
    img: 'alejandro3.png',
    status: 'sold',
  },
  {
    id: 4,
    title: 'Liquid Sunset over Lonely Pond',
    img: 'alejandro4.png',
    status: 'sold',
  },
];
