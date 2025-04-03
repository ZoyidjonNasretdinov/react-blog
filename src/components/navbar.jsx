import React from 'react'
import { Link } from 'react-router-dom'
// Removed unused Logo import

const Navbar = () => {
  return (
    <header className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-2">
      <Link to="/" className="d-flex align-items-center text-dark text-decoration-none ">
        <div className='w-[40px] h-[40px] overflow-hidden rounded-full object-cover'>
          <img src='https://images.scalebranding.com/honey-bee-logo-7839d9fd-9054-483f-94d5-35f252dd192d.jpg' alt='' width={80} height={80} className='object-cover' />
        </div>
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link className="me-3 py-2 text-dark text-decoration-none" to="/Login">Login</Link>
        <Link className="me-3 py-2 text-dark text-decoration-none" to="/Register">Register</Link>
      </nav>
    </header>
  )
}

export default Navbar
