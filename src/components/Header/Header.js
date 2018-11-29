import React from 'react';
import { Link } from 'react-router-dom';

const header = () => (
  <ul>
    <li>
      <Link to=''>Главная</Link>
    </li>
      <li>
          <Link to='/chats'>Список чатов</Link>
      </li>
    <li>
      <Link to='/about'>О компании</Link>
    </li>
    <li>
      <Link to='/login'>Войти</Link>
    </li>
  </ul>
);

export default header;
