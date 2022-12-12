import { useEffect } from 'react'
import initLoginBg from './init.js'
import styles from './login.module.scss'

const Login = () => {
  useEffect(() => {
    initLoginBg()
    window.onresize = () => {
      initLoginBg()
    }
  }, [])

  return (
    <div className={styles.login_container}>
      <canvas
        id='canvas'
        style={{
          display: 'block'
        }}
      />

      <div className={styles.login_box}>
        <div className={styles.login_box_title}>
          <h1>Miracle Blog System</h1>
          <p>Enjoy The Life</p>
        </div>
      </div>
    </div>
  )
}

export default Login