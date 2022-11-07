import "./Hotel_section.css";
import { FiSearch } from "react-icons/fi";
import { RiMapPinFill } from "react-icons/ri";
import { BsCalendar2EventFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";

function Hotel() {
	return (
		<>
			<section>
				<div className="container">
               <div className="hotel">
                 <div className="hotel__box">
                  <h2 className="hotel__title">Find Your Best Hotel for Deals</h2>
                  <p className="hotel__text">Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry.</p>
                 </div>
                 <div className="hotel__cal">
                   <div className="cal-box">
                     <BsCalendar2EventFill style={{position:"absolute", left:"23px", width:"24px", height: "24px", color:"#999"}}/>
                     <div className="hotel__data">Jun 10 - 14</div>
                     <BsPersonFill style={{position:"absolute", right:"140px", width:"24px", height: "24px", color:"#999"}}/>
                     <div className="hotel__guest">2 Guests</div>
                   </div>
                   <div className="input__box">
                   <RiMapPinFill style={{position:"absolute", left:"20px", width:"24px", height: "24px", color:"#999"}}/>
                    <input type='search' className="hotel__input"  placeholder="United States"></input>
                    <FiSearch style={{position:"absolute", right:"0", color: "white", padding: '18', background: "#3771c8", borderRadius:"8px"}}/>
                  </div>
                 </div>
               </div>
            </div>
			</section>
		</>
	);
}

export default Hotel;
