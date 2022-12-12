import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'

import Login from '@/views/login'
import Home from '@/views/home'

const Video = lazy(() => import('@/views/video'))
const Game = lazy(() => import('@/views/game'))
const Food = lazy(() => import('@/views/food'))
const Travel = lazy(() => import('@/views/travel'))
const NotFound = lazy(() => import('@/views/404'))

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
      },
      {
        path: '/life/food',
        element: withLoadingComp(<Food />)
      },
      {
        path: '/life/travel',
        element: withLoadingComp(<Travel />)
      },
      {
        path: '/404',
        element: <NotFound/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  },
]

export default routes