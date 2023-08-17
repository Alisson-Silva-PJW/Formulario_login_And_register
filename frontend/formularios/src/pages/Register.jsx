//MODULO CSS DO FORMULÁRIO REGISTER
import styles from "../pages/Register.module.css";

//ICONES
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const Register = ({ currentPageLogin }) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.form_container}>
          <h2>Register</h2>
          <form action="">
            <div className={styles.input_box}>
              <span className={styles.icon}>
                <FiUser />
              </span>
              <input type="text" id="user" name="user" required />
              <label htmlFor="user">User</label>
            </div>

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

            <div className={styles.agree}>
              <label htmlFor="">
                <input type="checkbox" /> agree to the terms & conditions
              </label>
            </div>

            <button type="submit" className={styles.btn_register}>
              Register
            </button>

            <div className={styles.login}>
              <p>
                Already have an account?
                <a onClick={currentPageLogin} href="#">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
