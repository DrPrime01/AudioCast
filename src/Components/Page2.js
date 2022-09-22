import "./Page2.css";
import cardone from "../Assets/Images/cardone.png";
import cardonewave from "../Assets/Images/cardonewave.png";
import cardtwo from "../Assets/Images/cardtwo.png";
import cardtwowave from "../Assets/Images/cardtwowave.png";
import cardthree from "../Assets/Images/cardthree.png";
import MusicPause from "../Assets/Images/MusicPause.png";
import MusicPlay from "../Assets/Images/MusicPlay.png";

function Page2() {
  const cardInfoList = [
    {
      cardImage: cardone,
      radiowaves: cardonewave,
      control: MusicPause,
      quote: `" Lesson I learnt from my rich dad, that I will never forget.”`,
      quoteReference: "Robert Kiyosaki",
    },
    {
      cardImage: cardtwo,
      radiowaves: cardtwowave,
      control: MusicPlay,
      quote: `“ Journey of a life time that starts with a step."`,
      quoteReference: "Miles Monroe",
    },
    {
      cardImage: cardthree,
      radiowaves: cardonewave,
      control: MusicPause,
      quote: `“ He that thinketh he stands watch, Lest he falls.”`,
      quoteReference: "Benny Hinn",
    },
  ];

  const cardInfos = cardInfoList.map((cardInfo, i) => {
    return (
      <div className="card-container" key={i}>
        <div className="card-image">
          <img src={cardInfo.cardImage} alt="Card User" className="card-img" />
        </div>
        <div className="card-controls">
          <span className="control-btn">
            <img
              src={cardInfo.control}
              alt="Card Control"
              className="control-img "
            />
          </span>
          <span className="control-waves">
            <img
              src={cardInfo.radiowaves}
              alt="Radiowaves"
              className="wave-img"
            />
          </span>
        </div>
        <div className="card-text-container">
          <p className="card-text">{cardInfo.quote}</p>
        </div>
        <div className="card-footer">
          <p className="footer-text">{cardInfo.quoteReference}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="header">
          <h1>Top audiocast for your listening pleasure.</h1>
        </div>
        <div className="text-page2">
          <span className="text-body-page2">
            <p>
              adipiscing elit. Luctus tortor at euismod ullamcorper. Consectetur
              velit eget at .
            </p>
          </span>
          <button className="text-btn btn-outline">view more</button>
        </div>
      </div>
      <div className="page-content">{cardInfos}</div>
    </div>
  );
}

export default Page2;
