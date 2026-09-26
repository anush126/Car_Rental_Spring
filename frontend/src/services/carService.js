const API_URL = "http://localhost:8080/api/cars";

export async function getAllCars() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch cars");
    }

    return response.json();
}