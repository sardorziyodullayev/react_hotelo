import "./About.css";
import About_img from "./about.png"
import Avatar from "./avatar.svg"

function About() {
	return (
		<>
			<section>
				<div className="container">
					<div className="about__box">
						<img className="about__img" src={About_img} alt="" width="600" height="400"/>
						<div className="about__avatar">
							<img className="avatar__img" src={Avatar} alt="" width="62" height="64"/>
							<p className="avatar__name">Nazmul Nabeel</p>
							<p className="avatar__text">
								“Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.Lorem Ipsum has been the industry's standard dummy text ever
								since the ”
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
