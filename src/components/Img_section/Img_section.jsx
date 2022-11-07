import "./Img_section.css";
import Home from "./Home.png";
import Pool from "./bassen.png";
import Bedroom from "./bedroom.png";

function Img() {
	return (
		<>
			<section>
				<div className="container">
					<div className="img__box">
						<img className="home_img" src={Home} alt="Home image" width="850" height="590"/>
                  <h3 className="img__title">Wagstaffe NSW, Australia</h3>
                  <div>
                     <img className="pool_img" src={Pool} alt="" width="308" height="287"/>
                     <img src={Bedroom} alt="" width="308" height="287"/>
                  </div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Img;
