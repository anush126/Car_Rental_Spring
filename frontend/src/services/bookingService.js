const API_URL = "http://localhost:8080/api/bookings";

export async function createBooking(booking) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(booking)
    });

    if (!response.ok) {
        throw new Error("Booking failed");
    }

    return response.json();
}

export async function getBookingsByUserId(userId) {
    const response = await fetch(`${API_URL}/user/${userId}`);

    if (!response.ok) {
        throw new Error("Failed to fetch bookings");
    }

    return response.json();
}