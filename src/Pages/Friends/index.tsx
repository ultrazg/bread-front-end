import React from 'react';
import {Link, Outlet,} from 'react-router-dom';

function Index() {
  return (
    <div>
      <h3>通讯录</h3>
      <ul>
        <li>
          <Link to='male'>男</Link>
        </li>
        <li>
          <Link to='female'>女</Link>
        </li>
      </ul>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Index;
