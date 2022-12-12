import {
  RocketOutlined,
  YoutubeOutlined,
  SmileOutlined
} from '@ant-design/icons';

function menuItem (label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const menuList = [
  {
    label: 'VIDEO',
    key: '/video',
    icon: <YoutubeOutlined />,
  },
  {
    label: 'GAME',
    key: '/game',
    icon: <RocketOutlined />,
  },
  {
    label: 'LIFE',
    key: '/life',
    icon: <RocketOutlined />,
    children: [
      {
        label: 'FOOD',
        key: '/life/food'
      },
      {
        label: 'TRAVEL',
        key: '/life/travel'
      }
    ]
  },
]

export default menuList