import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1>Welcome to Ecommerce</h1>
        <p>Your one-stop shop for everything!</p>
        <Link to="/signup" style={styles.button}>Sign Up</Link>
        <Link to="/login" style={styles.button}>Log In</Link>
      </div>
    </div>
  );
};

const styles = {
  page: {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', 
    paddingTop: '60px', 
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',  
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  button: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default Home;
