import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const Articles = () => {
  const cardData = [
    {
      title: "Health Insurance Basics",
      summary:
        "Understand the fundamentals of health insurance, including types of plans, coverage options, and how to choose the best plan for your needs.",
      //   image: "https://via.placeholder.com/150?text=Health+Insurance",
    },
    {
      title: "Auto Insurance Tips",
      summary:
        "Learn essential tips for selecting auto insurance, including coverage options, how to lower your premium, and what to consider before buying.",
      //   image: "https://via.placeholder.com/150?text=Auto+Insurance",
    },
    {
      title: "Home Insurance Guide",
      summary:
        "Explore the different types of home insurance policies, what they cover, and how to find the right insurance for your property.",
      //   image: "https://via.placeholder.com/150?text=Home+Insurance",
    },
    {
      title: "Life Insurance 101",
      summary:
        "Get to know the basics of life insurance, including the different types of policies, benefits, and how to choose the best one for your family.",
      //   image: "https://via.placeholder.com/150?text=Life+Insurance",
    },
    {
      title: "Travel Insurance Essentials",
      summary:
        "Find out why travel insurance is important, what it covers, and how to select a policy that fits your travel plans.",
      //   image: "https://via.placeholder.com/150?text=Travel+Insurance",
    },
    {
      title: "Disability Insurance Overview",
      summary:
        "Understand disability insurance, including how it works, types of policies, and why it's crucial for protecting your income.",
      //   image: "https://via.placeholder.com/150?text=Disability+Insurance",
    },
  ];

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const cardChunks = chunkArray(cardData, 3);
  return (
    <div className="card-slider-container">
      <h1>Articles</h1>
      <Carousel
        controls={true}
        indicators={true}
        interval={3000} // Auto-slide interval in milliseconds
        pause="hover" // Pause on hover
        touch={true} // Enable swipe gestures
      >
        {cardChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="card-slider-row">
              {chunk.map((card, i) => (
                <div
                  key={i}
                  className={`card card${i}`}
                >
                  {/* <img
                    src={card.image}
                    alt={card.title}
                    className="card-img"
                  /> */}
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Articles;
