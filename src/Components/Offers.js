import "./Offers.css";
import Headset from "../Assets/Icons/Headset.svg";
import content from "../Assets/Icons/content.svg";
import linkup from "../Assets/Icons/linkup.svg";
import podcasters from "../Assets/Icons/podcasters.svg";
import offerImage from "../Assets/Images/offerImage.png";

function Offers() {
  const offerList = [
    {
      img: Headset,
      desc: "Premium audio quality",
    },
    {
      img: linkup,
      desc: "Link up with podcasters",
    },
    {
      img: content,
      desc: "Interesting rich content",
    },
    {
      img: podcasters,
      desc: "Lots of podcasters",
    },
  ];

  const offers = offerList.map((offer, i) => {
    return (
      <div className="offer-features" key={i}>
        <div className="offer-img"><img src={offer.img} alt="features" className="offer-img-img"/></div>
        <div className="offer-desc">{offer.desc}</div>
      </div>
    );
  });
  return (
    <div className="offer-page">
      <div className="offer-imgs">
        <img className="offers-img" src={offerImage} alt="offersss" />
      </div>
      <div className="offer-feats">
        <div className="offer-title">
            <h1>Our Very Best Offers</h1>
        </div>
        <div className="offers">
            {offers}
        </div>
      </div>
    </div>
  );
}

export default Offers;
