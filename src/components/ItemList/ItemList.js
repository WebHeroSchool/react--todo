import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css'
// скорее всего, убрать передачу isDone
const ItemList = ({todoItems, onClickDone}) => (<div className={styles.list}>
  {todoItems.map(item =>
    <div key={item.value} className={styles.item}>
      <label className={styles.label}>
        <input type="checkbox" className={styles.checkbox} onClick={() => onClickDone(item.isDone)}/>
        <span className={styles.fake}></span>
        <div className={styles.text}><Item todoItems={item.value} isDone={item.isDone} /></div>
      </label>
      <div className={styles.trash}></div>
    </div>)}
</div>);

export default ItemList;
