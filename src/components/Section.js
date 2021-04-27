/* Import Components */
import SubSection from "./SubSection";

/* Import .json */
import data from "../data.json";
console.log("data", data);

const Section = () => {
  return (
    <div className="wrapper">
      {data.map((elem, index) => {
        return (
          <SubSection
            key={index}
            hour={elem.time}
            image={elem.image}
            title={elem.title}
            type={elem.type}
            duration={elem.duration}
            direct={elem.direct}
            isUnseen={elem.isUnseen}
          />
        );
      })}
    </div>
  );
};
export default Section;
