import "./register.css";

function Register() {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Untrusted</h3>
          <span className="login-desc">
            Connect with friends and the world around you on Untrusted.
          </span>
        </div>
        <div className="login-right">
          <div className="login-box">
            <input placeholder="Username" className="login-input" />
            <input placeholder="Email" className="login-input" />
            <input placeholder="Password" className="login-input" />
            <input placeholder="Password Again" className="login-input" />
            <button className="login-btn">Sign Up</button>
            <span className="login-forgot">Forgot Password?</span>
            <button className="login-register-btn">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
