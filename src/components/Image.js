const Image = ({
  url,
  alt,
  ...props
}) => {
  if (url) {
    return (
      <img src={url} alt={alt} {...props} />
    );
  }

  return (
    <span title="No image availabele" dangerouslySetInnerHTML={{__html: '&mdash;'}} />
  );
};

export default Image;