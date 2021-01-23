import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import Input from '../InputItem/InputItem';

const App = () => {
  const todoItems = [
    {
        value: 'first'
    },
    {
        value: 'second'
    },
    {
        value: 'third'
    }
  ];
  return (<div>
    <h1>Важные дела</h1>
    <Input />
    <ItemList todoItems={todoItems}/>
    <Footer count={todoItems.length} />
  </div>);
}


export default App;
