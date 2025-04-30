import React, { useState, useEffect } from "react";
import { Modal, Box, Snackbar, Alert } from "@mui/material";

const Navbar = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signinModalOpen, setSigninModalOpen] = useState(false);
  const [addBlogModalOpen, setAddBlogModalOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("user"));

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
        setIsAuthenticated(true);
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
    setIsAuthenticated(false);
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
          {isAuthenticated ? (
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
          <form onSubmit={loginUser} style={formStyle}>
            <label>Username</label>
            <input type="text" name="uname" required />
            <label>Password</label>
            <input type="password" name="psw" required />
            <label>
              <input type="checkbox" defaultChecked name="remember" /> Remember me
            </label>
            <button type="submit">Login</button>
            <div style={bottomModal}>
              <button type="button" onClick={() => handleOpenLogin(false)}>Cancel</button>
              <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
          </form>
        </Box>
      </Modal>

      {/* SIGNUP MODAL */}
      <Modal open={signinModalOpen} onClose={() => handleOpenSignin(false)}>
        <Box sx={{ ...modalStyle }}>
          <form onSubmit={registerUser} style={formStyle}>
            <label>Username</label>
            <input type="text" name="username" required />
            <label>Email</label>
            <input type="email" name="email" required />
            <label>Password</label>
            <input type="password" name="password" required />
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" required />
            <button type="submit">Sign Up</button>
            <button type="button" onClick={() => handleOpenSignin(false)}>Cancel</button>
          </form>
        </Box>
      </Modal>

      {/* ADD BLOG MODAL */}
      <Modal open={addBlogModalOpen} onClose={() => handleAddBlogModalOpen(false)}>
        <Box sx={{ ...modalStyle }}>
          <form onSubmit={submitBlog} style={formStyle}>
            <label>Title</label>
            <input type="text" name="title" required />
            <label>Content</label>
            <textarea name="content" rows={10} required />
            <button type="submit">Submit Blog</button>
            <button type="button" onClick={() => handleAddBlogModalOpen(false)}>Cancel</button>
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
