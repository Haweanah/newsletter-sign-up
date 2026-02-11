import { useState } from 'react'
import './App.css'
import NewsletterInfo from './components/NewsletterInfo'
import Illustration from './components/Illustration'
import Footer from './components/Footer.jsx'
import Form from "./components/Form"




function App() {
const [email, setEmail] = useState("");
const [error, setError] = useState("");
const [success, setSuccess] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    setError("Valid email required");
    setSuccess(false)
  } else {
    setError("");
    setSuccess(true)
  }

};

  return (


    <div className='container'>
    <Illustration/>
    <NewsletterInfo/>
    <Form
    handleSubmit={handleSubmit}
    email={email}
    setEmail={setEmail}
    success={success}
    error={error}
    
        />
<Footer/>







          </div>
  )
}

export default App
