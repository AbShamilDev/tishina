import TryItBackground from "../../components/TryItBackground/TryItBackground";
import "./TryItSection.style.scss";
import { forwardRef, RefObject } from "react";

interface TryItSectionProps {
  active: boolean;
  scroll: number;
}

const TryItSection = forwardRef<HTMLDivElement, TryItSectionProps>(({ active, scroll }, ref) => {
  const reff = ref as RefObject<HTMLDivElement>;

  const postUserMeta = async () => {
    const navigator = window.navigator;
    const date = new Date();
    const durationTime = new Date(
      date.getTime() - new Date(JSON.parse(localStorage.getItem("open_time")!)).getTime()
    );
    const url = "https://1d682d64f09a807d.mokky.dev/redirects";
    const data = {
      ip: "",
      referrer: document.referrer,
      dateTime: `${date.getDate()}.${
        date.getMonth() + 1
      } ${date.getHours()}:${date.getMinutes()}:${date.getMinutes()}`,
      sessionDuration: `${durationTime.getMinutes() ? durationTime.getMinutes() + "min " : ""}${
        durationTime.getSeconds() + "sec"
      }`,
      userAgent: navigator.userAgent,
    };

    await fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((resData) => {
        data.ip = resData.ip;

        fetch(url, {
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
            window.location.href = "https://app.leadteh.ru/w/cbj51";
            return response.json();
          })
          .then((data) => {
            console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
            window.location.href = "https://app.leadteh.ru/w/cbj51";
          });
      })
      .catch((error) => {
        console.log("Error:", error);
        window.location.href = "https://app.leadteh.ru/w/cbj51";
      });
  };

  return (
    <div className={`try_it_wrapper ${active ? "active" : ""}`} ref={ref}>
      <div className="try_it_container">
        <p>
          Подписка на этот клуб - это подписка на жизнь, наполненную эстетикой тишины, связи с
          собой, глубины и осознанности.
        </p>

        <a
          onClick={(ev) => {
            ev.preventDefault();
            postUserMeta();
          }}
        >
          Попробовать бесплатно
        </a>
      </div>

      <TryItBackground scroll={scroll} offsetTop={reff.current ? reff.current.offsetTop : 0} />
    </div>
  );
});

export default TryItSection;
