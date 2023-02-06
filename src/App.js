import React, { useState } from "react";
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input === "about") {
      setOutput(`
        About Me:
        I am Happy Kumar . I am currently pursuing BTech from Indian Institute of Information Technology, SriCity.
        I am a full-stack developer with a passion for coding and a love for problem-solving.
        I have worked as frontend developer intern at Agriday. I was also core member of IOTA club which is project club at our institute.
        I have worked with several languages like C, C++, JavaScript, Python.
        I am constantly striving to improve my skills and expand my knowledge in the field.
      `);
    } else if (input === "experience") {
      setOutput(`
        Experience:
        - Frontend Developer Intern at Agriday.
          Translated the UI/UX design wireframes to actual react code that will produce visual elements of the application.
          Built responsive and elegant web UIs.
          Worked closely with designers to take wireframes from conception to implementation, design and improve user interfaces.
      `);
    } else if (input === "help") {
      setOutput(`
        You need to type some commands to know me.
        about => To know about me.
        experience => To Know about my experience.
        skills => To Know about my skills.
        projects => To Know about my projects.
        education => To Know about my education.
        social media => To get my linkedin and github profile link.
      `);
    }else if (input === "skills") {
      setOutput(`
        Skills:
        - React
        - Node.js
        - MySQL
        - HTML/CSS
        - JavaScript
        - C++
      `);
    } else if (input === "education") {
      setOutput(`
        Education:
        - Bachelor of Technology in Computer Science Engineering from Indian Institute of Information Technology, SriCity (2019-2023)
        - Class 12th from Army Public School, Prayagraj, Uttar Pradesh (2017-2018)
      `);
    } else if (input === "social media") {
      setOutput(`
        Social Media:
        - LinkedIn: https://www.linkedin.com/in/happy-kumar-16011a19b/
        - GitHub: https://github.com/happy-jays
      `);
    }else if (input === "projects") {
      setOutput(`
        Projects:
        - UFIT : Full Stack MERN Project   (AUG 2021 - MAR 2022)
          Link : https://github.com/happy-jays/fitness-tracker
          • Converted the wireframes into quality code and created reusable, reliable React component
          • Delivered NodeJs backend with the integration of JWT, Multer
          • Utilized Mocha and Chai frameworks for testing and made it fault-tolerant
          • Features : Workout Scheduler, Blog writing, REST APIs

        - Official Baatmi : Natural Language Processing Project  (AUG 2021 - Dec 2021)
          Link : https://drive.google.com/drive/folders/1pGei2nY74BwgZyBUUEJAUawBXcyWsXgp
          • Developed, Trained and Validated POS Tagging model using Viterbi algorithm
          • worked on data cleaning, data transformation and data reduction
          • Constructed custom-built POS-tagging model which can be labelled data for any language.
          • Configured Seq-2-Seq Machine translation model for translation of Marathi to Hindi and vice versa.
          • Inspired from AI4Bharat project.

        - Tablo : Web Development Project  (JAN 2021 - MAR 2021)
          Link : https://github.com/happy-jays/wad
          • This is a web-app created using Python, Django. By using this user can login and order from table in a restaurant by
          scanning the QR Code.
          • On Scanning QR Code user can see entire menu of that restaurant .
          • Business owners can easily register their pub, restaurant, cafe or club to offer table service .
      `);
    }else {
      setOutput("Command not found. Please try again.");
    }
    setInput("");
  };
  return (
    <div className="terminal-container">
      <h1>TERMINAL BASED PORTFOLIO WEBSITE</h1>
      <h3>Type "help" to know more.</h3>
      <form onSubmit={handleSubmit}>
        <div className="terminal-input-container">
          <div className="terminal-prompt">
            <span className="terminal-prompt-symbol">$</span>
            <input
              type="text"
              value={input}
              onChange={handleInput}
              className="terminal-input"
            />
          </div>
        </div>
        <pre className="terminal-output">{output}</pre>
      </form>
    </div>
  );
}

export default App;
