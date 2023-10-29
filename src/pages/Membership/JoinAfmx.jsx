import "./style.css";
import MembershipPlan from "../../assets/data/membership/membershipPlan.json";
import MembershipCard from "./MembershipCard";
// import { EffectCoverflow } from "swiper";

const JoinAfmx = () => {
  return (
    <>
      <div className="container">
        <div className="membership_card">
          <MembershipCard data={MembershipPlan} />
        </div>
      </div>
    </>
  );
};

export default JoinAfmx;
