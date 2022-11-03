import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const AboutPage = () => {
  const location = useLocation()
  const history = useHistory()
  
  console.log("We are in Route", location.pathname) // 'about | / faqs'

  const navigate = (path) => {
    history.push(path)
  }

  const goBack = () => {
    history.goBack()
  }

  const goForward = () => {
    history.goForward()
  }

  return (
    <div>
      <h1>About | FAQs </h1>
      <div>
        <button onClick={() => navigate('/')} >Go to Home</button>
        <button onClick={goBack} >Go Back</button>
        <button onClick={goForward} >Go Forward</button>
      </div>

    </div>
  );
}

export default AboutPage;
