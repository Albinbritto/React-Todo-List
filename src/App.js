import React, { useState } from 'react';
import './style.css';
import Item from './Item';
import Items from './Items';

export default function App() {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState('');
  function keyDownHandler(item) {
    setItems([...items, item]);
  }

  function deleteItem(index) {
    setItems(
      items.filter((_, idx) => {
        return idx !== index;
      })
    );
  }

  function updateItem(index, value) {
    console.log('index', index);
    console.log('value', value);
    items[index] = value;
    setItems([...items]);
  }

  return (
    <section>
      <Item keyDownHandler={keyDownHandler} value={value} setValue={setValue} />
      <Items items={items} deleteItem={deleteItem} updateItem={updateItem} />
    </section>
  );
}
