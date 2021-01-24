import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import Input from '../InputItem/InputItem';
import styles from './App.module.css';
import '../Fonts/Fonts.css'

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
  return (<div className={styles.main}>
    <h1 className={styles.title}>Важные дела</h1>
    <Input />
    <ItemList todoItems={todoItems} />
    <Footer count={todoItems.length} />
  </div>);
}


export default App;
