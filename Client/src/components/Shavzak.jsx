import React, { useState } from "react";

function Shavzak() {
  //A TIME ARRAY CREATION
  const arr = [];
  for (let i = 22; i <= 29; i++) {
    // Starting from 22:00 to 05:40 next day
    for (let j = 0; j < 4; j++) {
      let hour = i % 24; // Ensure hours wrap around to 0 after 23
      let minutes = j * 40; // Calculate minutes
      if (minutes >= 60) {
        hour += Math.floor(minutes / 60); // Adjust hour if minutes exceed 60
        minutes %= 60; // Ensure minutes are within 60
      }
      arr.push(
        `${hour < 10 ? "0" + hour : hour}:${minutes === 0 ? "00" : minutes}`
      );
    }
  }

  const d = new Date(),
    h = d.getHours(),
    m = d.getMinutes(),
    currentMinutes = m % 60; // Calculate current minutes modulo 60

  const currentIndex = arr.findIndex((slot) => {
    const [slotHour, slotMinute] = slot.split(":").map(Number);
    return h === slotHour && currentMinutes === slotMinute;
  });

  let timelist = [];
  if (currentIndex > -1) {
    timelist = [...arr.slice(currentIndex), ...arr.slice(0, currentIndex)];
  } else {
    // If the current time is not found in the array, simply use the array starting from 22:00
    timelist = arr;
  }
  const subArrays = [];
  for (let i = 0; i < arr.length; i += 8) {
    // Every 8 elements (4 yes, 4 no)
    subArrays.push(arr.slice(i, i + 4 - 1));
  }

  // Remove the "no" subarrays from the main array
  for (let i = 1; i < subArrays.length; i += 2) {
    // Start from index 1 to skip the first "yes" subarray
    arr.splice(arr.indexOf(subArrays[i][0]), 4); // Remove 4 elements starting from the index of the first element of the "no" subarray
  }

  const mergedArray = subArrays.flat();
  const fullArray = mergedArray.concat(timelist[19]);

  //   console.log(timelist);
  //   console.log(mergedArray);

  //   the final answer:
  //   console.log(fullArray);

  //SOLIDER NAMES ARRAY
  const [soliders, setSoliders] = useState([
    "Cohen",
    "Levy",
    "Mizrahi",
    "Peretz",
    "Bitton",
    "Dahan",
    "Agbaria",
    "Avraham",
    "Friedman🗽",
    "Katz",
    // "Agbaria",
    // "Avraham",
    // "Friedman",
  ]);

  const message = "🗽is the unit commander";
  //shuffle FUNCTION
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const randomNameList = () => {
    let shuffledNames = [];
    let shuffledArray = shuffle(soliders);
    shuffledNames.push(shuffledArray);
    setSoliders([...shuffledNames[0]]);

    // console.log(shuffledNames);
    // console.log(soliders);
  };

  return (
    <div className="gurdlist">
      <h2>רשימת שמירות -שבצ"ק</h2>

      <p>🤨 לחצו על הכפתור לבניית רשימת שמירה לילה הקרוב</p>

      <table>
        <tr>
          <th>NAME</th>
          <th>TIME</th>
        </tr>
        <tr>
          {fullArray.map((time) => {
            return <td>{time}</td>;
          })}
        </tr>
        <tr>
          {soliders.map((name, index) => {
            return <td key={index}>{name}</td>;
          })}
          <td className="redBg">{soliders[0]}</td>
          <td className="redBg">{soliders[1]}</td>
          <td className="redBg">{soliders[2]}</td>
        </tr>
      </table>
      <button className="button-50" onClick={() => randomNameList()}>
        לחץ לערבוב
      </button>
      <p className="message">{message}</p>
      <p className="message line-threw">
        {" "}
        כל הזמן רבים על הרשימות שמירה, הפעם אין תירוצים🙄🙄🙄{" "}
      </p>
    </div>
  );
}

export default Shavzak;
