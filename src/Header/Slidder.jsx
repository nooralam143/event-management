import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
const Slidder = () => {

    return (
        <div className="container mx-auto">
    <AwesomeSlider>
      <div><img src="https://i.ibb.co/dQyTYHP/slider-mainbg-001.jpg" alt=""></img></div>
      <div><img src="https://i.ibb.co/mtF17Wj/slider-mainbg-010.jpg" alt=""></img></div>
    </AwesomeSlider>
        </div>
    );
};

export default Slidder;