import React, { useState, useEffect } from "react";
import API from "../api/api";

interface Winner {
  id: number;
  name?: string;
  color?: string;
  wins: number;
  time: number;
}

const Winners: React.FC = () => {
  const [winners, setWinners] = useState<Winner[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const sortByWins = () => {
    const sorted = [...winners].sort((a, b) => b.wins - a.wins);
    setWinners(sorted);
  };

  const sortByBestTime = () => {
    const sorted = [...winners].sort((a, b) => a.time - b.time);
    setWinners(sorted);
  };

  useEffect(() => {
    const fetchWinners = async () => {
      try {
        const winnersData = await API.getWinners();
        const carsData = await API.getCars();

        const winnersWithCarDetails: Winner[] = winnersData.map((winner: any) => {
          const car = carsData.items.find((c: any) => c.id === winner.id);
          return {
            ...winner,
            name: car?.name,
            color: car?.color,
          };
        });

        setWinners(winnersWithCarDetails);
      } catch (error) {
        console.error("Error fetching winners:", error);
      }
    };

    fetchWinners();
  }, []);

  const totalPages = Math.ceil(winners.length / pageSize);
  const paginatedWinners = winners.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="p-4 text-white">
      <h2 className="text-2xl mb-4">Winners</h2>

      <div className="mb-4">
        <button
          onClick={sortByWins}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-2"
        >
          Sort by Wins
        </button>
        <button
          onClick={sortByBestTime}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Sort by Best Time
        </button>
      </div>

      <table className="w-full text-center">
        <thead>
          <tr>
            <th className="px-4 py-2">Color</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Wins</th>
            <th className="px-4 py-2">Best Time</th>
          </tr>
        </thead>
        <tbody>
          {paginatedWinners.map((winner) => (
            <tr key={winner.id}>
              <td className="px-4 py-2">
                <div className="w-8 h-8" style={{ backgroundColor: winner.color }}></div>
              </td>
              <td className="px-4 py-2">{winner.name}</td>
              <td className="px-4 py-2">{winner.wins}</td>
              <td className="px-4 py-2">{(winner.time / 100).toFixed(2)} s</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`mr-2 ${page === i + 1 ? "bg-blue-500" : "bg-gray-500"} hover:bg-blue-700 text-white py-2 px-4 rounded`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Winners;
