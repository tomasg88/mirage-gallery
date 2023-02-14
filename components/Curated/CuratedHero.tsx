export default function CuratedHero() {
  return (
    <div
      className="w-full pb-32 mb-24 bg-no-repeat "
      style={{ backgroundImage: "url('/assets/curated-back.jpg')", backgroundSize: "50vw", backgroundPosition: "top right" }}
    >
      <div className="grid w-full gap-6 px-2 mx-auto md:grid-cols-2 max-w-screen-2xl">
        <div className="grid w-full mt-16">
          <span className="text-sm uppercase text-[#920d3d]">CURATED</span>
          <h1 className="mt-6 text-3xl lg:text-7xl">
            Innovative AI artwork, <span className="text-[#920d3d]">from a variety of artists.</span>
          </h1>
          <p className="py-4">
            Mirage Gallery was founded on the premise that art can be more than
            human.
          </p>
          <div className="grid max-w-xl gap-3 sm:grid-cols-2">
            <input type="text" className="p-3 text-gray-800 bg-gray-100" placeholder="Become a curated artist"/>
            <button type="button" className="bg-[#920d3d] flex justify-center items-center text-white py-3">
              Mint
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                className="ml-2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8333 4.99992H1.16663"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.66663 9.16667L12.8333 5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.66663 0.833252L12.8333 4.99992"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
