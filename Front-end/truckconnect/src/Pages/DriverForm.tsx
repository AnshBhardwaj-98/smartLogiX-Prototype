import './DriverForm.css';

const DriverForm = () => {
  return (
    <div className="driver-form-wrapper">
      <h1 className="title">🚚 TruckConnect</h1>
      <div className="form-header">Driver Registration</div>

      <form className="driver-form">
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
          <label>License Number</label>
          <input type="text" placeholder="License #" required />
        </div>

        <div className="form-group">
          <label>Truck Type</label>
          <input type="text" placeholder="e.g. Container, Reefer" />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input type="tel" placeholder="Phone Number" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Age</label>
            <input type="number" placeholder="Age" />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" />
          </div>
        </div>

        <button type="submit">Register Driver</button>
      </form>
    </div>
  );
};

export default DriverForm;
