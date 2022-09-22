import Hero from "./Components/Hero";
import Page2 from "./Components/Page2";
import Offers from "./Components/Offers";
import SignUp from "./Components/SignUp";
import Podcast from "./Components/Podcast";
import Testimonial from "./Components/Testimonial";
import "./App.css";
function App() {
  return (
    <div className="app-container">
      <Hero className="hero"/>
      <Page2 className="page-container"/>
      <Offers className="offer-page"/>
      <SignUp className="signup-container"/>
      <Podcast className="podcast-container"/>
      <Testimonial className="testimonial"/>
    </div>
  );
}

export default App;
