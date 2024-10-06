import ColOne from "./components/col-1";
import ColTwo from "./components/col-2";
import ColThree from "./components/col-3";

export function App() {
  return (
    //global container
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      {/*inner container */}
      <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6          md:flex-row md:my-0">
        {/*columns */}
        <ColOne />
        <ColTwo />
        <ColThree />
      </div>
    </div>
  );
}
