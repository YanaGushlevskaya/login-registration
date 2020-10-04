import React from 'react';

function Registration({handleRegistrationSubmit}) {

  return (
    <section className="Registration base-section">
      <div className="container">
        <div className="form-wrapper form-wrapper--registration">
          <h2>Registration form</h2>
          <p className="desc"></p>
          <form onSubmit = {handleRegistrationSubmit}>
            <div className="form-group">
              <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className="form-control" id="email" placeholder="Enter your email"/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="password" placeholder="Password" autoComplete="on"/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="check-password" placeholder="Re-enter password" autoComplete="on"/>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Registration;
