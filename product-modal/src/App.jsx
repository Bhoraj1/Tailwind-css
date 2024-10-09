import headPhones from "./assets/images/headphone.png";
export function App() {
  return (
    //global container
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      {/*Card Container */}
      <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
        {/*Image */}
        <div>
          <img
            src={headPhones}
            alt=""
            className="w-60 mx-auto duration-200 hover:scale-105"
          />
        </div>
        {/*Content */}
        <div className="flex flex-col space-y-6">
          {/*label and title container */}
          <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
            <div>
              <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                Free Shipping
              </div>
            </div>
            {/* title*/}
            <div className="max-w-sm text-2xl font-medium">
              Best Gaming Headphones specially for ladies
            </div>
            {/* Price Container*/}
            <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
              <p className="line-through">$799</p>
              <p className="text-5xl font-bold">$599</p>
              <p className="text-sm font-white text-gray-400">
                Valid until April 3rd or as long as to stock
              </p>
            </div>
            {/* button group*/}
            <div className="group">
              <div></div>
              <button className="w-full transaction-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg">
                <div className=" duration-150 px-8 py-4 bg-blue-500 rounded-lg group-hover:bg-blue-700 ">
                  Add to card
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
