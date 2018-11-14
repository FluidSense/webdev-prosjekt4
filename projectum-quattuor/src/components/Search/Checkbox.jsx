import React from 'react';

const Checkbox = (props) => {
  const {
    label, subKey, checked, handleCheck,
  } = props;
  const sub1 = `${subKey}1`;

  return (
    <label htmlFor={sub1} className={checked ? 'checked_label' : 'check_label'}>
      {label}
      <input
        type="checkbox"
        id={sub1}
        onChange={handleCheck}
        value={`${label.toLowerCase()}/?search=`}
      />
    </label>
  );
};
export default Checkbox;
