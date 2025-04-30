import React from "react";

const BlogPosts = () => {
  return (
    <div className="containerb" id="blog">
        <h2 id="blogT">Our Blogposts</h2>
      {/* Première ligne */}
      <div className="row">
        <div className="col-md-4">
            
          <div className="service-desc">
            <img 
              src="https://tse3.mm.bing.net/th?id=OIP.yL6mtrIbj-UoPJE_DwUUFgHaEJ&pid=Api&P=0&h=180" 
              alt="How to Use a Computer Mouse" 
              className="img-fluid"
            />
            <h3>How to Use a Computer Mouse: A Beginner’s Guide</h3>
            <p>Learn the basics of using a computer mouse.
            Move the cursor by moving the mouse. Left-click to select things. Right-click to open extra options like menus.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="service-desc">
            <img 
              src="https://www.downtowncomputers.com/wp-content/uploads/2024/08/The-Ultimate-Guide-to-Computer-Security-for-Beginners.webp" 
              alt="Computer Security Tips"
              className="img-fluid"
            />
            <h3>Computer Security Tips for Beginners</h3>
            <p>Stay safe by:
              <br />
              Using strong passwords
              <br />
              Not clicking on unknown links
              <br />
              Installing antivirus software
              <br />
              Updating your system
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="service-desc">
            <img 
              src="https://universodigital.org/wp-content/uploads/Navegadores-Web.jpg" 
              alt="What Is a Web Browser"
              className="img-fluid"
            />
            <h3>What Is a Web Browser? Your Window to the Internet</h3>
            <p>A web browser lets you explore websites like Google, YouTube, or Facebook.
            Popular browsers include Chrome, Firefox, Safari, and Edge.</p>
          </div>
        </div>
      </div>

      {/* Deuxième ligne */}
      <div className="row">
        <div className="col-md-4">
          <div className="service-desc">
            <img 
              src="https://tse3.mm.bing.net/th?id=OIP.yL6mtrIbj-UoPJE_DwUUFgHaEJ&pid=Api&P=0&h=180" 
              alt="How to Use a Computer Mouse" 
              className="img-fluid"
            />
            <h3>How to Use a Computer Mouse: A Beginner’s Guide</h3>
            <p>Learn the basics of using a computer mouse.
            Move the cursor by moving the mouse. Left-click to select things. Right-click to open extra options like menus.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="service-desc">
            <img 
              src="https://www.downtowncomputers.com/wp-content/uploads/2024/08/The-Ultimate-Guide-to-Computer-Security-for-Beginners.webp" 
              alt="Computer Security Tips"
              className="img-fluid"
            />
            <h3>Computer Security Tips for Beginners</h3>
            <p>Stay safe by:
              <br />
              Using strong passwords
              <br />
              Not clicking on unknown links
              <br />
              Installing antivirus software
              <br />
              Updating your system
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="service-desc">
            <img 
              src="https://universodigital.org/wp-content/uploads/Navegadores-Web.jpg" 
              alt="What Is a Web Browser"
              className="img-fluid"
            />
            <h3>What Is a Web Browser? Your Window to the Internet</h3>
            <p>A web browser lets you explore websites like Google, YouTube, or Facebook.
            Popular browsers include Chrome, Firefox, Safari, and Edge.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
