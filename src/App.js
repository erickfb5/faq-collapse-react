import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";

import { faqData } from "./faqData";
import "./App.css";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) =>
    setActiveIndex(activeIndex === index ? -1 : index);

  return (
    <div className="App">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq ${index === activeIndex ? "active" : ""}`}
          >
            <h3 className="faq-title">{faq.question}</h3>
            <p className="faq-text">{faq.answer}</p>
            <button className="faq-toggle" onClick={() => handleToggle(index)}>
              {index === activeIndex ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
