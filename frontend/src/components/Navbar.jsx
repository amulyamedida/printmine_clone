import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <Link to="/" style={styles.logo}>Ecommerce</Link>
      </div>
      <div style={styles.right}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/cart" style={styles.link}>Cart</Link>
        <Link to="/signup" style={styles.link}>Sign Up</Link>
        <Link to="/login" style={styles.link}>Log In</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'flex-start',
    padding: '20px',
    backgroundColor: '#333',
    color: 'white',
    position: 'fixed', 
    top: 0,
    width: '80%',
    zIndex: 900,
  },
  left: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  right: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  logo: {
    fontSize: '24px',
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold', 
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    marginLeft: '20px',
    fontSize: '18px',
  },
};

export default Navbar;
