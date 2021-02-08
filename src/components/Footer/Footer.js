import React from 'react'
import styles from './Footer.module.css'
import '../Fonts/Fonts.css'
import PropTypes from 'prop-types';

const Footer = ({ count }) => (<div className={styles.footer}>
  <span className={styles.left}>Осталось выполнить: {count}</span>
  <div className={styles.filter}>
    <div className={`${styles.all} ${styles.active} ${styles.filterItem}`}>ВСЕ</div>
    <div className={`${styles.inProgress} ${styles.filterItem}`}>АКТИВНЫЕ</div>
    <div className={`${styles.completed} ${styles.filterItem}`}>ВЫПОЛНЕННЫЕ</div>
  </div>
  <div className={styles.delete}>УДАЛИТЬ<br/>ВЫПОЛНЕННЫЕ</div>
</div>);

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Footer;
