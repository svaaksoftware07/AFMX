import "./home.css";
import Carousel from "../../components/Carousel/Carousel";
import Circle from "./Circle";
import { Link } from "react-router-dom";
import helpingHand from "../../assets/data/helpingHand.json";
import productData from "../../assets/data/Productdata.json";
import serviceData from "../../assets/data/serviceDepartmentData.json";
function Home() {
  const productData1 = productData.filter((item) => item.id < 8);
  const productData2 = productData.filter((item) => item.id > 7);
  const serviceData1 = serviceData.filter((item) => item.id < 17);
  const serviceData2 = serviceData.filter((item) => item.id > 16);
  return (
    <>
      <Carousel />
      <div className="main">
        <Circle />
        {/* service menu  */}
        <div className="services-memebership">
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-6">
                <div className="memebership-list">
                  <h2>AFMX MEMBERSHIP</h2>
                  <ul>
                    <li>
                      <Link to={"/new"} className="Links">
                        AFMX Pay as you go
                      </Link>
                    </li>
                    <li>
                      <Link to={"/new"} className="Links">
                        AFMX Levels
                      </Link>
                    </li>
                    <li>
                      <Link to={"/new"} className="Links">
                        AFMX Benefits
                      </Link>
                    </li>
                    <li>
                      <Link to={"/new"} className="Links">
                        AFMX Membership Rewads & Discount
                      </Link>
                    </li>
                    <li>
                      <Link to={"/new"} className="Links">
                        Recomence AFMX
                      </Link>
                    </li>
                    <li>
                      <Link to={"/new"} className="Links">
                        Installment Plan
                      </Link>
                    </li>
                    <li>
                      <Link to={"/new"} className="Links">
                        Common question about AFMX
                      </Link>
                    </li>
                    <li className="text-white">.</li>
                    <li className="text-white">.</li>
                  </ul>
                  <div className="load-more">
                    <Link to="/new">Show More</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="memebership-list">
                  <h2>ART &amp; GALLERY</h2>
                  <ul>
                    <li>
                      <Link to={"/new"} className="Links">
                        Previous Project
                      </Link>
                    </li>
                    <li>
                      <Link to={"/new"} className="Links">
                        Current Project
                      </Link>
                    </li>
                    <li>
                      <Link to={"/new"} className="Links">
                        Present Client
                      </Link>
                    </li>
                    <li>
                      <Link to={"/new"} className="Links">
                        Before & After
                      </Link>
                    </li>
                    <li>
                      <Link to={"/new"} className="Links">
                        Client Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link to={"/new"} className="Links">
                        Bulletin Board
                      </Link>
                    </li>
                    <li>
                      <Link to={"/new"} className="Links">
                        Directory
                      </Link>
                    </li>
                    <li>
                      <Link to={"/new"} className="Links">
                        E-Newspaper
                      </Link>
                    </li>
                  </ul>
                  <div className="load-more">
                    <Link to="/new">Show More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* chemical shopping center  */}
        <div className="services-memebership">
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-12">
                <div className="memebership-list">
                  <h2>
                    CHEMICAL SHOPPING CENTER{" "}
                    <a href>
                      <img src="assets/img/cart.png" />
                    </a>{" "}
                    <a href>
                      <img src="assets/img/bag.png" />
                    </a>
                  </h2>
                  <div className="single-row">
                    <ul className>
                      {productData1.map((item) => (
                        <li key={item.id}>
                          <Link to={`/product/${item.id}`}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                    <ul className>
                      {productData2.map((item) => (
                        <li key={item.id}>
                          <Link to={`/product/${item.id}`}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <div className="load-more">
                    <Link to="/new">Add to Cart</Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agent X shield  */}

        <div className="services-memebership">
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-12">
                <div className="memebership-list">
                  <h2>AGENT X SHIELD</h2>
                  <div className="single-row txt">
                    <ul className>
                      <li>
                        <b>Introducing Agent X Shield:</b>Elevating Your
                        Cleaning Experience to Luxury Levels! <br />
                        Agent X Shield isn&apos;t just another cleaning service;
                        it&apos;s a testament to our unwavering dedication to
                        perfection. We&apos;ve gone above and beyond to craft an
                        unparalleled cleaning experience that will leave you
                        astounded. Here&apos;s why the Agent X. Shield team is
                        the ultimate choice for you.
                      </li>
                      <li>
                        <b>Unmatched Training Expertise:</b>Our exceptional crew
                        isn&apos;t your run-of-the-mill cleaning team. They are
                        the crème de la crème, having completed an intensive
                        18-month training program meticulously tailored for
                        Agent X Shield. They have mastered the art of delivering
                        a pristine and protected environment.
                      </li>
                      <li>
                        <b>Thoroughly Vetted Professionals:</b>Your safety and
                        peace of mind are our top priorities. Before our team
                        steps foot into your space, they undergo a rigorous
                        background screening process to ensure they are
                        trustworthy and reliable, Complete peace of mind is our
                        gift to you..
                      </li>
                      <li>
                        <b>Eco-Friendly and Health-Conscious:</b>Agent X Shield
                        proudly boasts an EPA-approved, alcohol-free, and
                        chemical-free formula that is safe for your loved ones
                        and the environment. Say goodbye to concerns about
                        harmful residues or fumes. We care for your well-being.
                      </li>
                    </ul>
                    <ul>
                      <img src="assets/img/shildX.png" className="img-fluid" />
                      <li>
                        <b>Luxurious Excellence Awaits:</b>Don&apos;t miss the
                        chance to indulge in the epitome of luxury cleaning
                        services. Our unwavering commitment to perfection,
                        extensive training, and innovative approach set us apart
                        as the clear choice for those who demand nothing but the
                        finest.
                      </li>
                      <li>
                        <b>Discover the Agent X Shield Difference:</b>Don&apos;t
                        settle for ordinary when you can bask in the
                        extraordinary with Agent X Shield. Your surfaces deserve
                        nothing but the absolute best! Click here to learn more
                        about Agent X Shield and transform your cleaning
                        experience today
                      </li>
                    </ul>
                  </div>
                  <div className="load-more">
                    <Link to="/new">Learn More...</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* our Service Department  */}

        <div className="services-memebership">
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-12">
                <div className="memebership-list">
                  <h2>Our Service Department</h2>
                  <div className="single-row">
                    <ul className>
                      {serviceData1.map((item) => (
                        <li key={item.id}>
                          <Link to={`/service/${item.id}`}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                    <ul className>
                      {serviceData2.map((item) => (
                        <li key={item.id}>
                          <Link to={`/service/${item.id}`}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <div className="load-more"><Link to="/new" >Load More</Link></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Watch  whether  */}

        <div className="services-memebership">
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-6">
                <div className="memebership-list">
                  <h2>MY FLORIDA HURRICANE WATCH WEATHER</h2>
                  <div className="membership-lis-image">
                    <img src="assets/img/service/map.jpg" />
                    <img src="assets/img/service/calender.jpg" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="memebership-list">
                  <h2>GLOSSARY</h2>
                  <div className="glossary">
                    <h3>AFM SHOW SOUTH AMERICA 2023</h3>
                    <div className="floww">
                      <div className="address">
                        <p>Chicago, 1L</p>
                        <p>October 10-13 2023</p>
                      </div>
                      <div className="address-link">
                        <Link to="/new">More Information </Link>
                      </div>
                    </div>
                    <hr />

                    <h3>AFM SHOW EAST AMERICA 2023</h3>

                    <div className="floww">
                      <div className="address">
                        <p>Chicago, 1L</p>
                        <p>October 10-13 2023</p>
                      </div>
                      <div className="address-link">
                        <Link to="/new">More Information </Link>
                      </div>
                    </div>
                    <hr />

                    <h3>AFM SHOW WEST AMERICA 2023</h3>

                    <div className="floww">
                      <div className="address">
                        <p>Chicago, 1L</p>
                        <p>October 10-13 2023</p>
                      </div>
                      <div className="address-link">
                        <Link to="/new">More Information </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* partner With us  */}

        <div className="services-memebership">
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-3">
                <div className="memebership-list">
                  <h2>PARTNER WITH US</h2>
                  <ul className>
                    <li>
                      <a href>Affiliates</a>
                    </li>
                    <li>
                      <a href>Investors</a>
                    </li>
                    <li>
                      <a href>Volunteer Cleaning</a>
                    </li>
                    <li>
                      <a href>Global Alliance</a>
                    </li>
                    <li>
                      <a href>Subcontractors</a>
                    </li>
                    <li>
                      <a href>Advertise with us</a>
                    </li>
                    <li>
                      <a href>Neighbourhood Cleaning</a>
                    </li>
                  </ul>
                  <div className="img-box">
                    <img src="assets/img/partner-w-u1.png" />
                    <img src="assets/img/partner-w-u2.png" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="memebership-list">
                  <h2>AFMX STUDIOS</h2>
                  <ul className>
                    <li>
                      <a href>Do it Yourself Cleaning</a>
                    </li>
                    <li>
                      <a href>Home Improvement</a>
                    </li>
                    <li>
                      <a href>Neighbourhood Cleaning Friend Program</a>
                    </li>
                    <li>
                      <a href>Product Talk</a>
                    </li>
                    <li>
                      <a href>Promote with us</a>
                    </li>

                    <div className="double-img">
                      <div className="img--1">
                        <a href>
                          <img src="assets/img/afmx-1.png" />
                        </a>
                      </div>
                      <div className="img--1">
                        <a href>
                          <img src="assets/img/afmx-2.png" />
                        </a>
                      </div>
                      <div className="img--1">
                        <a href>
                          <img src="assets/img/afmx-3.png" />
                        </a>
                      </div>
                      <div className="img--1">
                        <a href>
                          <img src="assets/img/afmx-4.png" />
                        </a>
                      </div>
                      <div className="img--1">
                        <a href>
                          <img src="assets/img/afmx-5.png" />
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="memebership-list">
                  <h2>CAREERS AND EMPLOYMENT</h2>
                  <ul className>
                    <li>
                      <a href>Domestic Subcontractors</a>
                    </li>
                    <li>
                      <a href>Nominated Subcontractors</a>
                    </li>
                    <li>
                      <a href>Named Subcontractors </a>
                    </li>
                    <li>
                      <a href>Site Prep</a>
                    </li>
                    <li>
                      <a href>Foundation</a>
                    </li>
                    <li>
                      <a href>Structure</a>
                    </li>
                    <li>
                      <a href>Mechanical</a>
                    </li>
                    <li>
                      <a href>Interior</a>
                    </li>
                    <li>
                      <a href>Landscape</a>
                    </li>
                    <li>
                      <a href>Roofing</a>
                    </li>
                    <li>
                      <a href>Special Trade</a>
                    </li>
                    <li>
                      <a href>Technology</a>
                    </li>
                    <li>
                      <a href>Demolition</a>
                    </li>
                    <li>
                      <a href>Electric</a>
                    </li>
                    <li>
                      <a href>Hvac</a>
                    </li>
                    <li>
                      <a href>Part time employee</a>
                    </li>
                    <li>
                      <a href>Full time employee</a>
                    </li>
                    <li>
                      <a href>On call employee</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="memebership-list">
                  <h2>AFM HELPING HAND AND DONATIONS</h2>
                  <ul className>
                    {helpingHand.map((item) => (
                      <li key={item?.id}>
                        <Link
                          to={`/helping-hand/${item?.id}`}
                          className="Links"
                        >
                          {item?.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
