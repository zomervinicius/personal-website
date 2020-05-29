import { Link } from 'gatsby';
import React from 'react';
import ThemeChanger from './themeChanger';

export default () => (
  <nav className="navigation">
    <Link to="/contact">Contact</Link>
    <ThemeChanger />
  </nav>
);
