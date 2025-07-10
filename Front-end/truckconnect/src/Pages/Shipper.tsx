import "./Shipper.css";
const Shipper = () => {
  return (
    <form className="shipper-form">
      <div className="form-row">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" placeholder="First Name" required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" required />
        </div>
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <input type="email" placeholder="Email Address" required />
      </div>

      <div className="form-group">
        <label>Company Name (optional)</label>
        <input type="text" placeholder="Company Name" />
      </div>

      <div className="form-group">
        <label>Registration Type</label>
        <select required>
          <option value="">Select Type</option>
          <option value="individual">Individual Customer</option>
          <option value="small">Small Business</option>
          <option value="large">Large-Scale Company</option>
        </select>
      </div>

      <div className="form-group">
        <label>Type of Truck Needed</label>
        <select required>
          <option value="">Select Truck Type</option>
          <option value="container">Container</option>
          <option value="flatbed">Flatbed</option>
          <option value="reefer">Reefer</option>
          <option value="tanker">Tanker</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label>Pickup Address</label>
        <input type="text" placeholder="Pickup Location" />
      </div>

      <div className="form-group">
        <label>Delivery Address</label>
        <input type="text" placeholder="Delivery Location" />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" placeholder="Phone Number" />
        </div>
        <div className="form-group">
          <label>Pickup Date</label>
          <input type="date" />
        </div>
      </div>

      <button type="submit">Register Shipper</button>
    </form>
  );
};

export default Shipper;
