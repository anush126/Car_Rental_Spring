import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCars } from "../services/carService";

function Cars() {
    const navigate = useNavigate();

    const [cars, setCars] = useState([]);

    useEffect(() => {
        loadCars();
    }, []);

    const loadCars = async () => {
        try {
            const data = await getAllCars();
            setCars(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Available Cars</h1>

            {cars.map((car) => (
                <div key={car.id}>

                    <h2>{car.brand} {car.model}</h2>

                    <p>Car Number: {car.carNumber}</p>
                    <p>Type: {car.type}</p>
                    <p>Price per day: ₹{car.pricePerDay}</p>

                    <p>
                        Status: {car.available ? "Available" : "Not Available"}
                    </p>

                    {car.available && (
                        <button onClick={() => navigate(`/booking/${car.id}`)}>
                            Book
                        </button>
                    )}

                    <hr />

                </div>
            ))}
        </div>
    );
}

export default Cars;