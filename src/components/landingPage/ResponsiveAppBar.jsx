import React, { useState, useEffect } from "react";
import { Modal, Box, Snackbar, Alert } from "@mui/material";

const Navbar = (props) => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signinModalOpen, setSigninModalOpen] = useState(false);
  const [addBlogModalOpen, setAddBlogModalOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const handleOpenLogin = (state) => setLoginModalOpen(state);
  const handleOpenSignin = (state) => setSigninModalOpen(state);
  const handleAddBlogModalOpen = (state) => setAddBlogModalOpen(state);

  const registerUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("username"),
      password: formData.get("password"),
    };
    try {
      await fetch("http://localhost:5000/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      handleOpenSignin(false);
      setNotificationOpen(true);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("uname"),
      password: formData.get("psw"),
    };
    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const userData = await response.json();
        localStorage.setItem("user", JSON.stringify(userData.token));
        props.setIsAuthenticated(true);
        setLoginModalOpen(false);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const logoutFunction = () => {
    localStorage.removeItem("user");
    props.setIsAuthenticated(false);
    alert("Logout successful");
  };

  const submitBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      title: formData.get("title"),
      image: "https://picsum.photos/300",
      text: formData.get("content"),
    };
    try {
      const token = JSON.parse(localStorage.getItem("user"));
      const response = await fetch("http://localhost:5000/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("Blog posted successfully!");
        setAddBlogModalOpen(false);
      } else {
        console.error("Failed to post blog");
      }
    } catch (error) {
      console.error("Error submitting blog:", error);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">TechEasy</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="auth-buttons">
          {props.isAuthenticated ? (
            <>
              <button onClick={() => handleAddBlogModalOpen(true)} className="btn">Add blogpost</button>
              <button onClick={logoutFunction} className="btn">Logout</button>
            </>
          ) : (
            <>
              <button onClick={() => handleOpenLogin(true)} className="btn login">Login</button>
              <button onClick={() => handleOpenSignin(true)} className="btn signup">Sign Up</button>
            </>
          )}
        </div>
      </nav>

      {/* LOGIN MODAL */}
      <Modal open={loginModalOpen} onClose={() => handleOpenLogin(false)}>
        <Box sx={{ ...modalStyle }}>
          <form onSubmit={loginUser} style={{
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

      {/* SIGNUP MODAL */}
      <Modal open={signinModalOpen} onClose={() => handleOpenSignin(false)}>
        <Box sx={{ ...modalStyle }}>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              width: '100%',
            }}
            onSubmit={registerUser}
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

      {/* ADD BLOG MODAL */}
      <Modal open={addBlogModalOpen} onClose={() => handleAddBlogModalOpen(false)}>
        <Box sx={{ ...modalStyle }}>
          <form
            onSubmit={submitBlog}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <label htmlFor="username" style={{ fontWeight: 'bold' }}>Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter the title"
                required
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  fontSize: '16px'
                }}
              />

              <label htmlFor="email" style={{ fontWeight: 'bold' }}>Content</label>
              <textarea style={{
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
                resize: 'none'
              }} rows={10} placeholder="Enter the content" name="content" id="">
              </textarea>

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
                Add
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
                onClick={() => handleAddBlogModalOpen(false)}
              >
                Cancel
              </button>

            </div>
          </form>
        </Box>
      </Modal>

      <Snackbar open={notificationOpen} autoHideDuration={3000} onClose={() => setNotificationOpen(false)}>
        <Alert severity="success">Registration successful!</Alert>
      </Snackbar>
    </>
  );
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const bottomModal = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '10px',
};

export default Navbar;
