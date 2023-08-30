import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="registration-heading">Registration</h2>
        <div className="form-container">
          <div className="form-group">
            <label className="form-label" for="reg-firstname">First Name:</label>
            <input className="form-input" type="text" id="reg-firstname" placeholder="Enter your first name" />
            <label className="form-label" for="reg-firstname">Last Name:</label>
            <input className="form-input" type="text" placeholder="Enter your last name" />
          </div>
          <div className="form-group">
            <label className="form-label" for="reg-email">Email:</label>
            <input className="form-input" type="email" id="reg-email" placeholder="Enter your email" />
            <label className="form-label" for="reg-mobile">Mobile No:</label>
            <input className="form-input" type="tel" placeholder="xxxxxxxxxx" />
          </div>
          <div className="form-group">
            <label className="form-label"></label>
            <select className="form-select">
            <option value="" disabled selected>Select Level</option> 
              <option>Basic</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label" for="reg-company">Company Name:</label>
            <input className="form-input" type="text" id="reg-company" placeholder="Enter your company name" />
            <label className="form-label" for="reg-staffid">StaffID:</label>
            <input className="form-input" type="text" id="reg-staffid" placeholder="000000 0000 000" />
          </div>
          <div className="form-group">
            <label className="form-label" for="reg-password">Password:</label>
            <input className="form-input" type="password" id="reg-password" placeholder="Enter your password" />
            <label className="form-label" for="reg-confirm-password">Confirm Password:</label>
            <input className="form-input" type="password" placeholder="Confirm your password" />
          </div>
          <button className="submit-button">Register</button>
        </div>
      </header>   
    </div>
  );
}
export default App