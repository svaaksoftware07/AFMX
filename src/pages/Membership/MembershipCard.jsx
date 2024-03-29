import "./style.css";

const MembershipCard = (props) => {
  const SingleCard = ({ data }) => {
    // console.log(data.membershipBenefit.filter((e) => e.id > 6));
    return data.map((item) => {
      return (
        <>
          <label htmlFor={`s${item.id}`} id={`slide${item.id}`} key={item.id}>
            <div className="card ">
              <div className="plan_img">
                <img src={item.planImage} alt={item.planName} />
              </div>
              <h1>{item.planName}</h1>
              <div className="subscriptionName">
                {item.subscriptionName}
                <div className="white_circle"></div>
              </div>
              <h2>
                <span>$</span>
                {item.planValue}&nbsp;<span>00</span>
              </h2>
              <h4>USD Per Month</h4>
              <div className="benefit_list">
                {item.membershipBenefit
                  .filter((e) => e.benefitId < 8)
                  .map((i) => (
                    <>
                      <p key={i.benefitId}>{i.benefitName}</p>
                    </>
                  ))}
              </div>
              <button>Get Started</button>
            </div>
          </label>
        </>
      );
    });
  };
  return <>{SingleCard(props)}</>;
};

export default MembershipCard;
