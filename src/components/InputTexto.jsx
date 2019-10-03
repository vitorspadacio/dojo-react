import React from 'react';

export default ({ name, value, onChange }) => (
  <label>
    <span>Nome:</span>
    <input
      type="text"
      name={name}
      value={value}
      onChange={e => onChange(e.target.name, e.target.value)}
    />
  </label>
);