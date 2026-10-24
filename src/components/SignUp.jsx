import styles from './SignUp.module.css'
import blossomFlower from '../assets/blossom-flower.svg'

function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>

      <div className={styles.right}>
        <img src={blossomFlower} alt="Blossom flower" className={styles.image} />
      </div>
    </div>
  )
}

export default SignUp
