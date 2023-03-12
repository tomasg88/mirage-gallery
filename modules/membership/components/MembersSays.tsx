import Image from 'next/image';

export const MembersSays = () => {
  return (
    <>
      <div className="py-20 ">
        <h3 className="text-2xl">What our members say</h3>
        <div className="grid gap-12 mt-6 md:grid-cols-2">
          <div className="p-6 border border-gray-300">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className="flex mt-6">
              <Image
                alt="avatar"
                className="w-12 h-12 rounded-full"
                height={50}
                src="/assets/1.jpg"
                width={50}
              />
              <div className="flex flex-col ml-6">
                <a className="font-medium">@jessbar</a>
                <span className="text-gray-600">Intelligent member</span>
              </div>
            </div>
          </div>
          <div className="p-6 border border-gray-300">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className="flex mt-6">
              <Image
                alt="avatar"
                className="w-12 h-12 rounded-full"
                height={50}
                src="/assets/9.jpg"
                width={50}
              />
              <div className="flex flex-col ml-6">
                <a className="font-medium">@catlover</a>
                <span className="text-gray-600">Sentient member</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
