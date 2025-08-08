package com.example.smartlogix.service;
import com.example.smartlogix.dto.ShipperDto;
import com.example.smartlogix.entity.Shipper;

import java.util.*;
public interface ShipperService {
    Shipper createShipper(ShipperDto shipperDto);
    List<Shipper> getAllShipper();
    Shipper getShipperById(Long id);
    void deleteShipperById(Long id);
}
