import React, { useEffect, useState } from "react";
import one from "./assets/1.jpg";
import two from "./assets/2.jpg";
import three from "./assets/3.jpg";
import four from "./assets/4.jpg";
import five from "./assets/5.jpg";
import six from "./assets/6.jpg";
import seven from "./assets/7.jpg";
import eight from "./assets/8.jpg";
import nine from "./assets/9.jpg";

import LetThemBackTimer from "./timer/LetThemBackTimer";
import Shavzak from "./components/Shavzak";

function App() {
  const [firstNames, setFirstNames] = useState([
    "חרבות",
    "עצי",
    "מגני",
    "שבבי",
  ]);
  const [lastNames, setLastNames] = useState(["ברזל", "חץ", "פטישים", "יין"]);
  const [showSpotigy, setShowSpotigy] = useState(true);

  const [state, setState] = useState(0);
  let randomaizeNames = (name) => {
    const random = Math.floor(Math.random() * name.length);
    return name[random];
  };
  useEffect(() => {
    setTimeout(() => {
      if (
        confirm("Are you sure you want to save this thing into the database?")
      ) {
        // Save it!
        setShowSpotigy(false);
      } else {
        setShowSpotigy(true);
      }
    }, 1000);
  }, []);
  return (
    <>
      <div className="spotify">
        {showSpotigy === false ? (
          <div className=""></div>
        ) : (
          <>
            <iframe
              // style="border-radius:12px"
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO1OWc6I?utm_source=generator&theme=0"
              width="25%"
              height="352"
              // frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </>
        )}
      </div>
      {/* isarli flag decoration */}
      <div className="flag-contaienr">
        <div class="flag">
          <section role="region" aria-hidden="true" class="israel-flag">
            <div class="israel-star">✡</div>
          </section>
        </div>
        <h2>ביחד ננצח!</h2>
      </div>
      {/* war-names-project */}
      <div className="war-names-project">
        <div className="war-names-container">
          <h1 className="topic-container">Israeli War Names</h1>
          <h3>נוסח חרבות ברזל</h3>
          <div className="war-names-contaier">
            <p>{randomaizeNames(lastNames)}</p>
            <p>-</p>
            <p>{randomaizeNames(firstNames)}</p>
          </div>
          <button
            onClick={() => {
              setState(state + 1);
            }}
            className="button-74"
          >
            לחצ/י
          </button>
          <h4>
            הפרוייקט הוקם עקב רעיונות שצצו לי בזמן הליחמה בחזית הצפונית ,חלק
            מהרעיונות הגיעו מאנשי הצוות *
          </h4>
        </div>
      </div>
      {/* names-on-shells-project */}

      <div className="names-on-shells-project">
        <h2>הקדשות שמות על פגזים</h2>

        <div className="images-box">
          {/* <img src={one} alt="" /> */}
          <img src={two} alt="" />
          <img src={eight} alt="" />

          {/* <img src={three} alt="" /> */}
          <img src={four} alt="" />
          <img src={five} alt="" />
          <img src={six} alt="" />
          {/* <img src={seven} alt="" /> */}
          <img src={eight} alt="" />
        </div>
        <h4>
          הפרוייקט הוקם עקב רעיונות שצצו לי בזמן הליחמה בחזית הצפונית ,חלק
          מהרעיונות הגיעו מאנשי הצוות
        </h4>
        <a href="mailto:admin@bdika.com">
          {" "}
          <h3> ✉️ מוזמנים לשלוח מייל עם ההקדשה</h3>
        </a>
        <img className="last-image" src={nine} alt="" />
        <div className="footer">
          <h4 className="image-lorem">
            אוהבים אתכם ממשפחת המילואימניקים של חיל התותחנים
          </h4>
          <img
            alt="סמל הכומתה, תג ודגל חיל התותחנים."
            src="//upload.wikimedia.org/wikipedia/commons/d/d1/%D7%A1%D7%99%D7%9B%D7%AA_%D7%97%D7%99%D7%9C_%D7%94%D7%AA%D7%95%D7%AA%D7%97%D7%A0%D7%99%D7%9D.png"
            decoding="async"
            width="170"
            height="120"
            class="mw-file-element"
            data-file-width="170"
            data-file-height="120"
          />
        </div>
        <div className="let-them-back-timer">
          <h1>
            Let Them <span className="mark"> Back</span>{" "}
            <img
              className="isrel"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </h1>
          <LetThemBackTimer />
        </div>
        <Shavzak />
      </div>
    </>
  );
}

export default App;
