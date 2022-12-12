import styles from './comp1.module.scss'
import { UpCircleOutlined } from '@ant-design/icons'

const Comp = () => {
  return (
    <div className={styles.box}>
      <p>Comp1</p>
      <UpCircleOutlined style={{fontSize: '40px'}} />
    </div>
  )
}

export default Comp