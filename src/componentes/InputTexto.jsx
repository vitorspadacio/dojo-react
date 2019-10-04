import React from 'react';

export default ({ titulo, name, value, onChange }) => (
  <label>
    <span>{titulo}: </span>
    <input
      type="text"
      name={name}
      value={value}
      onChange={e => onChange(e.target.name, e.target.value)}
    />
  </label>
);