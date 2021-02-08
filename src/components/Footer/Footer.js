import React from 'react'
import styles from './Footer.module.css'
import '../Fonts/Fonts.css'

const Footer = ({ count }) => (<div className={styles.footer}>
  <span className={styles.left}>Осталось выполнить: {count}</span>
  <div className={styles.filter}>
    <div className={`${styles.all} ${styles.active} ${styles.filterItem}`}>ВСЕ</div>
    <div className={`${styles.inProgress} ${styles.filterItem}`}>АКТИВНЫЕ</div>
    <div className={`${styles.completed} ${styles.filterItem}`}>ВЫПОЛНЕННЫЕ</div>
  </div>
  <div className={styles.delete}>УДАЛИТЬ<br/>ВЫПОЛНЕННЫЕ</div>
</div>);

Footer.defaultProps = {
    count: 0
};

export default Footer;
