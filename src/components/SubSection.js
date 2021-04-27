const SubSection = ({
  hour,
  image,
  title,
  type,
  duration,
  direct,
  isUnseen,
}) => {
  return (
    <>
      <div className="sub-section">
        <p>{hour}</p>
        <img src={image} alt="/" />
        <div>
          <h3>{title}</h3>
          <h4>{type}</h4>
          <span>{duration}</span>
          <span className="red">{direct && " • Direct"}</span>
          <span className="red"> {isUnseen && " • Inédit"}</span>
        </div>
      </div>
      <hr />
    </>
  );
};
export default SubSection;
