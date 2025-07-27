

import Barchart from "./Components/Barchart";
import Header from "./Components/Header";
import Recentorder from "./Components/Recentorder";
import Topcard from "./Components/Topcard";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Topcard />

      <div className="grid p-4 md:grid-cols-3 grid-cols-1 gap-4">
        <Barchart />
        <Recentorder />
      </div>
    </div>
  );
}
