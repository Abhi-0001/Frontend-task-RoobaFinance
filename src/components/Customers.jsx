import Carousel from "./Carousel";

const carouselData2 = [
  "/pablo-image.jpg",
  "/pablo-image.jpg",
  "/pablo-image.jpg",
  "/pablo-image.jpg",
  "/pablo-image.jpg",
];

function Customers({ isEvent }) {
  return (
    <>
      {isEvent ? (
        <div className="my-2">
          <h3 className="text-sm">Artist Line Up</h3>
          <div className="mt-4 flex items-center">
            <img
              src="/customers/customer-1.jpg"
              alt="Artist 1"
              className="z-0  mr-[-4px] w-[4rem] rounded-lg transition-all hover:scale-[1.05]"
            />
            <img
              src="/customers/customer-2.jpg"
              alt="Artist 2"
              className="z-10  mr-[-4px] h-[7rem] w-[7rem] rounded-lg transition-all hover:scale-[1.05]"
            />
            <img
              src="/customers/customer-3.jpg"
              alt="Artist 3"
              className=" z-0 w-[4rem] rounded-lg transition-all hover:scale-[1.05]"
            />
          </div>
        </div>
      ) : (
        <>
          <div className="my-4 flex w-full items-center justify-between  ">
            <div className="flex items-center justify-normal ">
              <div className=" ml-[-4px] flex w-6 items-center justify-center rounded-full bg-white p-[0.5px]">
                <img
                  src="/customers/customer-1.jpg"
                  alt="user-image"
                  className="rounded-full"
                />
              </div>
              <div className=" ml-[-4px] flex w-6 items-center justify-center rounded-full bg-white p-[0.5px]">
                <img
                  src="/customers/customer-2.jpg"
                  alt="user-image"
                  className="rounded-full"
                />
              </div>
              <div className=" ml-[-4px] flex w-6 items-center justify-center rounded-full bg-white p-[0.5px]">
                <img
                  src="/customers/customer-3.jpg"
                  alt="user-image"
                  className="rounded-full"
                />
              </div>
              <div className=" ml-[-4px] flex w-6 items-center justify-center rounded-full bg-white p-[0.5px]">
                <img
                  src="/customers/customer-3.jpg"
                  alt="user-image"
                  className="rounded-full"
                />
              </div>
              <div className=" ml-[-4px] flex w-6 items-center justify-center rounded-full bg-white p-[0.5px]">
                <img
                  src="/customers/customer-3.jpg"
                  alt="user-image"
                  className="rounded-full"
                />
              </div>
            </div>
            <p className="text-xs font-semibold ">22k people intrested</p>
          </div>

          <p className="mb-2 text-xs font-semibold text-white md:mb-4">
            Collectible
          </p>
          <Carousel data={carouselData2} />
        </>
      )}
    </>
  );
}

export default Customers;
