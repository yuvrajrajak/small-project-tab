import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <section className="loading">
        <h1>Loading...</h1>
      </section>
    )
  }
  const { company, dates, duties, title } = jobs[value]
  return (
    <Wrapper>
      <section className="section">
        <div className="title">
          <h2>experience</h2>
          <div className="underline"></div>
        </div>

        <div className="job-center">
          {/* btn-container */}
          <div className="btn-container">
            {
              jobs.map((item, index) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => setValue(index)}
                    className={`job-btn ${index === value && 'active-btn'}`}
                  >
                    {item.company}
                  </button>
                )
              })
            }
          </div>
          {/* job info */}
          <article>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {
              duties.map((duty, index) => {
                return (
                  <div key={index} className="job-desc">
                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                    <p className="job-text">{duty}</p>
                  </div>
                )
              })
            }
          </article>
        </div>
        <button type="button" className="btn">
          more info
        </button>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
margin-top: 4rem;
h2{
  font-size: 2.5rem;
}

.btn-container{
  display: flex;
  justify-content: center;
}
.job-btn{
  background: transparent;
  border-color: transparent;
  font-size: 1.4rem;
  margin-right: 1rem;
  cursor: pointer;
  transition: var(--transition);
}
.job-btn:hover{
  color: var(--clr-primary-5);
  box-shadow: 0px 2px var(--clr-primary-5);
}
article{
  margin-top: 3rem;
  h3{
    font-weight: 400;
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
  h4{
    background: var(--clr-grey-9);
    padding: 0.4rem 0.8rem;
    display: inline;
    border-radius: 0.25rem;
    font-weight: bold;
    font-size: 1rem;
    color: var(--clr-grey-5);
  }
  .job-date{
    margin-top: 1rem;
    font-size: 1rem;
  }
  .job-icon{
    color: var(--clr-primary-5);
    margin-bottom: 1.2rem;
  }
  .job-text{
    color: var(--clr-grey-1);
    font-size: 1rem;
  }
  .job-desc{
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;
  }
}
.btn{
display: block;
margin: 0 auto;
background: transparent;
border-color: transparent;
background: var(--clr-primary-5);
padding: 0.5rem 1.5rem;
border-radius: 0.25rem;
font-size: 0.875rem;
font-weight: bold;
text-transform: uppercase;
color: var(--clr-primary-9);
letter-spacing: var(--spacing);
margin-top: 3rem;
cursor: pointer;
}
.btn:hover{
  background: var(--clr-primary-8);
  color: var(--clr-primary-1);
}
.active-btn{
  color: var(--clr-primary-5);
  box-shadow: 0 2px var(--clr-primary-5);
}

@media screen and (min-width: 992px){
  .job-center{
    width: 90vw;
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 4rem;
  }
  .btn-container{
    margin-top: 3.2rem;
    flex-direction: column;
    justify-content: flex-start;
  }
  .job-btn{
    margin-bottom: 1rem;
  }
  .active-btn{
    box-shadow: -2px 0 var(--clr-primary-5);
  }
  .job-btn:hover{
    box-shadow: -2px 0 var(--clr-primary-5);
  }
}

`

export default App
