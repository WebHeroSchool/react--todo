import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css'

const ItemList = ({todoItems, onClickDone}) => (<div className={styles.list}>
  {todoItems.map(item =>
    <div key={item.value} className={styles.item}>
      <Item
        todoItems={item.value}
        isDone={item.isDone}
        onClickDone={onClickDone}
        id={item.id}
      />
    </div>)}
</div>);

export default ItemList;
