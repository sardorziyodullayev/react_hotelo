import "./Facilities.css"
import Icon_1 from "./icon_1.svg"
import Icon_2 from "./icon_2.svg"
import Icon_3 from "./icon_3.svg"
import Icon_4 from "./icon_4.svg"

function Facilities(){
   return(
      <>
         <section>
            <div className="container">
               <div className="faci__box">
                  <div className="faci__heading">
                    <h3 className="faci__title">Facilities & Service</h3>
                    <p className="faci__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                  </div>
                  <div className="faci__view">
                    <a className="faci__link">View All</a>
                    <span className="fice__line"></span>
                  </div>
               </div>

               <div>
                  <ul className="faci__list">
                     <li className="faci__item">
                        <a className="faci_item-link">
                           <img className="faci__item-img" src={Icon_1} alt="" width="68" height="68"/>
                           <h4 className="faci__item-title">Private Workspace</h4>
                           <p className="faci__item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        </a>
                     </li>
                     <li className="faci__item">
                        <a className="faci_item-link">
                           <img className="faci__item-img" src={Icon_2} alt="" width="68" height="68"/>
                           <h4 className="faci__item-title">Parking Area</h4>
                           <p className="faci__item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        </a>
                     </li>
                     <li className="faci__item">
                        <a className="faci_item-link">
                           <img className="faci__item-img" src={Icon_3} alt="" width="68" height="68"/>
                           <h4 className="faci__item-title">Free Wifi</h4>
                           <p className="faci__item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        </a>
                     </li>
                     <li className="faci__item">
                        <a className="faci_item-link">
                           <img className="faci__item-img" src={Icon_4} alt="" width="68" height="68"/>
                           <h4 className="faci__item-title">Breakfast</h4>
                           <p className="faci__item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </section>
      </>
   )
}

export default Facilities