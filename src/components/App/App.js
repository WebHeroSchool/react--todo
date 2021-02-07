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
      },
      {
          value: 'forth',
          isDone: false,
          id: 4
      },
      {
          value: '5th',
          isDone: false,
          id: 5
      },
      {
          value: '6th',
          isDone: false,
          id: 6
      },
      {
          value: '7th',
          isDone: false,
          id: 7
      },
      {
          value: '8th',
          isDone: false,
          id: 8
      },
      {
          value: '9th',
          isDone: false,
          id: 9
      },
      {
          value: '10th',
          isDone: false,
          id: 10
      }
    ],
    count: 10
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item};

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    this.setState({items: newItemList});
  };

  onClickDelete = id => {
    const newItemList = this.state.items.filter(item => item.id !== id);

    this.setState({items: newItemList});
  }

  onClickAdd = value => this.setState(state => ({
    items: [
      ...state.items,
      {
        value: value,
        isDone: false,
        id: state.count + 1
      }
    ],
    count: state.count + 1
  }));

  render() {
    return (
      <div>
        <h1>
          <p className={styles.subtitle}>TODO</p>
          <p className={styles.subtitle}>LIST</p>
        </h1>
        <main className={styles.main}>
          <Input onClickAdd={this.onClickAdd}/>
          <ItemList
            todoItems={this.state.items}
            onClickDone={this.onClickDone}
            onClickDelete={this.onClickDelete}
          />
          <hr className={styles.line}/>
          <Footer count={this.state.items.filter(item => !item.isDone).length} />
        </main>
    </div>);
  }
};

export default App;
