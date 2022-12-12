import { Layout } from 'antd';

const FooterComp = () => {
  const { Footer } = Layout

  return (
    <Footer
      style={{
        padding: 0,
        lineHeight: '48px',
        textAlign: 'center',
      }}
    >
      Miracle / Copyright © 2022 / 备案号: 粤ICP备2022006448号-1
    </Footer>
  )
}

export default FooterComp