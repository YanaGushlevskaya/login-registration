import React from 'react';

function Login({handleLoginSubmit}) {

  return (
    <section className="Login base-section">
      <div className="container">
        <div className="form-wrapper form-wrapper--login">
          <h2>Login form</h2>
          <p className="desc"></p>
          <form onSubmit = {handleLoginSubmit}>
            <div className="form-group">
              <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className="form-control" id="email" placeholder="Enter your email"/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="check-password" placeholder="Re-enter password"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
