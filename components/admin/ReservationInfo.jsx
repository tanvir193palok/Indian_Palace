"use client";
import { useState } from "react";

const ReservationInfo = ({ reservations, isAccepted }) => {
  const [showAll, setShowAll] = useState(false); // State to toggle view

  // Limit reservations to 3 if showAll is false
  const visibleReservations = showAll
    ? reservations
    : reservations.slice(0, 3);

  return (
    <div className="pb-8">
      {visibleReservations.map((reservation) => (
        <div
          key={reservation.id}
          className="bg-white p-4 rounded shadow-md border border-gray-200 mb-2 grid grid-cols-3 gap-4 items-center"
        >
          {/* Column 1: Info */}
          <div>
            <h2 className="text-lg font-semibold mb-2">{reservation.name}</h2>
            <p>
              <strong>Email:</strong> {reservation.email}
            </p>
            <p>
              <strong>Date:</strong> {reservation.date}
            </p>
            <p>
              <strong>Time:</strong> {reservation.time}
            </p>
          </div>

          {/* Column 2: Number of Guests */}
          <div className="flex justify-center">
            <p className="text-lg font-medium">Guests: {reservation.guests}</p>
          </div>

          {/* Column 3: Buttons or Accepted Status */}
          {!isAccepted ? (
            <div className="flex space-x-2 justify-center">
              <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                Accept
              </button>
              <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Reject
              </button>
            </div>
          ) : (
            <p className="text-center font-medium text-gray-600">
              Accepted Date: 21/12/2024
            </p>
          )}
        </div>
      ))}

      {/* View More Button */}
      {reservations.length > 3 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ReservationInfo;
