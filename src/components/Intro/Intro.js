import React from "react"
import "./Intro.css"

const Intro = () => {
  return (
    <section id="intro">
      <h1 className="highlight-text mono small">Hi, my name is</h1>
      <h2
        className="title"
        style={{
          fontSize: "3rem",
          marginBottom: 0,
        }}
      >
        Abhishek Kakade.
      </h2>
      <h3
        style={{
          fontSize: "2.75rem",
        }}
      >
        I build things for the web.
      </h3>

      <p>
        I'm a versatile{" "}
        <span className="highlight-text">Front-End Developer</span> specializing
        in <span className="highlight-text">JavaScript</span>,{" "}
        <span className="highlight-text">ReactJS</span>. Graduated from{" "}
        <span className="highlight-text">Udacity's Front-End Nanodegree</span>{" "}
        program with Google India Scholarship. MERN stack enthusiast. Open
        source contributor.
      </p>

      <a className="get-in-touch-btn" href="mailto:abhishekakade@gmail.com">
        Get In Touch
      </a>
    </section>
  )
}

export default Intro
