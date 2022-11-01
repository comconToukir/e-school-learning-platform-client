import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';

const Slider = () => {
  return (
    <AwesomeSlider
      animation="scaleOutAnimation"
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={5000}
      className="h-96"
    >
      <div data-src="https://static.vecteezy.com/system/resources/previews/004/745/785/large_2x/isometric-landing-page-template-concept-of-online-education-for-banner-and-website-in-memphis-style-background-online-training-courses-university-studies-e-learning-research-illustration-free-vector.jpg" />
      <div data-src="https://static.vecteezy.com/system/resources/previews/004/757/706/large_2x/isometric-landing-page-template-concept-of-online-education-for-banner-and-website-in-memphis-style-background-online-training-courses-university-studies-e-learning-research-illustration-free-vector.jpg" />
      <div data-src="https://static.vecteezy.com/system/resources/previews/004/745/784/non_2x/isometric-landing-page-template-concept-of-online-education-for-banner-and-website-in-memphis-style-background-online-training-courses-university-studies-e-learning-research-illustration-free-vector.jpg" />
    </AwesomeSlider>
  );
};

export default Slider;
