import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    const auth=localStorage.getItem('user')
    if(auth){
      navigate('/')
    }
  }, [navigate])

  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:5002 /user/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: { 
        "Content-Type": "application/json"
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));

    
      navigate("/");
  
  };

  return (
    <div className="formcontainer">
      <div className="formwrapper">
        <span className="title">Register</span>
        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
          ></input>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <button onClick={collectData}>SignUp</button>
        </form>
        <p>you do not have an account?Login</p>
      </div>
    </div>
  );
};

export default SignUp;
