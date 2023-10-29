import { useState } from "react";
import "./circle.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Circle = () => {
  const navigate=useNavigate()
  const [angle, setAngle] = useState(null);
  const calculateAngle = (event) => {
    const button = event.target;
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const radians = Math.atan2(mouseY - centerY, mouseX - centerX);
    const degrees = (radians * 180) / Math.PI;

    setAngle(degrees);
  };

  const resetAngle = () => {
    setAngle(0);
  };
  console.log(angle);

  useEffect(()=>{

  },[angle])
  return (
    <>
      <div className="row m-0 mb-3 p-0">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="containerx container bg-white  overFlow">
            <div className="circle py-3">
              <div className="circle-main">
                <div className="inner-circle" >
                  <ul className="sc-fsYfxw fAFqhE" onMouseMove={calculateAngle}
                  onMouseLeave={resetAngle}>
                    <li className=" circle-item  circle-image-box12">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" ><img src="images/2.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-item  circle-image-box1">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" ><img src="images/3.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-item  circle-image-box2">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" onClick={()=>navigate("/client-login")}><img src="images/7.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-item  circle-image-box3">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" ><img src="images/6.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-item  circle-image-box4">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" ><img src="images/5.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-item  circle-image-box5">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" ><img src="images/10.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-item  circle-image-box6">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" ><img src="images/8.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-img2  circle-image-box7">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" ><img src="images/11.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-item  circle-image-box8">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" ><img src="images/9.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-item  circle-image-box9">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" ><img src="images/10.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-image-box10">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" ><img src="images/11.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-image-box11">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" ><img src="images/4.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                  </ul>

                  <div className="inner-circle2">

                    <div className="circle-image">
                      <img src="images/circle.png" className="circle-inner-img" />
                      <img src="images/star.png" className="circle-star" />
                      <img src="images/arrow.png" className="circle-arrow" style={{transform:`rotate(${angle}deg)`}}/>

                    </div>
                  </div>
                </div>

                <div className="">
                  <ul className="sc-fsYfxw fAFqhE">
                    <li className=" circle-item-text circle-item1 ">
                      <div className="inner-circle-item">
                        <p className="w-100">Advanced Technology and Robotic Cleaning</p>

                      </div>
                    </li>
                    <li className=" circle-item-text circle-item2">
                      <div className="inner-circle-item">
                        <span>Janitorial Service</span>
                      </div>
                    </li>
                    <li className=" circle-item-text circle-item3 ">
                      <div className="inner-circle-item">
                        <span>Membership</span>

                      </div>
                    </li>
                    <li className=" circle-item-text circle-item4 ">
                      <div className="inner-circle-item">
                        <span onClick={()=>navigate("/client-login")}>Login</span>
                      </div>
                    </li>
                    <li className=" circle-item-text circle-item5 ">
                      <div className="inner-circle-item">
                        <span>Complaint</span>
                      </div>
                    </li>
                    <li className=" circle-item-text circle-item6 ">
                      <div className="inner-circle-item">
                        <span>Careers and Employment</span>
                      </div>
                    </li>
                    <li className=" circle-item-text circle-item7">
                      <div className="inner-circle-item">
                        <span>My Florida Hurricane Watch</span>
                      </div>
                    </li>
                    <li className=" circle-item-text circle-item8  ">
                      <div className="inner-circle-item">
                        <span>Price Calculator</span>

                      </div>
                    </li>
                    <li className=" circle-item-text circle-item9 ">
                      <div className="inner-circle-item">
                        <span>Art and Gallery</span>
                      </div>
                    </li>
                    <li className=" circle-item-text circle-item10  ">
                      <div className="inner-circle-item">
                        <span>Advertisement</span>
                      </div>
                    </li>
                    <li className=" circle-item-text circle-circle-image-box10">
                      <div className="inner-circle-item">
                        <span>Maid X Pro</span>
                      </div>
                    </li>
                    <li className=" circle-item-text circle-circle-image-box11">
                      <div className="inner-circle-item">
                        <span>Handyman</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Circle;
