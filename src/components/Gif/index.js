
const ImageComponent = (props) => {
  return (
    <div>
      <img src={props.url} alt={props.title}></img>
      <p>{props.titleText}</p>
    </div>
  );
};

export { ImageComponent };
