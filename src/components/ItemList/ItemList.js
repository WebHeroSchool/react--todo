import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css'
import PropTypes from 'prop-types';

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

ItemList.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default ItemList;
