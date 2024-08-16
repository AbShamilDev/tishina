import { ReactNode, useEffect, useRef, useState } from "react";
import TextTyper from "../../components/TextTyper/TextTyper";
import "./StartPage.style.scss";

const text =
  "Я всей душой люблю йогу, для мне это один лучших способов достичь тишины в голове. Тот самый момент, когда все мысли в голове затихают и ты просто созерцаешь всё вокруг. И я хочу поделиться с миром этой тишиной! Добро пожаловать!";

const StartPage = () => {
  const storyTextRef = useRef(null);

  return (
    <div className="start_page">
      <span className="yclub_line">
        <p>Йога клуб</p>
      </span>
      <span className="bottom_line"></span>

      <h1 className="main_text">ТИШИНА</h1>

      <div className="info_block">
        <p>
          ТГ-канал с практиками йоги,который поможет погрузиться во внутреннюю тишину и
          умиротворение
        </p>
      </div>

      <div className="who_are">
        <img src="/images/me.png" alt="" />
        <p>Меня зовут Вика, я тренер по Хатха-Йоге.</p>
      </div>
      <div className="story_text" ref={storyTextRef}>
        <TextTyper text={text} />
      </div>
    </div>
  );
};

export default StartPage;
