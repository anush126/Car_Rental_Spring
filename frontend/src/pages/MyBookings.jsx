import { useEffect, useState } from "react";
import { getBookingsByUserId } from "../services/bookingService";

function MyBookings() {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        loadBookings();
    }, []);

    const loadBookings = async () => {

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("Please login first!");
            return;
        }

        try {
            const data = await getBookingsByUserId(user.id);
            setBookings(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>My Bookings</h1>

            {bookings.length === 0 ? (
                <p>No bookings found.</p>
            ) : (
                bookings.map((booking) => (
                    <div key={booking.id}>
                        <h3>Booking #{booking.id}</h3>
                        <p>Car ID: {booking.carId}</p>
                        <p>Start Date: {booking.startDate}</p>
                        <p>End Date: {booking.endDate}</p>
                        <p>Total Price: ₹{booking.totalPrice}</p>
                        <p>Status: {booking.status}</p>
                        <hr />
                    </div>
                ))
            )}
        </div>
    );
}

export default MyBookings;