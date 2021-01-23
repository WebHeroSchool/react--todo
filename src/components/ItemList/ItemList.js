import React from 'react';
import Item from '../Item/Item';

const ItemList = ({todoItems}) => (<ul>
  {todoItems.map(item => <li key={item.value}><Item todoItems={item.value} /></li>)}
</ul>);

export default ItemList;
