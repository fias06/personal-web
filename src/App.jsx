import React, { useState } from 'react';
import './index.css'; 

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Applies the body background color from the original HTML
    <div style={{ backgroundColor: '#f0e7d8' }}>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar__container">
          <a href="/" id="navbar__logo">Personal Website</a>
          <div
            className={isMenuOpen ? 'navbar__toggle is-active' : 'navbar__toggle'}
            id="mobile-menu"
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul className={isMenuOpen ? 'navbar__menu active' : 'navbar__menu'}>
            <li className="navbar__item">
              <a href="#top" className="navbar__links">HOME</a>
            </li>
            <li className="navbar__item">
              <a href="#about-section" className="navbar__links">ABOUT</a>
            </li>
            <li className="navbar__item">
              <a href="#resume-section" className="navbar__links">RESUME</a>
            </li>
            <li className="navbar__item">
              <a href="#project-section" className="navbar__links">PROJECTS</a>
            </li>
            <li className="navbar__item">
              <a href="#activity-section" className="navbar__links">ACTIVITIES</a>
            </li>
            <li className="navbar__item">
              <a href="#contact-section" className="navbar__links">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Website Main Content */}
      <br /><br /><br /><br /><br /><br />
      
      {/* Converted <center> to a div with text-align: center */}
      <div style={{ textAlign: 'center' }}>
        <p className="man-center">Saif Shaikh</p>
        
        <div className="social-icons">
          <a href="http://linkedin.com/in/saif-s-1254572b1" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/fias06" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:saifmshaikh19@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>{' '}
        <br />

        <p className="new-resume">
          <a href="Saif Shaikh Resume.pdf" className="new-resume" target="_blank" rel="noopener noreferrer">
            Resume PDF
          </a>
        </p>

        <br /><br />
        <h1>
          Mathematics and Computer Science Student<br />
          at McGill University
        </h1><br /><br /><br /><br />

        <a href="#about-section" className="down-arrow">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
        <br /><br /><br />
      </div>

      {/* ABOUT SECTION */}
      <div className="bottom-section" id="about-section">
        <p className="dark-back-head">About me</p>
        <div className="container">
          <img src="photo3.jpg" alt="Profile Photo" className="profile-pic" />
          <p className="dark-back-body">
            I am Saif Shaikh, a Math and Computer Science student at McGill University. I was born in India, grew up in
            Saudi Arabia, and now I am studying in Canada. I am passionate about technology and enjoy working on
            projects related to software development, AI, cybersecurity, and design. I also have a strong interest in
            calligraphy and enjoy expressing creativity through art. I like solving real-world problems and learning new
            things through hands-on experience and collaboration
          </p>
        </div>
      </div>
      <br /><br />

      {/* WORK EXPERIENCE section */}
      <p className="dark-back-head">Work Experience</p>

      <div className="timeline" id="resume-section">
        <div className="timeline-item">
          <div className="timeline-left">
            <h3>Software Developer intern</h3>
            <p className="date">May 2025 - September 2025</p>
          </div>
          <div className="timeline-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="timeline-right">
            <h4 className="company">Coloré</h4>
            <p className="description">
              In this role, I am involved in both UI/UX design and frontend development. I help design user-friendly,
              visually engaging interfaces and bring them to life through responsive, accessible web development. I also
              assist with gathering and applying user feedback to improve the overall experience. Along the way, I
              collaborate closely with designers, developers, and the product team to turn ideas into real features. It’s
              been a great opportunity to use my technical and creative skills to help build something that truly makes
              a difference.
            </p>
          </div>
        </div>

        {/* ... (Other timeline items follow the same pattern) ... */}
        
        <div className="timeline-item">
          <div className="timeline-left">
            <h3>Co-Founder & VP Tech</h3>
            <p className="date">September 2025 – Present</p>
          </div>
          <div className="timeline-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="timeline-right">
            <h4 className="company">McGill Cyber Society</h4>
            <p className="description">
              As the Co-Founder and VP Tech, I help run a student cybersecurity society focused on learning and
              practicing real-world skills. I organize workshops on ethical hacking, coding, and security tools, and lead
              CTF hackathons to challenge and engage members. I also manage the club’s technical resources, build tools
              for activities, and support members in developing their cybersecurity skills.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-left">
            <h3>VP Web Developer</h3>
            <p className="date">September 2025 – Present</p>
          </div>
          <div className="timeline-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="timeline-right">
            <h4 className="company">PharmaHacks</h4>
            <p className="description">
              As the VP Web Developer, I help design, build, and maintain our website to keep it up to date with events,
              workshops, and hackathon details. I work with a team to improve user experience, ensure everything runs
              smoothly, and add new features that make it easier for participants and sponsors to stay informed and
              engaged.
            </p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-left">
            <h3>VP coding</h3>
            <p className="date">August 2024 - Present</p>
          </div>
          <div className="timeline-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="timeline-right">
            <h4 className="company">Youreka Canada</h4>
            <p className="description">
              As the VP Coding, my role involves assisting high school students with the coding and statistical analysis
              aspects of their research projects. I’ll be helping them use R programming to analyze data, solve problems,
              and develop solutions that support their research.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-left">
            <h3>First year representative</h3>
            <p className="date">August 2024 - April 2025</p>
          </div>
          <div className="timeline-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="timeline-right">
            <h4 className="company">McHacks</h4>
            <p className="description">
              In my position at McGill Hackathon Club (McHacks), along with other team members, I am responsible for
              maintaining the website, organizing hackathons, and contributing to creative elements and design ideas that
              enhance the overall event experience.
            </p>
          </div>
        </div>
      </div>

      {/* EDUCATION section */}
      <p className="dark-back-head">Education</p>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-left">
            <h3>Bachelor of Science</h3>
            <p className="date">August 2024 - April 2028</p>
          </div>
          <div className="timeline-icon">
            <i className="fas fa-book"></i>
          </div>
          <div className="timeline-right">
            <h4 className="company">McGill University</h4>
            <p className="description">
              Montreal, Canada <br />
              Major: Math and Computer Science <br />
              GPA: 3.85/4.0
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-left">
            <h3>High School Diploma</h3>
            <p className="date">April 2020 - April 2024</p>
          </div>
          <div className="timeline-icon">
            <i className="fas fa-book"></i>
          </div>
          <div className="timeline-right">
            <h4 className="company">Radhwa International School</h4>
            <p className="description">
              Yanbu, Saudi Arabia<br />
              Overall percentage: 96%<br />
              Subjects: Advanced Mathematics, Computer Science, Physics, Chemistry, English Literature, Social Studies
            </p>
          </div>
        </div>
      </div>

      {/* PROJECTS section */}
      <div className="bottom-section" id="project-section">
        <p className="dark-back-head">Projects</p>
        
        {/* Project 1: MediQuest */}
        <div className="text-video-wrapper">
          <div className="text-section">
            <h2>MediQuest (March 2025)</h2>
            <p>
              Winner of the NeuroHacks Niantic Studios Challenge, MediQuest is a virtual reality software designed to
              help individuals with social anxiety practice real-world interactions in a safe, controlled environment.
              Built for the Meta Quest 3, the platform immerses users in scenario-based simulations where they can engage
              in guided conversations with virtual characters, supported by on-screen prompts.
              <br />
              <br />
              The experience includes multiple features such as selectable interaction scenarios (e.g., visiting a doctor
              or reconnecting with a friend), custom-designed 3D environments and characters modeled in Blender, and a
              built-in meditation animation powered by Niantic Studios to help users manage anxiety before or after
              interactions.
            </p>
          </div>
          <a href="https://youtu.be/eJsYLrJXO3U" target="_blank" rel="noopener noreferrer" className="youtube-preview">
            <img src="https://img.youtube.com/vi/eJsYLrJXO3U/hqdefault.jpg" alt="YouTube thumbnail" />
            <div className="play-button">
              <svg viewBox="0 0 100 100" width="60" height="60">
                <circle cx="50" cy="50" r="48" fill="rgba(0,0,0,0.6)" />
                <polygon points="40,30 70,50 40,70" fill="white" />
              </svg>
            </div>
          </a>
        </div>
        <p className="dark-back-body">
          Skills: Virtual Reality (VR) · Natural Language Processing (NLP) · Unity · Niantic · Animation · Artificial
          Intelligence (AI) · Deep Learning · Blender · C#
        </p>

        {/* Project 2: Pharos */}
        <div className="text-video-wrapper">
          <div className="text-section">
            <h2>Pharos (February 2025)</h2>
            <p>
              Developed an AI-powered assistive tool aimed at improving accessibility for visually impaired individuals.
              The system integrates multiple APIs and advanced computer vision techniques across four key modes. In
              Detector Mode, it uses OpenCV and YOLO to detect objects, estimate dimensions, and calculate distances.
              Jarvis Mode analyzes the user’s surroundings through a live camera feed and delivers verbal descriptions
              powered by AI-generated responses via the OpenAI API. Purchase Mode recognizes objects, estimates their
              prices, and suggests where to buy them using the Google Cloud API. Music Mode allows users to play music
              through voice commands by integrating with the Spotify API. This project combines machine learning,
              computer vision, and natural language processing to deliver an intuitive and interactive experience
              tailored to the needs of visually impaired users.
            </p>
          </div>
          <a
            href="https://youtu.be/iU6VC_8TX5U?si=pUIvfBur-YIHB2j5"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-preview"
          >
            <img src="https://img.youtube.com/vi/iU6VC_8TX5U/hqdefault.jpg" alt="YouTube thumbnail" />
            <div className="play-button">
              <svg viewBox="0 0 100 100" width="60" height="60">
                <circle cx="50" cy="50" r="48" fill="rgba(0,0,0,0.6)" />
                <polygon points="40,30 70,50 40,70" fill="white" />
              </svg>
            </div>
          </a>
        </div>
        <p className="dark-back-body">
          Skills: Computer Vision · Python · Application Programming Interfaces (API) · OpenCV · Deep Learning · OpenCV,
          YOLO
        </p>

        {/* Project 3: HackMate */}
        <div className="text-video-wrapper">
          <div className="text-section">
            <h2>HackMate (January 2025)</h2>
            <p>
              Hackathon participants often struggle to find the right teammates, especially when pressed for time or
              entering competitions solo. To tackle this challenge, our project introduces a platform that allows users
              to create detailed profiles highlighting their skills, age, region, areas of expertise, and the specific
              hackathons they plan to attend. Integrated with a Gemini API chatbot, the platform also provides real-time
              assistance to users throughout their experience. Using the information provided in user profiles, the
              system intelligently matches individuals with complementary skill sets—for instance, pairing a frontend
              developer with someone skilled in backend development, UI/UX design, data analysis, or project management.
              This approach ensures well-rounded and capable teams, boosting the likelihood of success. By offering
              advanced matching algorithms and customizable filters, the platform streamlines the team formation process,
              fosters diverse collaboration, and makes hackathons more inclusive and engaging for everyone involved.
            </p>
          </div>
          <a
            href="https://www.instagram.com/reel/DFBkfLyNjRo/"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-preview"
          >
            <img src="logo.png" alt="Instagram reel thumbnail" />
            <div className="play-button">
              <svg viewBox="0 0 100 100" width="60" height="60">
                <circle cx="50" cy="50" r="48" fill="rgba(0,0,0,0.6)" />
                <polygon points="40,30 70,50 40,70" fill="white" />
              </svg>
            </div>
          </a>
        </div>
        <p className="dark-back-body">
          Skills: HTML · JavaScript · Python · Application Programming Interfaces (API) · Flask · Figma (Software) ·
          UI/UX · Cascading Style Sheets (CSS) · Web Development
        </p>

        {/* Project 4: SmartLife */}
        <div className="text-video-wrapper">
          <div className="text-section">
            <h2>SmartLife (October 2023)</h2>
            <p>
              Built a Smart Home system using Arduino to control lights, fans, and other devices through sensors and
              automation. Integrated motion and temperature sensors to optimize energy usage and improve convenience. The
              project demonstrated real-time control and automation, showcasing how IoT can make everyday living more
              efficient and user-friendly.
            </p>
          </div>
          <a href="" target="_blank" rel="noopener noreferrer" className="youtube-preview">
            <img src="radhwa.png" alt="Instagram reel thumbnail" />
            <div className="play-button">
              <svg viewBox="0 0 100 100" width="60" height="60">
                <circle cx="50" cy="50" r="48" fill="rgba(0,0,0,0.6)" />
                <polygon points="40,30 70,50 40,70" fill="white" />
              </svg>
            </div>
          </a>
        </div>
        <p className="dark-back-body">
          Skills: C++ · Python · Design · Programming · Teamwork · Analytical Skills
        </p>
      </div>
      <br /><br />

      {/* ACTIVITIES section */}
      {/* Converted <center> to a div with text-align: center */}
      <div style={{ textAlign: 'center' }}>
        <p className="dark-back-head" id="activity-section">
          Activities
        </p>
      </div>

      <div className="activities-section">
        <div className="activity">
          <div className="activity-left">
            <strong>VP events</strong> | <em>Indian Students Association McGill</em>
          </div>
          <div className="activity-right">Apr 2025 – Present</div>
        </div>

        <div className="activity">
          <div className="activity-left">
            <strong>First year representative</strong> | <em>McHacks – McGill Hackathon Club</em>
          </div>
          <div className="activity-right">Aug 2024 – Feb 2025</div>
        </div>

        <div className="activity">
          <div className="activity-left">
            <strong>General Member</strong> | <em>McGill Inter Residence Council</em>
          </div>
          <div className="activity-right">Aug 2024 – Apr 2025</div>
        </div>

        <div className="activity">
          <div className="activity-left">
            <strong>President of Council Member team</strong> | <em>Radhwa International School</em>
          </div>
          <div className="activity-right">May 2023 – May 2024</div>
        </div>

        <div className="activity">
          <div className="activity-left">
            <strong>Fundraising Coordinator</strong> | <em>Orphans Care Foundation</em>
          </div>
          <div className="activity-right">Aug 2023 – Dec 2023</div>
        </div>
      </div>

      {/* CONTACT section */}
      <section className="contact-section" id="contact-section">
        <h4>Contact</h4>
        <h2>I’d Love To Connect With You.</h2>
        <p>Let me get to know more about you.</p>

        <div className="contact-cards">
          {/* Location */}
          <div className="contact-card">
            <div className="icon">📍</div>
            <h3>Where to find me</h3>
            <p>
              Montreal QC<br />
              Canada
            </p>
          </div>

          {/* Email */}
          <div className="contact-card">
            <div className="icon">✉️</div>
            <h3>Email Me At</h3>
            <p>
              <a href="mailto:saifmshaikh19@gmail.com">saifmshaikh19@gmail.com</a>
            </p>
          </div>

          {/* LinkedIn */}
          <div className="contact-card">
            <div className="icon">in</div>
            <h3>Let's Connect</h3>
            <p>
              <a href="http://linkedin.com/in/saif-s-1254572b1" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;