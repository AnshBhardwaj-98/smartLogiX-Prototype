package com.example.smartlogix.service;
import com.example.smartlogix.dto.DriverDto;
import com.example.smartlogix.entity.Driver;

import java.util.*;
public interface DriverService {
    Driver createDriver(DriverDto driverDto);
    List<Driver> getAlldrivers();
    Driver getDriverbyid(Long id);
    void deleteDriverById(Long id);


}
