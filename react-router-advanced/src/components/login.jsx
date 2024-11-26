const Login = () => {
  const handleLogin = () => {
    localStorage.setItem("authToken", "your-token");
    window.location.href = "/Profile"; 
  };

  return <button onClick={handleLogin}>Login</button>;
};
export default Login;