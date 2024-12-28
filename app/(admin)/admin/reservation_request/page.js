import ReservationInfo from "@/components/admin/ReservationInfo";

const ReservationRequestPage = () => {
  const reservations = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      date: "2024-06-25",
      time: "18:30",
      guests: 4,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      date: "2024-06-26",
      time: "19:00",
      guests: 2,
    },
    {
      id: 3,
      name: "Jane Smith",
      email: "jane@example.com",
      date: "2024-06-26",
      time: "19:00",
      guests: 2,
    },
    {
      id: 4,
      name: "Jane Smith",
      email: "jane@example.com",
      date: "2024-06-26",
      time: "19:00",
      guests: 2,
    },
    {
      id: 5,
      name: "Jane Smith",
      email: "jane@example.com",
      date: "2024-06-26",
      time: "19:00",
      guests: 2,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen font-lato">
      <h1 className="text-2xl font-bold mb-4">New Reservation Requests</h1>

      <ReservationInfo reservations={reservations} />

      <h1 className="text-2xl font-bold mb-4">Accepted Reservation Requests</h1>
      <ReservationInfo reservations={reservations} isAccepted={true} />
    </div>
  );
};

export default ReservationRequestPage;
