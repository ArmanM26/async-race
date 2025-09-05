import React, { useState } from "react";
import Garage from "./pages/Garage";
import Winners from "./pages/Winners";

// Define a string union type for pages
type Page = "garage" | "winners";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>("garage");

  // Render the correct page based on currentPage
  const renderPage = () => {
    if (currentPage === "garage") return <Garage />;
    if (currentPage === "winners") return <Winners />;
    return null;
  };

  return (
    <div className="App pt-20 bg-gray-900 h-full">
      <header className="App-header container mx-auto px-6">
        <div className="mb-4">
          <button
            onClick={() => setCurrentPage("garage")}
            className={`mr-2 ${
              currentPage === "garage"
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400"
            } text-white py-2 px-4 rounded`}
          >
            Garage
          </button>
          <button
            onClick={() => setCurrentPage("winners")}
            className={`mr-2 ${
              currentPage === "winners"
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400"
            } text-white py-2 px-4 rounded`}
          >
            Winners
          </button>
        </div>
        {renderPage()}
      </header>
    </div>
  );
};

export default App;
