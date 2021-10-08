import React, { useState } from 'react';

export default function Item({ keyDownHandler, value, setValue }) {
  function updateValue(e) {
    if (e.keyCode === 13) {
      keyDownHandler && keyDownHandler(value);
      setValue('');
    }
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onKeyDown={(e) => {
          updateValue(e);
        }}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
