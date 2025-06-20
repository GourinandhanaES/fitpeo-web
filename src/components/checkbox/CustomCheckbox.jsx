import React, { useState } from 'react';
import './CustomCheckbox.scss';

const CustomCheckbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span className="checkbox-style">{checked && '✕'}</span>
    </label>
  );
};

export default CustomCheckbox;
