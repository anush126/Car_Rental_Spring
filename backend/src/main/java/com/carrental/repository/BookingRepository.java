package com.carrental.repository;

import com.carrental.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    boolean existsByCarIdAndStartDateLessThanEqualAndEndDateGreaterThanEqual(
            Long carId,
            LocalDate endDate,
            LocalDate startDate
    );
    List<Booking> findByUserId(Long userId);
}