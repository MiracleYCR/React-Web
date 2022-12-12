import { Menu } from 'antd';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'

import menuList from './config'


function setMenuItemStatus () {
  let firstOpenKey = ''
  const currentRoute = useLocation()
  const findOpenKey = (obj) => obj.key === currentRoute.pathname

  for(let i = 0; i < menuList.length; i++) {
    if (
      menuList[i].children &&
      menuList[i].children.length > 0 &&
      menuList[i].children.find(findOpenKey)
    ) {
      firstOpenKey = menuList[i].key
      break
    }
  }

  const [openKeys, setOpenKeys] = useState([firstOpenKey]);
  
  return {
    openKeys,
    setOpenKeys,
    currentRoute
  }
}

const MenuComp = () => {
  const navigateTo = useNavigate()
  const { openKeys, setOpenKeys, currentRoute } = setMenuItemStatus()

  const menuClick = (e) => { navigateTo(e.key) }
  const handleOpenChange = (keys) => { setOpenKeys([keys[keys.length - 1]]) }

  return (
    <Menu
      theme="dark"
      mode="inline"
      items={menuList}
      openKeys={openKeys}
      defaultSelectedKeys={currentRoute.pathname}
      onClick={menuClick}
      onOpenChange={handleOpenChange}
    ></Menu>
  )
}

export default MenuComp