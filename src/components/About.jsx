import React from 'react'

function About() {
  return (
    <div className='about-container'>
      <div className="details-container">
        <h1 className='heading'>About Me</h1>
        <p className='details'>
          I'am a fresher, currently searching for a job where i can apply my Web Development skills and contribute in growth of organization which will help me to grow. I believe my knack for trying out new things will help me in moving forward.
        </p>

        <hr />

        <div className="skills">
          <ul>
            <li>HTML5</li>
            <li>Cascading Style Sheet (CSS)</li>
            <li>BootStrap</li>
          </ul>
          
          <ul>
            <li>JavaScript</li>
            <li>Git & GitHub</li>
            <li>NodeJS</li>
          </ul>
        </div>

        <hr />

        <p className='educational-background'>
          I have completed my Batchlor of Technology in Computer Science Engineering from Mahatma Gandhi Missions College of Engineering Nanded. I have strong knowledge of Website Developement and i have developed plenty of projects during my academics and further. I am currently looking for web development oportunities.
        </p>

      </div>
    </div>
  )
}

export default About