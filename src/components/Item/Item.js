import React from 'react';
import styles from './Item.module.css'
import classnames from 'classnames';

const Item = ({todoItems, isDone}) => (<span className={
  classnames({
    [styles.item]: true,
    [styles.done]: isDone
  })
}>{todoItems}</span>);

export default Item;
