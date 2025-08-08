package com.example.smartlogix.controller;

import com.example.smartlogix.dto.ShipperDto;
import com.example.smartlogix.entity.Shipper;
import com.example.smartlogix.service.ShipperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/shippers")
public class ShippperController {
    @Autowired
    ShipperService shipperService;

    @PostMapping
    public Shipper createShipper(@RequestBody ShipperDto shipperDto){
        return shipperService.createShipper(shipperDto);
    }

    @GetMapping
    public List<Shipper> getAllShipper(){
        return shipperService.getAllShipper();
    }

    @GetMapping("/{id}")
    public Shipper getShipperById(@PathVariable Long id){
        return shipperService.getShipperById(id);
    }

}
