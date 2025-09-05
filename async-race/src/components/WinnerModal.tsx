import React from "react";
import "../index.css";

interface WinCar {
  id: number;
  name?: string;
  velocity: string | number;
  distance: string | number;
}

interface WinnerModalProps {
  winnerName: WinCar | null;
  cars: WinCar[]; // or Car[] if you actually need full cars
  onClose: () => void;
}

const WinnerModal: React.FC<WinnerModalProps> = ({ winnerName, onClose }) => {
  if (!winnerName) return null;

  return (
    <div className="modal">
      <div className="modal-content text-black text-center">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Winner: {winnerName.name}</h2>
        <h2>
          Time: {((Number(winnerName.velocity) / Number(winnerName.distance)) * 1000).toFixed(2)} s
        </h2>
      </div>
    </div>
  );
};

export default WinnerModal;
