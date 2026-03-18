import { useState } from "react";
import "./App.css";
import Header from "./Component/Welcome";
import Login from "./Component/Login";
import Logout from "./Component/Logout";

function App() {
  const [username, setUserName] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    if (username.trim() === "admin" && userPwd === "admin") {
      setIsLoggedIn(true);
      setUserName("Naveen");// 
      setUserPwd("");
    } el// se {
      alert("Invalid // credentials! Please t// ry again.");
    }
 //  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        <Header />
        {!isloggedIn ? (
          <Login
            userPwd={userPwd}
            username={username}
            setUserName={setUserName}
            setUserPwd={setUserPwd}
            handleLogin={handleLogin}
          />
        ) : (
          <Logout
            username={username}
            setIsLoggedIn={setIsLoggedIn}
            setUserName={setUserName}
          />
        )}
      </div>
    </div>
  );
}

export default App;
