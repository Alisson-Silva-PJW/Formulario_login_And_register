//MODULO CSS DO FORMULÁRIO LOGIN
import styles from "../pages/Login.module.css";

//ICONE
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";

const Login = ({ currentPageRegister }) => {
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <h2>Login</h2>
        <form action="">
          <div className={styles.input_box}>
            <span className={styles.icon}>
              <FiMail />
            </span>
            <input type="email" id="email" name="email" required />
            <label htmlFor="email">Email</label>
          </div>

          <div className={styles.input_box}>
            <span className={styles.icon}>
              <FiLock />
            </span>
            <input type="password" id="password" name="password" required />
            <label htmlFor="password">Password</label>
          </div>

          <div className={styles.remenber}>
            <label htmlFor="">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" className={styles.btn_login}>
            Login
          </button>
          <div className={styles.register}>
            <p>
              Don't have an account?
              <a onClick={currentPageRegister} href="#">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
