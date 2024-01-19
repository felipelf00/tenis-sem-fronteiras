// import pic10 from "../pictures/10.jpg";
import ImageSlider from "./ImageSlider";
import images from "../imageList.ts";

const Home = () => {
  return (
    <main className="w-full">
      <div className="flex">
        <div className="w-1/2">test</div>
        <img
          src="/pictures/17.jpg"
          alt={"Crianças em quadra"}
          className="w-1/2 block m-auto"
        />
      </div>
      <ImageSlider images={images} />
    </main>
  );
};

export default Home;
