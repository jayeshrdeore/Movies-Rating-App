import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "Jayesh" && password === "Jay@002") {
      navigate("/mainmenu");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="loginform">
      <div>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="userinput"
          size="30"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="userinput"
          size="30"
        />
      </div>
      <button className="loginbtn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Home;
