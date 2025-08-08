import './LandingPage.css'
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import { useNavigate } from 'react-router-dom'
const LandingPage = () => {

  const navigate = useNavigate();

  const navhandler = () =>{
    navigate('/register')
  }
  return (
   <div className='landing-page'>
   <Navbar/>


   <section className="hero">
        <h1>Connect Shippers with <span className="highlight">Truck Drivers</span></h1>
        <p className="subtext">
          India’s fastest growing platform to find reliable trucks or profitable loads.
        </p>
        <div className="stats">
          <div><strong>500+</strong><br/>Active Trucks</div>
          <div><strong>1000+</strong><br/>Loads Completed</div>
          <div><strong>25+</strong><br/>Cities</div>
        </div>
      </section>

      <section className="user-type-section">
        <div className="card shipper">
          <h3>I Need to Ship Goods</h3>
          <ul>
            <li>Post pickup & delivery locations</li>
            <li>Specify cargo requirements</li>
            <li>Connect with drivers</li>
          </ul>
          <button className="blue-btn">Get Started as Shipper</button>
        </div>

        <div className="card driver">
          <h3>I Own/Drive a Truck</h3>
          <ul>
            <li> Find loads on your route</li>
            <li> Reduce empty return trips</li>
            <li>Build relationships with shippers</li>
          </ul>
          <button className="orange-btn" onClick={navhandler}>Get Started as Driver</button>
        </div>
      </section>


      <Footer/>
   </div>
  )
}

export default LandingPage