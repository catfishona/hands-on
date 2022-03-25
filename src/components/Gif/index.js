const ImageComponent = (props) => {
  return (
    <div>
      <img src={props.url} alt="gif"></img>
      <p>{props.title}</p>
    </div>
  );
};

export { ImageComponent };
