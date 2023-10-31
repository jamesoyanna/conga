import CloseIcon from "../../assets/svgs/close.svg";
import { inputFields } from "./InputData";
import Google from "../../assets/images/google.png";
import Apple from "../../assets/images/apple.png";
import "./styles.css";

const Login = () => {
  return (
    <section className="login">
      <div className="login__container">
        <div className="login__content">
          <h5 className="login__title">Login</h5>

          <a className="login__link" href="/">
            <img src={CloseIcon} className="login__close-icon" />
            <span className="login__close-title">Close</span>
          </a>
        </div>

        <div className="login__form-container">
          <form className="login__form-content">
            {inputFields.map((field, index) => (
              <div className="login__input-container" key={index}>
                <label htmlFor="username">
                  {field.label}

                  {field.name === "password" && (
                    <a
                      className="login__forget-password"
                      href="/account/forgot-password"
                    >
                      Forgot Password?
                    </a>
                  )}
                </label>

                <input
                  type="text"
                  autoComplete="true"
                  className="login__input-field"
                  id="username"
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                />

                {field.name === "password" && (
                  <a
                    className="login__show-password"
                    href="/account/login?showPassword=true"
                    type="button"
                  >
                    Show
                  </a>
                )}

                <div className="error-title">{}</div>
              </div>
            ))}

            <button className="login__button-container">Login</button>
          </form>
          <div className="login__alternative">
            <span className="login__alternative-content">OR</span>
          </div>

          <div className="login__auth-container">
            <a href="" className="login__auth-content" type="button">
              <img src={Google} className="login__auth-image" alt="" />
              <>Login wih Google</>
            </a>
            <a href="" className="login__auth-content" type="button">
              <img src={Apple} className="login__auth-image" alt="" />
              <>Login wih Apple</>
            </a>
          </div>
        </div>

        <div className="login__toggle-container">
          <a href="/account/signup" className="login__toggle">
            Don’t have an account? Sign Up
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
