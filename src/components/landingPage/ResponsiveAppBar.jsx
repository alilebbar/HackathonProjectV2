import React, { useState } from "react";
import { Modal, Box, Typography } from "@mui/material";


const Navbar = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signinModalOpen, setSigninModalOpen] = useState(false);
  const handleOpenLogin = (state) => setLoginModalOpen(state);
  const handleOpenSignin = (state) => setSigninModalOpen(state);
  const rejisterUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };
    try {
      let response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Error registering user:", error);
      
    }

  }

  return (
    <>

      <nav className="navbar" >
        <div className="logo">MonLogo</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="auth-buttons">
          <button onClick={() => handleOpenLogin(true)} className="btn login">Login</button>
          <button onClick={() => handleOpenSignin(true)} className="btn signup">Sign Up</button>
        </div>
      </nav>
      <Modal
        open={loginModalOpen}
        onClose={() => handleOpenLogin(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}>
          <form method="post" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            width: '100%',
          }}>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <label htmlFor="uname" style={{ fontWeight: 'bold' }}>Username</label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  fontSize: '16px'
                }}
              />

              <label htmlFor="psw" style={{ fontWeight: 'bold' }}>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  fontSize: '16px'
                }}
              />

              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                <input
                  type="checkbox"
                  defaultChecked
                  name="remember"
                />
                Remember me
              </label>

              <button type="submit" style={{
                backgroundColor: '#1976d2',
                color: 'white',
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                cursor: 'pointer'
              }}>
                Login
              </button>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#f1f1f1',
              padding: '10px',
              borderRadius: '5px',
            }}>
              <button type="button" style={{
                backgroundColor: '#e0e0e0',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}>
                Cancel
              </button>
              <span className="psw" style={{ fontSize: '14px' }}>
                Forgot <a href="#" style={{ color: '#1976d2' }}>password?</a>
              </span>
            </div>
          </form>

        </Box>
      </Modal>
      <Modal
        open={signinModalOpen}
        onClose={() => handleOpenSignin(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <form
            method="post"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              width: '100%',
            }}
            onSubmit={rejisterUser}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <label htmlFor="username" style={{ fontWeight: 'bold' }}>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Choose a username"
                required
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  fontSize: '16px'
                }}
              />

              <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  fontSize: '16px'
                }}
              />

              <label htmlFor="password" style={{ fontWeight: 'bold' }}>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                required
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  fontSize: '16px'
                }}
              />

              <label htmlFor="confirmPassword" style={{ fontWeight: 'bold' }}>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Repeat your password"
                required
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  fontSize: '16px'
                }}
              />

              <button
                type="submit"
                style={{
                  backgroundColor: '#1976d2',
                  color: 'white',
                  padding: '10px',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer',
                }}

              >
                Sign Up
              </button>
            </div>

            <div>
              <button
                type="button"
                style={{
                  backgroundColor: 'rgb(141, 0, 0)',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  width: '100%',
                  color: 'white',
                }}
                onClick={() => handleOpenSignin(false)}
              >
                Cancel
              </button>

            </div>
          </form>
        </Box>
      </Modal>


    </>
  );
};

export default Navbar;
