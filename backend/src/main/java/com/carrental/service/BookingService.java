package com.carrental.service;

import com.carrental.model.Booking;
import com.carrental.model.Car;
import com.carrental.repository.BookingRepository;
import com.carrental.repository.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepository;
    private final CarRepository carRepository;

    public Booking createBooking(Booking booking) {

        Car car = carRepository.findById(booking.getCarId())
                .orElseThrow(() -> new RuntimeException("Car not found"));

        boolean alreadyBooked =
                bookingRepository.existsByCarIdAndStartDateLessThanEqualAndEndDateGreaterThanEqual(
                        booking.getCarId(),
                        booking.getEndDate(),
                        booking.getStartDate()
                );

        if (alreadyBooked) {
            throw new RuntimeException("Car is already booked for these dates");
        }

        long days = ChronoUnit.DAYS.between(
                booking.getStartDate(),
                booking.getEndDate()
        );

        double pricePerDay = car.getPricePerDay();

        booking.setTotalPrice(days * pricePerDay);
        booking.setStatus("CONFIRMED");

        return bookingRepository.save(booking);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public List<Booking> getBookingsByUserId(Long userId) {
        return bookingRepository.findByUserId(userId);
    }
}