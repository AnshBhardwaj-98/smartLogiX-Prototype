package com.example.smartlogix.controller;

import com.example.smartlogix.dto.DriverDto;
import com.example.smartlogix.entity.Driver;
import com.example.smartlogix.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/drivers")
public class DriverController {
    @Autowired
    private DriverService driverservice;

    @PostMapping
    public Driver createDriver(@RequestBody DriverDto driverDto){
        return driverservice.createDriver(driverDto);
    }

    @GetMapping
    public List<Driver> getAlldrivers(){
        return driverservice.getAlldrivers();
    }

    @GetMapping("/{id}")
    public Driver getDriverById(@PathVariable Long id) {
        return driverservice.getDriverbyid(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDriver(@PathVariable Long id) {
        driverservice.deleteDriverById(id);
        return ResponseEntity.ok("Driver deleted successfully");
    }
}
