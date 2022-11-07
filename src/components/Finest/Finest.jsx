import "./Finest.css";
import Finest_img from "./Rectangle.png";
import Hotels_logo from "./HotelsLogo.svg";
import Hyatt_logo from "./Hyatt-Logo.svg";
import Park_logo from "./Park_Hotel.svg";
import Hilton_logo from "./Hilton.svg";

function Finest() {
	return (
		<>
			<section>
				<div className="container">
					<div className="finest__content">
						<img className="finest__img" src={Finest_img} alt="" width="580" />
						<div className="finest__box">
							<h2 className="finest__title">Finest Luxury Hotels & Resort</h2>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy text <br />{" "}
								ever since the 1500s, when an unknown printer took a galley of type{" "}
								<br /> and scrambled it to make a type specimen book.
							</p>
							<ul className="finest__list">
								<li className="finest__item">
									<span>120K+</span>
									<p>Website User</p>
								</li>
								<li className="finest__item">
									<span>110K+</span>
									<p>Happy Clients</p>
								</li>
								<li className="finest__item">
									<span>20K+</span>
									<p>Active Hotels</p>
								</li>
								<li className="finest__item">
									<span>8Y+</span>
									<p>company Year</p>
								</li>
							</ul>
							<button className="finest__btn" type="submit">
								Explore More
							</button>
						</div>
					</div>
               <div className="firm__box">
                  <ul className="finest__firm">
                     <li className="firm__item">
                        <a className="firm__link">
                           <img className="firm__logo" src={Hotels_logo} alt="" width="150" height="100"/>
                        </a>
                     </li>
                     <li className="firm__item">
                        <a className="firm__link">
                           <img className="firm__logo" src={Hyatt_logo} alt="" width="150" height="100"/>
                        </a>
                     </li>
                     <li className="firm__item">
                        <a className="firm__link">
                           <img className="firm__logo" src={Park_logo} alt="" width="150" height="100"/>
                        </a>
                     </li>
                     <li className="firm__item">
                        <a className="firm__link">
                           <img className="firm__logo" src={Hilton_logo} alt="" width="150" height="100"/>
                        </a>
                     </li>
                  </ul>
               </div>
				</div>
			</section>
		</>
	);
}

export default Finest;
