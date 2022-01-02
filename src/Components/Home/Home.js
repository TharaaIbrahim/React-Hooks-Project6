import React from "react";
import BestSeller from "./BestSeller/BestSeller";
import Caupons from "./Caupons/Caupons";
import Hero from "./Hero/Hero";
import Slider from "./Slider/Slider";
import Testimonial from "./Testimonial/Testimonial";

function Home() {
  const collections = [
    {
      img: "../assest/img/weddingcard.jpg",
      alt: "Wedding Card Collection",
      title: "Wedding Dresses",
      discription:
        "Shop all our wedding dresses & bridal gowns in a wide selection of every style,all at amazing prices. Book an appointment and find your wedding dress",
    },
    {
      img: "../assest/img/promcard.jpg",
      alt: "Prom Card Collection",
      title: "Prom Dresses",
      discription:
        "Shop the latest variety of prom dresses in short to long prom gowns.",
    },
  ];
  const testimonials = [
    {
      customerName: "Nour Ali",
      testimonial: ` "Super dresses quality, best website to rent a any type of dresses "`,
    },
    {
      customerName: "Rula Mohammad",
      testimonial: `"They are very committed to the time, and have the best prices of dresses  "`,
    },
  ];

  return (
    <div>
      <Hero />
      <Caupons />
      <Slider />
      <div>
        <h2 className="title-sections">Best Collections</h2>
        <div className="collections-container">
          {collections.map((card, id) => {
            return (
              <BestSeller
                img={card.img}
                alt={card.alt}
                collectionName={card.title}
                discription={card.discription}
                key={id}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h2 className="title-sections">What Our Customers Are Saying</h2>
        <div className="collections-container testcontainer">
          {testimonials.map((testimonial, id) => {
            return (
              <Testimonial
                testimonial={testimonial.testimonial}
                customerName={testimonial.customerName}
                key={id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
