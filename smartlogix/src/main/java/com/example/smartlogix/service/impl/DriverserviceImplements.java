package com.example.smartlogix.service.impl;

import com.example.smartlogix.repository.DriverRepository;
import com.example.smartlogix.dto.DriverDto;
import com.example.smartlogix.entity.Driver;
import com.example.smartlogix.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public  class DriverserviceImplements implements DriverService {
    @Autowired
    private DriverRepository driverRepository;

    @Override
    public Driver  createDriver(DriverDto driverDto) {
        Driver driver = new Driver();
        driver.setId(driverDto.getId());
        driver.setName(driverDto.getName());
        driver.setPhone(driverDto.getPhone());
        driver.setTruckType(driverDto.getTruckType());
        driver.setEmail(driverDto.getEmail());
        driver.setLicenseNumber(driverDto.getLicenseNumber());
        return driverRepository.save(driver);
    }

    @Override
    public List<Driver> getAlldrivers() {
        return driverRepository.findAll();
    }

    @Override
    public Driver getDriverbyid(Long id) {
        return driverRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteDriverById(Long id) {
        driverRepository.deleteById(id);
    }
}
