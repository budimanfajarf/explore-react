import React from 'react';

const SelectOptions = React.forwardRef(({
  options=[],
  ...props
}, ref) => {
  options = options.map((opt) => (
    <option key={opt.value} value={opt.value}>
      {opt.label}
    </option>
  ));

  return (
    <select
      ref={ref}
      {...props}
    >
      {options}
    </select>
  );
});

export default SelectOptions;