import { useState } from "react";
import "./App.css";
import NewsletterInfo from "./components/NewsletterInfo";
import Illustration from "./components/Illustration";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Success from "./components/Success";

function App() {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="container">
      {success ? (
        <Success email={email} setSuccess={setSuccess} />
      ) : (
        <div className="page">
          <main>
          <div className="image-wrapper">
            <Illustration />
            </div>
          
          <div className="info">
            <NewsletterInfo />
          <Form
            setSuccess={setSuccess}
            setEmail={setEmail}
          />
          </div>
          
        </main>
        <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
