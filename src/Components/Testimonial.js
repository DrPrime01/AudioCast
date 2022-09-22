import "./Testimonial.css";
import quoteLeft from "../Assets/Icons/quoteLeft.svg";
import quoteRight from "../Assets/Icons/quoteRight.svg";

function Testimonial() {
    const testimonialLists = [
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat eleifend fames aliquam, elementum sed in.",
            name: "Samuel Jerald",
            id: "testimony-one"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat eleifend fames aliquam, elementum sed in.",
            name: "Shade Blessing",
            id: "testimony-two"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat eleifend fames aliquam, elementum sed in.",
            name: "Emmanuel Chukwu",
            id: "testimony-three"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat eleifend fames aliquam, elementum sed in.",
            name: "Tayo Musa",
            id: "testimony-four"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat eleifend fames aliquam, elementum sed in.",
            name: "Janet Shawn",
            id: "testimony-four"
        },
    ];

    const testimonial = testimonialLists.map((testimonialList) => {
        return (
            <div className="testimony" key={testimonialList.id}>
                <span className="quote-icons">
                    <img src={quoteLeft} alt="left-quote-icon" className="quote-icon"/>
                    <img src={quoteRight} alt="right-quote-icon" className="quote-icon"/>
                </span>
                <p className="testimonial-text">{testimonialList.text}</p>
                <span className="profile-icon">
                    <div className="profile-image" id={testimonialList.id}></div>
                    {testimonialList.name}
                </span>
            </div>
        )
    })
  return (
    <div className="testimonial">
      <div className="testimonial-header">
        <h2 className="testimonial-title">What Our Listeners Think About Us</h2>
      </div>
      <div className="testimonial-lists">
        {testimonial}
      </div>
    </div>
  )
}

export default Testimonial;
