import React from 'react'
import styles from './Footer.module.css'
import '../Fonts.css'

const Footer = ({ count }) => (<div>
  <span className={styles.main}>Осталось выполнить: {count}</span>
</div>);

export default Footer;
