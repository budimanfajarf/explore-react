import React from 'react';

const SearchInput = React.forwardRef(({
  placeholder = 'Search...',
  ...props
}, ref) => (
  <input
    type="text"
    ref={ref}
    placeholder={placeholder}
    {...props}
  />
));

export default SearchInput;