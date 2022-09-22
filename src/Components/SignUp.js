import "./SignUp.css";
import formImage from "../Assets/Images/formImage.png";

function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="signup-header">
          <h2>Sign up to listen to your favourite Podcast</h2>
        </div>
        <div className="signup-form-body">
          <form className="form-signup">
            <p>
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Ariana Grandez"
                required
              />
            </p>
            <p>
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="arianagrandez@gmail.com"
                required
              />
            </p>
            <p className="password">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="***********"
                required
              />
            </p>
            <div className="form-btn">
              <button type="submit" name="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="other-options">
          <div className="underline">
            <hr />
            <span>or</span>
          </div>
          <div className="google">
            <a href="https://www.google.com">Sign up with Google</a>
          </div>
          <div className="sign-in">
            <p>
              Already have an account?{" "}
              <span>
                <a href="#">Sign in</a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="form-image-container">
        <img src={formImage} alt="form-image" className="form-image" />
      </div>
    </div>
  );
}

export default SignUp;
