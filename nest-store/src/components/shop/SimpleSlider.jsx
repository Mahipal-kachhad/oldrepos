import { Carousel } from "react-responsive-carousel";

const SimpleSlider = (props) => {
  return (
    <Carousel>
      {props.data?.map((img, idx) => (
        <img src={img} alt="products" key={idx} />
      ))}
    </Carousel>
  );
};

export default SimpleSlider;
