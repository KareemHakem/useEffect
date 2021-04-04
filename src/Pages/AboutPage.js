import React from "react";
import { useHistory } from "react-router-dom";


export default function AboutPage() {

    let history = useHistory();

    const handleGoToHomePage = () =>{
        history.push("/");
    }

    const handleGoToContactPage =() =>{
        history.push('/contact')
    }

  return (
    <div>
      <h1>AboutPage</h1>
      <div onClick={handleGoToHomePage} >GO to Home Page</div>
      <button onClick={handleGoToContactPage} >GO to Contact Page</button>
    </div>
  );
}
