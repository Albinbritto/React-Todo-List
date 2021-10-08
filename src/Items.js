import React, { useState, useEffect } from 'react';
import Item from './Item';

export default function Items({ items, deleteItem, updateItem }) {
  const [selectedItem, setSelectedItem] = useState({
    idx: null,
    value: '',
  });

  useEffect(() => {
    setSelectedItem({
      idx: null,
      value: '',
    });
  }, [items]);

  function deleteFromList(idx) {
    deleteItem && deleteItem(idx);
  }

  function keyDownHandler(value) {
    console.log('keyDownHandler', value);
    updateItem(selectedItem.idx, value);
  }

  function setValue(value) {
    setSelectedItem({ ...selectedItem, value });
  }

  console.log(selectedItem);

  function renderedItems() {
    return items.map((item, idx) => {
      return (
        <li key={idx}>
          {idx === selectedItem.idx ? (
            <Item
              keyDownHandler={keyDownHandler}
              value={selectedItem.value}
              setValue={setValue}
            />
          ) : (
            item
          )}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon-default"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setSelectedItem({ idx: idx, value: item })}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon-default"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => {
                deleteFromList(idx);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </li>
      );
    });
  }

  return <ul>{renderedItems()}</ul>;
}
