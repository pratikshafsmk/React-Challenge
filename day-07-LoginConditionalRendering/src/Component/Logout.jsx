const Logout = ({ username, setIsLoggedIn, setUserName }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-6">
        Hello {username}! 👋
      </h2>
      <button
        onClick={() => {
          setIsLoggedIn(false);
          setUserName("");
        }}
        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
      >
        Logout
      </button>
    </div>
  );
};
export default Logout;
