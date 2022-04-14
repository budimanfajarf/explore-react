const Alert = ({
  type,
  message,
  ...props
}) => {
  let className = 'alert';
  type && (className += ` alert--${type}`);

  return (
    <p className={className} {...props}>
      {message}
    </p>
  );
};

export default Alert;