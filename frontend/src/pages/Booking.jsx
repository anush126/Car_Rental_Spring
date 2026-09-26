import { useState } from "react";
import { useParams } from "react-router-dom";
import { createBooking } from "../services/bookingService";
import { useNavigate } from "react-router-dom";

function Booking() {

    const { carId } = useParams();
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleBooking = async () => {

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("Please login first!");
            return;
        }
        if (!startDate || !endDate) {
            alert("Please select both dates!");
            return;
        }

        if (endDate <= startDate) {
            alert("End date must be after start date!");
            return;
        }

        const booking = {
            userId: user.id,
            carId: Number(carId),
            startDate: startDate,
            endDate: endDate
        };

        try {

            const data = await createBooking(booking);

            console.log("Booking successful:", data);
            alert("Booking successful!");
            navigate("/my-bookings");

        } catch (error) {

            console.error(error);
            alert("Booking failed!");

        }
    };

    return (
        <div>
            <h1>Book Car</h1>

            <p>Selected Car ID: {carId}</p>

            <label>Start Date</label>
            <br />

            <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />

            <br />
            <br />

            <label>End Date</label>
            <br />

            <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />

            <br />
            <br />

            <button onClick={handleBooking}>
                Confirm Booking
            </button>
        </div>
    );
}

export default Booking;