import { useParams } from "react-router-dom"
import LeftMenue from "../../components/leftmenu/LeftMenue"
import "./terms&conditions.css"
import termsData from "../../assets/data/terms&Conditions.json"
export default function TermsConditions() {
    const { id } = useParams()
    const data = termsData.find((item) => item.id === id)
    console.log(data);
    return (
        <>
            <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
                        <LeftMenue
                            type="Service Department"
                            data={termsData}
                            url="/terms-condition"
                        />
                    </div>
                    <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
                        <h3 className="service-category-heading">{data.name}</h3>
                        <div className="service-item-list ">
                            <div className="container p-0 ">
                                <div className="bg-white ">
                                    <div className="row m-0 p-0  p-lg-3 py-3 ">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            {data.text.map((item)=>(
                                                <p key={item.id} className="service_description">
                                                {item.text}
                                            </p>
                                            ))}
                                            {/* <h4 className="service_heading">{data?.data[0].heading}</h4> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}