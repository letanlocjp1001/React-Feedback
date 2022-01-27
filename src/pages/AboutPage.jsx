import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>This is a React app to leaver feedback aproduct or service</p>
        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
