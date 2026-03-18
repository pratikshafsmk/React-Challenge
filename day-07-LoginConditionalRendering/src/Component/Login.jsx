import { useRef } from "react";

const Login = ({ userPwd, username, setUserName, setUserPwd, handleLogin }) => {
  const passwordRef = useRef(null);
  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Please Login to continue
      </h2>

      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="userName"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Username
          </label>
          <input
            id="userName"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                passwordRef.current?.focus();
              }
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition duration-200"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="pwd"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Password
          </label>
          <input
            id="pwd"
            type="password"
            placeholder="Enter your password"
            value={userPwd}
            onChange={(e) => setUserPwd(e.target.value)}
            ref={passwordRef}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                // if (!username || !userPwd) return;
                handleLogin();
              }
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition duration-200"
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={!username || !userPwd}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Login
        </button>
      </div>
    </div>
  );
};
export default Login;
