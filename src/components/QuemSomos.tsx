import images from "../imageList.ts";
import ImageSlider from "./ImageSlider";

const QuemSomos = () => {
  return (
    <div>
      <ImageSlider images={images} />
    </div>
  );
};

export default QuemSomos;
