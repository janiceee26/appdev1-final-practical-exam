import styles from './Login.module.css'
import blossomFlower from '../assets/blossom-flower.svg'
import googleLogo from '../assets/icons-google-logo.svg'
import appleLogo from '../assets/icons-apple-logo.svg'

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.content}>
          <h1 className={styles.title}>Welcome back!</h1>
          <p className={styles.subtitle}>Enter your Credentials to access your account</p>

          <form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email address</label>
              <input type="email" id="email" placeholder="Enter your email" className={styles.input} />
            </div>

            <div className={styles.field}>
              <div className={styles.labelRow}>
                <label htmlFor="password" className={styles.label}>Password</label>
                <a href="#" className={styles.forgot}>forgot password</a>
              </div>
              <input type="password" id="password" placeholder="Name" className={styles.input} />
            </div>

            <div className={styles.checkbox}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember for 30 days</label>
            </div>

            <button type="submit" className={styles.button}>Login</button>
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
