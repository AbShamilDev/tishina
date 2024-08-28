import { memo } from "react";
import "./TryItLink.style.scss";

const TryItLink = memo(() => {
  const postUserMeta = async () => {
    const navigator = window.navigator;
    const date = new Date();
    const durationTime = new Date(
      date.getTime() - new Date(JSON.parse(localStorage.getItem("open_time")!)).getTime()
    );
    const url = "https://1d682d64f09a807d.mokky.dev/redirects";
    const data = {
      referrer: document.referrer,
      dateTime: date.toString(),
      sessionDuration: `${durationTime.getMinutes() ? durationTime.getMinutes() + "min " : ""}${
        durationTime.getSeconds() + "sec"
      }`,
      userAgent: navigator.userAgent,
    };

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    window.location.href = "https://t.me/+BUL26jEUomFjOTZi";
  };

  return (
    <div className="try_it_container">
      <p>
        Подписка на этот клуб - это подписка на жизнь, наполненную эстетикой тишины, связи с собой,
        глубины и осознанности.
      </p>

      <p className="free">Бесплатная первая неделя подписки</p>

      <a
        onClick={(ev) => {
          ev.preventDefault();
          postUserMeta();
        }}
      >
        Попробовать
      </a>
    </div>
  );
});

export default TryItLink;
