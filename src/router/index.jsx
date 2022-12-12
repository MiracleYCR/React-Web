import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'

import Home from '@/views/home'

const Video = lazy(() => import('@/views/video'))
const Game = lazy(() => import('@/views/game'))

const withLoadingComp = (comp) => (
  <React.Suspense fallback={<div>Loading...</div>}>
    { comp }
  </React.Suspense>
)

const routes = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/video',
        element: withLoadingComp(<Video />)
      },
      {
        path: '/game',
        element: withLoadingComp(<Game />)
      }
    ]
  }
]

export default routes