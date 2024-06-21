import Image from "next/image";
import Slider1 from '../../public/slider1.jpg'
import Slider2 from '../../public/slider2.png'
import Slider3 from '../../public/slider3.jpg'
export default function Carousel() {
    return (
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <Image src={Slider1} className="d-block w-100" alt="..." width={1080} height={680} /> 
    </div>
    <div className="carousel-item">
    <Image src={Slider2} className="d-block w-100" alt="..." width={1080} height={680} /> 
    </div>
    <div className="carousel-item">
    <Image src={Slider3} className="d-block w-100" alt="..." width={1080} height={680} /> 
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


    );
}