import image from "./assets/images/image.jpg";
export function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-700">
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
        <div className="flex flex-col md:flex-row rounded-l-xl">
          <img
            src={image}
            alt=""
            className="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl transform md:rounded-r-none hover:scale-105 hover:rounded-xl duration-200"
          />
          <div className="p-2 md:p-12">
            <h2 className="font-serif text-xl font-medium text-white text-center md:text-left">
              Get diet and fitness in you inbox
            </h2>
            <div className="text-w-xs my-4 text-white leading-5 tracking-wide text-center md:text-left">
              <p>
                Eat better and exercise better. signup for the Diet fitness
                newsletter
              </p>
              <div className="flex flex-col mt-7 space-y-4 md:flex-row space-x-4 md:space-y-0">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="p-2 ml-4 bg-zinc-800 text-center border border-gray-500 placeholder:text-xs md:text-left md:placeholder:text-left focus:outline-none"
                />
                <button className=" px-5 py-3 bg-lime-500 hover:bg-lime-700 text-xs rounded-md hover:text-white duration-500">
                  Subscriber
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
