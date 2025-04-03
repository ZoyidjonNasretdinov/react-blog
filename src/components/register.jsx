import React from 'react';

const Register = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <main className="form-signin bg-white p-4 rounded shadow-sm">
        <form>
          <div className="text-center mb-4">
            <img
              className="mb-3"
              src="/assets/logo.png" // Ensure the path is correct
              alt="Logo"
              width="72"
              height="72"
            />
            <h1 className="h3 mb-3 fw-normal">Create an Account</h1>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingName"
              placeholder="Your Name"
            />
            <label htmlFor="floatingName">Full Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingEmail">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
            />
            <label htmlFor="floatingConfirmPassword">Confirm Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Register
          </button>
          <p className="mt-3 text-center">
            Already have an account? <a href="/login">Sign in</a>
          </p>
          <p className="mt-5 mb-3 text-muted text-center">© 2017–2023</p>
        </form>
      </main>
    </div>
  );
};

export default Register;
