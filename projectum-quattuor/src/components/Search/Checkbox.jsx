import React from 'react';

const Checkbox = (props) => {
  const { label } = props;

  return (
    <label htmlFor={props.key} className="check_label">
      {label}
      <input
        onClick={toggleClass}
        type="checkbox"
        id={props.key}
        checked={props.isChecked}
        onChange={props.handleCheck}
        value={`${label.toLowerCase()}/?search=`}
      />
    </label>
  );
};
export default Checkbox;
