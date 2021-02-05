import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import Input from '../InputItem/InputItem';
import styles from './App.module.css';
import '../Fonts/Fonts.css'

class App extends React.Component {
  state = {
    items: [
      {
          value: 'first',
          isDone: false
      },
      {
          value: 'second',
          isDone: false
      },
      {
          value: 'third',
          isDone: true
      },
      {
          value: 'forth',
          isDone: true
      },
      {
          value: '5th',
          isDone: true
      },
      {
          value: '6th',
          isDone: true
      },
      {
          value: '7th',
          isDone: true
      },
      {
          value: '8th',
          isDone: true
      },
      {
          value: '9th',
          isDone: true
      },
      {
          value: '10th',
          isDone: true
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>
          <p className={styles.subtitle}>TODO</p>
          <p className={styles.subtitle}>LIST</p>
        </h1>
        <main className={styles.main}>
          <Input />
          <ItemList todoItems={this.state.items} />
          <hr className={styles.line}/>
          <Footer count={this.state.items.length} />
        </main>
    </div>);
  }
};

export default App;
