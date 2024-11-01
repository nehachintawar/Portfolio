import React from 'react'
import seo from "../assets/seo.jpg"
import resume from '../assets/Chintawar_Neha_Resume.pdf'
function Portfolio() {
  return (
    <div className='portfolio-container'>
      <h1 className='heading'>Portfolio</h1>
      <div className="sub">
        <img src={seo} alt="" />
        <div className='my-links'>

          <div className="links">
            <h2> GitHub </h2>
            <p> My GitHub contains all my projects and contributions.</p>
            <a href="https://github.com/nehachintawar">See More <b>&gt;&gt;&gt; </b></a>
          </div>

          <div className="links">
            <h2> Resume </h2>
            <p> My Resume having details of my Achievements, projects and education.</p>
            <a href={resume}>See More <b>&gt;&gt;&gt; </b></a>
          </div>

          <div className="links">
            <h2> LinkedIn Profile </h2>
            <p> Connect with me on linkedIn.</p>
            <a href="https://www.linkedin.com/in/neha-chintawar-46a713228">See More <b>&gt;&gt;&gt; </b></a>
          </div>

          <div className="links">
            <h2> CodeChef </h2>
            <p> I regularly solve problems on codeChef</p>
            <a href="https://www.codechef.com/">See More <b>&gt;&gt;&gt; </b></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio