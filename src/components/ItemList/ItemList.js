import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css'

const ItemList = ({todoItems, onClickDone, onClickDelete}) => (<div className={styles.list}>
  {todoItems.map(item =>
    <div key={item.id} className={styles.item}>
      <Item
        todoItems={item.value}
        isDone={item.isDone}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
        id={item.id}
      />
    </div>)}
</div>);

export default ItemList;
