import "../styles/LoginPage.css";
import Login from "../components/Login";

function LoginPage({setUser}) {
  return (
    <>
      <div className="main-container">
        <Login setUser={setUser} />
      </div>
    </>
  );
}

export default LoginPage;
