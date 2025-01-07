import React from 'react';
import '../styles/AboutUs.css'; // Ensure you have custom styling in this CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Learn more about who we are, what we do, and how we’re making an impact in society.</p>
      </header>

      <section className="mission-vision">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a transparent, secure, and efficient platform for reporting and managing cases.
          We aim to ensure accountability in all levels of society and bring about positive change through effective case handling.
        </p>
        
        <h2>Our Vision</h2>
        <p>
          Our vision is to become the leading platform for case reporting, ensuring that every case is heard, managed, and resolved with integrity and transparency.
        </p>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <div className="values-list">
          <div className="value-item">
            <h3>Transparency</h3>
            <p>We believe in clear and open communication with our users to foster trust and clarity.</p>
          </div>
          <div className="value-item">
            <h3>Accountability</h3>
            <p>We hold ourselves and our users accountable for their actions, ensuring fairness and integrity.</p>
          </div>
          <div className="value-item">
            <h3>Integrity</h3>
            <p>We maintain the highest ethical standards, ensuring every case is handled with respect and fairness.</p>
          </div>
          <div className="value-item">
            <h3>Innovation</h3>
            <p>We strive to innovate continuously, improving the user experience and adapting to the needs of our community.</p>
          </div>
        </div>
      </section>

      <section className="our-team">
        <h2>Our Team</h2>
        <p>
          We are a diverse group of passionate professionals committed to creating a positive impact. From tech experts to project managers, we work collaboratively to ensure the success of our platform.
        </p>

        <div className="team-members">
          <div className="team-member">
            <img src="team-member-1.jpg" alt="John Doe" />
            <h3>John Doe</h3>
            <p>Project Manager</p>
          </div>
          <div className="team-member">
            <img src="team-member-2.jpg" alt="Jane Smith" />
            <h3>Jane Smith</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <img src="team-member-3.jpg" alt="Sam Wilson" />
            <h3>Sam Wilson</h3>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
