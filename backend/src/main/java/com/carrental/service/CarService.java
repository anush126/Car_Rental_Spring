package com.carrental.service;


import com.carrental.model.Car;
import com.carrental.repository.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CarService {

    private final CarRepository carRepository;

    // Add a new car
    public Car addCar(Car car) {
        return carRepository.save(car);
    }

    // Get all cars
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    // Get car by ID
    public Optional<Car> getCarById(Long id) {
        return carRepository.findById(id);
    }

    // Update an existing car
    public Car updateCar(Long id, Car car) {

        Car existingCar = carRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Car not found"));

        existingCar.setBrand(car.getBrand());
        existingCar.setModel(car.getModel());
        existingCar.setCarNumber(car.getCarNumber());
        existingCar.setType(car.getType());
        existingCar.setPricePerDay(car.getPricePerDay());
        existingCar.setAvailable(car.isAvailable());

        return carRepository.save(existingCar);
    }

    // Delete a car
    public void deleteCar(Long id) {
        carRepository.deleteById(id);
    }
}