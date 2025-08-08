import { useState } from 'react';
import './registration.css';

const registration = () => {
  const [userType, setUserType] = useState('shipper');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    shipperType: 'individual',
    transportType: '',
    truckType: '',
    licenseNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", { userType, ...formData });
  };

  return (
    <div className="registration-container">
      <h1 className="main-title">🚛 TruckConnect Registration</h1>

      <div className="user-type-toggle">
        <label>User Type:</label>
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="shipper">Shipper</option>
          <option value="truckOwner">Truck Owner</option>
        </select>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <h2>{userType === 'shipper' ? 'Shipper' : 'Truck Owner'} Registration</h2>

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {userType === 'shipper' ? (
          <>
            <label>Shipper Type:</label>
            <select
              name="shipperType"
              value={formData.shipperType}
              onChange={handleChange}
            >
              <option value="individual">Individual</option>
              <option value="smallScale">Small Scale</option>
              <option value="largeScale">Large Scale</option>
            </select>

            <label>Transport Type Needed:</label>
            <input
              type="text"
              name="transportType"
              value={formData.transportType}
              onChange={handleChange}
              placeholder="e.g. Container, Refrigerated"
            />
          </>
        ) : (
          <>
            <label>Truck Type:</label>
            <input
              type="text"
              name="truckType"
              value={formData.truckType}
              onChange={handleChange}
              placeholder="e.g. Mini Truck, 18-Wheeler"
            />

            <label>License Number:</label>
            <input
              type="text"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
            />
          </>
        )}

        <button type="submit">
          Register as {userType === 'shipper' ? 'Shipper' : 'Truck Owner'}
        </button>
      </form>
    </div>
  );
};

export default registration;
