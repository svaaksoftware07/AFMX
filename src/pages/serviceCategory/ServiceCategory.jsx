import { useParams } from "react-router-dom";
import LeftMenue from "../../components/leftmenu/LeftMenue";
import serviceData from "../../assets/data/ServiceData.json";
import "./serviceCategory.css";
const ServiceCategory = () => {
  const { id } = useParams();
  const data = serviceData.find((item) => item.id === id);

  return (
    <>
      <div className="container p-0 my-3">
        <div className="row m-0 p-0 ">
          <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
            <LeftMenue
              type="Service Department"
              data={serviceData}
              url="/service"
            />
          </div>
          <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
            <h3 className="service-category-heading">{data.name}</h3>
            <div className="service-item-list ">
            <div className="container p-0 my-3">
        <div className="bg-white ">
          <div className="row m-0 p-0  p-lg-3 py-3 ">
            <div className="col-lg-6 col-md-6 col-12">
              <p className="service_description">
                Magna ipsum labore dolor labore. Ex culpa nostrud tempor
                reprehenderit est excepteur eu aliqua sit quis aliqua pariatur
                ipsum. Do adipisicing officia ipsum cillum elit aliquip. Magna
                ipsum labore dolor labore. Ex culpa nostrud tempor reprehenderit
                est excepteur eu aliqua sit quis aliqua pariatur ipsum. Do
                adipisicing officia ipsum cillum elit aliquip.
              </p>
              {/* <h4 className="service_heading">{data?.data[0].heading}</h4> */}
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <img
                src={data?.data[0].img}
                alt={data.name}
                className="img-fl mb-3 service-image"
              />
            </div>
          </div>
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCategory;
