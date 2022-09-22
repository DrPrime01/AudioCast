import "./Podcast.css";
import MusicWave from "../Assets/Images/MusicWave.png";

function Podcast() {
  const podcastLists = [
    {
      word: "Beauty In The Eyes Of The Beholder",
      author: "Akin Johnson",
      id: "one",
      idTwo: "one-one",
    },
    {
      word: "The Advantage Of Foreign LIfestyle Over Africa",
      author: "Vick Greenwood",
      id: "two",
      idTwo: "one-two",
    },
    {
      word: "Being Beautiful In Lagos Is Your Problem",
      author: "Dami Drey",
      id: "three",
      idTwo: "one-three",
    },
  ];

  const podcast = podcastLists.map((podcastList) => {
    return (
      <div className="podcast-list" key={podcastList.id} id={podcastList.idTwo}>
        <div className="podcast-list-image" id={podcastList.id}></div>
        <div className="podcast-list-text">
          <p className="word">{podcastList.word}</p>
          <p className="author">{podcastList.author}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="podcast-container">
      <div className="podcast-image">
        
        <div className="podcast-wave">
          <img
            src={MusicWave}
            className="musicwave-img1"
            alt="musicwave-img1"
          />
          <img
            src={MusicWave}
            className="musicwave-img2"
            alt="musicwave-img1"
          />
        </div>
      </div>
      <div className="podcast-lists">{podcast}</div>
    </div>
  );
}

export default Podcast;
