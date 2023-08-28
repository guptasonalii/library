import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    const auth=localStorage.getItem('user')
    if(auth){
      navigate('/')
    }
  }, [navigate])


  const handleLogin = async () => {
    console.warn("email,password", email, password);
    
    try {
      let result = await fetch("http://localhost:5002/user/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (!result.ok) {
        throw new Error("Network response was not ok");
      }
  
      const jsonResult = await result.json();
      
      console.warn(jsonResult);
      
      if (jsonResult.name) {
        localStorage.setItem("user", JSON.stringify(jsonResult));
        navigate("/");
      } else {
        alert("Please enter valid details");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <div className="formcontainer">
      <div className="formwrapper">
        <form>
          <input
            type="text"
            placeholder="Enter Your Email"
            minLength={6}
            name="username"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="username__input"
            //   value={userName}
            //   onChange={(e) => setUserName(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input style={{ display: "none" }} type="file" id="file" />

          <button onClick={handleLogin}>Sign in </button>
        </form>

        <p>you don't have an account?Register</p>
      </div>
    </div>
  );
};

export default Login;
