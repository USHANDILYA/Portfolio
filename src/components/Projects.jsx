import React, { useRef, useState, useEffect } from "react";
import { MdiGithub } from "../icons/MdiGithub";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projectsData = {
  dataAnalytics: [
    { 
      name: "Walmart Sales Analysis", 
      description: "This SQL project delves into Walmart Sales data to reduce costs and analyze top-performing branches, products, and sales trends, aiming to optimize sales strategies. Utilizing data from the Kaggle Walmart Sales Forecasting Competition, it explores customer behavior and the impact of holiday markdowns, offering insights for improved sales forecasting and optimization.", 
      link: "https://github.com/USHANDILYA/Walmart-sales-analysis" 
    },
    { 
      name: "AdventureWorks Report", 
      description: "AdventureWorks sales insights for strategic decisions.", 
      link: "https://drive.google.com/file/d/18UrqTlFLCO4q4K-9d06wYsCDrfAoy-jk/view" 
    },
    { 
      name: "ETL on Retail Data", 
      description: "Kaggle data extracted, cleaned, and loaded into MySQL using Python with Pandas, SQLAlchemy, and SQL queries for analysis.", 
      link: "https://github.com/USHANDILYA/retail_data" 
    },
    { 
      name: "Vrinda Store Data Analysis", 
      description: "This project analyzes sales trends, product performance, customer behavior, location insights, and payment methods in Excel using visualizations and data analysis.", 
      link: "https://github.com/USHANDILYA/Vrinda-Store-Data-Analysis" 
    },
    { 
      name: "Smartphone Market Univariate and Bivariate Analysis", 
      description: "Analyzing the smartphone market through univariate and bivariate analysis to uncover trends, patterns, and relationships in consumer preferences and sales data.", 
      link: "https://github.com/USHANDILYA/Mob_analysis" 
    },
  ],
  mlDeepLearning: [
    { name: "Mediapipe Based Human Activity Recognition", description: "Human activity recognition combining keypoint detection and LSTM", link: "https://github.com/USHANDILYA/mediapipe_b" },
    { 
      name: "Automatic Face recognition and attendance system", 
      description: "User friendly web interface using Flask, scikit-learn, matplotlib, pandas, numpy, OpenCV, and TensorFlow, for automated attendance tracking.", 
      link: "https://github.com/USHANDILYA/FACED" 
    },
    { name: "Movie Recommendation System", description: "Developed a movie recommendation system using scikit-learn,deployed via Streamlit with Git LFS,enhancing user experience with accurate recommendations.", link: "https://movierecommender0712.streamlit.app/" },
    { 
      name: "Automobile Price Prediction", 
      description: "EDA project analyzes automobile data using Scikit-learn, NumPy, Pandas, Matplotlib, and Seaborn, exploring car price vs. mileage relationships, revealing insights for automotive decision-making.", 
      link: "https://drive.google.com/file/d/14RoHy8CsuGtqOBLXk0YoTBu9k_tBEGTX/view" 
    },
    { 
      name: "Twitter Sentiment Analysis", 
      description: "Built a sentiment classification model categorizing tweets as positive or negative. Utilized preprocessing techniques like tokenization, stemming, and TF-IDF vectorization. Trained with supervised learning methods, employing algorithms like logistic regression. Optionally integrates with Twitter API to collect data for real-time sentiment analysis of fetched tweets.", 
      link: "https://github.com/USHANDILYA/Twittersentimentanalysis" 
    },
  ],
  business: [
    { name: "Ai Based Startups", description: "Potential of AI in solving key business challenges within India", link: "https://docs.google.com/spreadsheets/d/1gwRM7olByaowhtvB5fF9Idkqpd8kvrMu/edit?usp=drive_link&ouid=104504454225249092188&rtpof=true&sd=true" },
  ],
};

// Project card component with refined styling
function ProjectContainer({ project }) {
  return (
    <div className="p-6 w-full sm:w-[350px] md:w-[450px] bg-white bg-opacity-90 border-timber-green-200 border rounded-xl shadow-xl flex-shrink-0 transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-timber-green-400">
      <h3 className="text-2xl font-semibold text-timber-green-900 mb-2">{project.name}</h3>
      <p className="text-gray-700 mb-6">{project.description}</p>
      <div className="flex justify-center">
        <a
          href={project.link}
          className="text-white bg-timber-green-700 flex items-center gap-2 font-medium p-3 rounded-lg w-fit hover:bg-timber-green-800 focus:outline-none focus:ring-2 focus:ring-timber-green-500 transition-all ease-in-out duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdiGithub />
          View Project
        </a>
      </div>
    </div>
  );
}

// Category container with scrollable section and side arrows
function ProjectCategory({ id, title, projects }) {
  const scrollRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  // Detect if the container is overflowing and set state for showing arrows
  useEffect(() => {
    const checkOverflow = () => {
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      setShowArrows(scrollWidth > clientWidth);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow); // Check on resize

    return () => window.removeEventListener("resize", checkOverflow);
  }, [projects]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id={id} className="relative w-full mb-16 p-8 bg-timber-green-900 bg-opacity-80 rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-white mb-6">{title}</h2>
      {/* Left Arrow */}
      {showArrows && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-3 bg-timber-green-700 rounded-full hover:bg-timber-green-800 focus:outline-none focus:ring-2 focus:ring-timber-green-500 z-10 transition-all duration-300 ease-in-out opacity-75 hover:opacity-100"
          aria-label="Scroll left"
        >
          <FaArrowLeft />
        </button>
      )}
      {/* Right Arrow */}
      {showArrows && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-3 bg-timber-green-700 rounded-full hover:bg-timber-green-800 focus:outline-none focus:ring-2 focus:ring-timber-green-500 z-10 transition-all duration-300 ease-in-out opacity-75 hover:opacity-100"
          aria-label="Scroll right"
        >
          <FaArrowRight />
        </button>
      )}
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-8 pb-4 hide-scrollbar"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((project, index) => (
          <ProjectContainer project={project} key={index} />
        ))}
      </div>
    </section>
  );
}

const Projects = () => {
  return (
    <div className="w-full bg-card-container p-10">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-white">My Projects</h1>
      <div className="space-y-16">
        <ProjectCategory id="data-analytics-projects" title="Data Analytics Projects" projects={projectsData.dataAnalytics} />
        <ProjectCategory id="machine-learning-projects" title="Machine Learning & Deep Learning Projects" projects={projectsData.mlDeepLearning} />
        <ProjectCategory id="business-cases" title="Business Analysis" projects={projectsData.business} />
      </div>
    </div>
  );
};

export default Projects;
