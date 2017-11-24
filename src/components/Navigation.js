import React from 'react';
import Link from './Link';

export default ({ name }) => ({ location }) =>
  <div>
    <p>Hey, {name}!</p>
    <ul>
      <li>
        <Link to="/" className={`${location.pathname === '/' ? 'link__current' : ''}`}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/forms" className={`${location.pathname === '/forms' ? 'link__current' : ''}`}>
          Forms
        </Link>
      </li>
      <li>
        <Link to="/maps" className={`${location.pathname === '/maps' ? 'link__current' : ''}`}>
          Maps
        </Link>
      </li>
      <li>
        <Link to="/404">
          404
        </Link>
      </li>
    </ul>
    <hr />
  </div>;

