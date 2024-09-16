import {Link} from 'react-router-dom'
import React from 'react'
import Card from '../components/share/Card'

function AboutPage() {
  return (
    <Card>
        <h1>About this page</h1>
        <p>This page is a place that we can leave the feedback about something</p>
        <p>Version: 1.0.0</p>
        <p>
            <Link to='/'>
                Back to home page
            </Link>
        </p>
    </Card>
  )
}

export default AboutPage