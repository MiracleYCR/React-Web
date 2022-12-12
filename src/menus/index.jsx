import {
  RocketOutlined,
  YoutubeOutlined
} from '@ant-design/icons';

function menuItem (label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export default () => {
  return [
    menuItem('VIDEO', '/video', <YoutubeOutlined />),
    menuItem('GAME', '/game', <RocketOutlined />),
  ]
}