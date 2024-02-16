import React, { useState } from "react";
import "../css/Letters.css";
import { ApiLetters } from "../js/ApiLetters";

export const Letters = () => {
  const [title__letter, setTitle__letter] = useState("");

  const onHandleMp3 = (mp3, title) => {
    let audio = new Audio(mp3);
    audio.play();
    setTitle__letter(title);
  };

  return (
    <>
      <div className="title__letter">
        <p>{title__letter}</p>
      </div>
      <div className="container__letters">
        <div className="flex_column">
          <div className="letters">
            {ApiLetters.map((item, key) => {
              return (
                <>
                  <img
                    className="letter"
                    src={item.img}
                    alt={item.img}
                    onClick={() => onHandleMp3(item.sound, item.title)}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
