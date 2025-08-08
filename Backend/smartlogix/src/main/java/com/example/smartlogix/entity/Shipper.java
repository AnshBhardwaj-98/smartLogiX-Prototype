package com.example.smartlogix.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import javax.xml.validation.Schema;

@Entity
@Table(name = "shipper_db", schema = "drivermanagements")
public class Shipper {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "email" ,nullable=false ,unique=true)
    private String email;

    @Column(name="phone")
    private String phone;

    @Column(name = "company_name")
    private String companyName;

    @Column(name = "truck_type")
    private String truckType;

    @Column(name = "origin_location")
    private String originLocation;

    @Column(name = "destination_location")
    private String destinationLocation;

    @Column(name = "goods_type")
    private String goodsType;

//    @Column(name = "created_at")
//    private java.time.LocalDateTime createdAt = java.time.LocalDateTime.now();

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getTruckType() {
        return truckType;
    }

    public void setTruckType(String truckType) {
        this.truckType = truckType;
    }

    public String getDestinationLocation() {
        return destinationLocation;
    }

    public void setDestinationLocation(String destinationLocation) {
        this.destinationLocation = destinationLocation;
    }

    public String getOriginLocation() {
        return originLocation;
    }

    public void setOriginLocation(String originLocation) {
        this.originLocation = originLocation;
    }

    public String getGoodsType() {
        return goodsType;
    }

    public void setGoodsType(String goodsType) {
        this.goodsType = goodsType;
    }
}
