import React from 'react';

const Checkbox = (props) => {
  const { label, subKey } = props;
  const sub1 = `${subKey}1`;

  return (
    <label htmlFor={sub1} className="check_label">
      {label}
      <input
        type="checkbox"
        id={sub1}
        checked={props.isChecked}
        onChange={props.handleCheck}
        value={`${label.toLowerCase()}/?search=`}
      />
    </label>
  );
};
export default Checkbox;
