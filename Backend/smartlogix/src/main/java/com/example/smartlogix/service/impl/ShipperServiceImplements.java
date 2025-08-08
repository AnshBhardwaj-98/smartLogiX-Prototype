package com.example.smartlogix.service.impl;


import com.example.smartlogix.dto.ShipperDto;
import com.example.smartlogix.entity.Shipper;
import com.example.smartlogix.repository.ShipperRepository;
import com.example.smartlogix.service.ShipperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ShipperServiceImplements implements ShipperService {
    @Autowired
    private ShipperRepository shipperRepository;

    @Override
    public Shipper createShipper(ShipperDto shipperDto){
        Shipper shipper=new Shipper();
        shipper.setName(shipperDto.getName());
        shipper.setEmail(shipperDto.getEmail());
        shipper.setCompanyName(shipperDto.getCompanyName());
        shipper.setPhone(shipperDto.getPhone());
        shipper.setDestinationLocation(shipperDto.getDestinationLocation());
        shipper.setOriginLocation(shipperDto.getOriginLocation());
        shipper.setTruckType(shipperDto.getTruckType());
        shipper.setGoodsType(shipperDto.getGoodsType());
        return shipperRepository.save(shipper);
    }

    @Override
    public List<Shipper> getAllShipper() {
        return shipperRepository.findAll();
    }

    @Override
    public Shipper getShipperById(Long id) {
        return shipperRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Shipper not found with id: " + id));
    }
    @Override
    public void deleteShipperById(Long id) {
        shipperRepository.deleteById(id);
    }

}
