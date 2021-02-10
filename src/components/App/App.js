import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import Input from '../InputItem/InputItem';
import styles from './App.module.css';
import '../Fonts/Fonts.css'

const App = () => {
  const initialState = {
    items: [
      {
          value: 'first',
          isDone: false,
          id: 1
      },
      {
          value: 'second',
          isDone: false,
          id: 2
      },
      {
          value: 'third',
          isDone: false,
          id: 3
      }
    ],
    count: 3
  };
  const [items, setTodoItem] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);

  useEffect( () => {
    console.log("update");
  });

  useEffect( () => {
      console.log('mount');
    }, []);

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item};

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    setTodoItem(newItemList);
  };

  const onClickDelete = id => {
    const newItemList = items.filter(item => item.id !== id);

    setTodoItem(newItemList);
    setCount((count) => count-1)
  }

  const onClickAdd = (value) => {
    const newItem = [
      ...items,
      {
        value: value,
        isDone: false,
        id: count + 1
      }
    ];
    setTodoItem(newItem);
    setCount((count) => count+1)
  }


  return (
    <div>
      <h1>
        <p className={styles.subtitle}>TODO</p>
        <p className={styles.subtitle}>LIST</p>
      </h1>
      <main className={styles.main}>
        <Input onClickAdd={onClickAdd}/>
        <ItemList
          todoItems={items}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
        />
        <hr className={styles.line}/>
        <Footer count={items.filter(item => !item.isDone).length} />
      </main>
  </div>);
};

export default App;
