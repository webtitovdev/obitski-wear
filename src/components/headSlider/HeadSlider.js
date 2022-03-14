import { useGetDataQuery } from "../../api/api";
import ImageGallery from "react-image-gallery";
import Spinner from "../components/spinner/Spinner";

const HeadSlider = () => {
  const { data = [], isLoading } = useGetDataQuery("headSliderImages");
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="home">
      <div className="home_slider_container">
        <ImageGallery
          showNav={false}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          showBullets={true}
          autoPlay={true}
          slideDuration={600}
          slideInterval={8000}
          lazyLoad={true}
          items={data}
        />
      </div>
    </div>
  );
};

export default HeadSlider;
