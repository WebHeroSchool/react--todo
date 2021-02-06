import React from 'react';
import styles from './Item.module.css'
import classnames from 'classnames';

const Item = ({todoItems, isDone, onClickDone, id}) => (
  <div className={styles.wrapper}>
    <label className={styles.label}>
      <input type="checkbox" className={styles.checkbox} onClick={() => onClickDone(id)}/>
      <span className={
        classnames({
          [styles.fake]: true,
          [styles.fakeDone]: isDone
        })
      }></span>
      <div className={styles.text}>
        <span className={
          classnames({
            [styles.item]: true,
            [styles.done]: isDone
          })
        }>
          {todoItems}
        </span>
      </div>
    </label>
    <div className={styles.trash}></div>
</div>)

export default Item;
