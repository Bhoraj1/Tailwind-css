export default function ColThree() {
  return (
      <div className="bg-slate-700 rounded-xl text-white">
        {/*upper container */}
        <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
          <div className="text-center uppercase">premium</div>
          <h2 className="text-center mt-10 font-serif text-5xl">2 TB</h2>
          <h3 className="mt-2 text-center">$8.99/Month</h3>
          <div className="flex justify-center">
            <a
              href=""
              className="text-center px-10 py-3 my-6 border border-voilet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-200"
            >
              Purchase
            </a>
          </div>
        </div>
        {/*border */}
        <div className="border-t border-slate-700"> </div>
        {/*lower container */}
        <div className="p-8 mb-3 mx-3 rounded-b-xl bg-slate-800">
          {/* list itesm */}
          <div className="flex flex-col space-y-3 ">
            <span className="text-sm">&#10003; 2TB of free space</span>
            <span className="text-sm">&#10003; Options to add numbers</span>
            <span className="text-sm">&#10003; Extra number benefits</span>
          </div>
        </div>
      </div>
  );
}
