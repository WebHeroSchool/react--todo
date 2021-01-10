import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import Input from '../InputItem/InputItem';

const todoItem = ['first', 'second', 'third'];
const App = () => (<div>
  <h1>Важные дела</h1>
  <Input />
  <ItemList todoItem={todoItem}/>
  <Footer count={3} />
</div>);

export default App;
