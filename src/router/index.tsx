import React, {Suspense} from 'react';
import {RouteObject} from "react-router-dom";

const IndexPage = React.lazy(() => import('../Pages/Index'));
const FriendsPage = React.lazy(() => import('../Pages/Friends'));
const NotFound = React.lazy(() => import('../Pages/404'));
const Male = React.lazy(() => import('../Pages/Male/Index'));
const Female = React.lazy(() => import('../Pages/Female/Index'));

export const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <Suspense fallback={<p>loading...</p>}><IndexPage/></Suspense>
  },
  {
    path: '/friends',
    element: <Suspense fallback={<p>loading...</p>}><FriendsPage/></Suspense>,
    children: [
      {
        path: '/friends/male',
        element: <Suspense fallback={<p>loading...</p>}><Male/></Suspense>
      },
      {
        path: '/friends/female',
        element: <Suspense fallback={<p>loading...</p>}><Female/></Suspense>
      },
      {
        path: '/friends/*',
        element: <Suspense fallback={<p>loading...</p>}><NotFound/></Suspense>
      }
    ]
  },
  {
    path: '*',
    element: <Suspense fallback={<p>loading...</p>}><NotFound/></Suspense>
  }
]
