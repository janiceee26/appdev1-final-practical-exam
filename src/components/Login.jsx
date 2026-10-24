import styles from './Login.module.css'
import blossomFlower from '../assets/blossom-flower.svg'
import googleLogo from '../assets/icons-google-logo.svg'
import appleLogo from '../assets/icons-apple-logo.svg'

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.content}>
          <h1 className={styles.title}>Get Started Now</h1>

          <form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input type="text" id="name" placeholder="Enter your name" className={styles.input} />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email address</label>
              <input type="email" id="email" placeholder="Enter your email" className={styles.input} />
            </div>

            <div className={styles.field}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input type="password" id="password" placeholder="Name" className={styles.input} />
            </div>

            <div className={styles.checkbox}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to the <a href="#" className={styles.link}>terms & policy</a>
              </label>
            </div>

            <button type="submit" className={styles.button}>Signup</button>
          </form>

          <div className={styles.divider}>
            <span>Or</span>
          </div>

          <div className={styles.socials}>
            <button type="button" className={styles.socialButton}>
              <img src={googleLogo} alt="Google logo" />
              Sign in with Google
            </button>
            <button type="button" className={styles.socialButton}>
              <img src={appleLogo} alt="Apple logo" />
              Sign in with Apple
            </button>
          </div>

          <p className={styles.bottomText}>
            Have an account? <a href="#" className={styles.signIn}>Sign In</a>
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <img src={blossomFlower} alt="Blossom flower" className={styles.image} />
      </div>
    </div>
  )
}

export default Login
