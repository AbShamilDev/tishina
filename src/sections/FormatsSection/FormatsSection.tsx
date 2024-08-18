import FormatBlock, { FormatProps } from "../../components/FormatBlock/FormatBlock";
import "./FormatsSection.style.scss";
import { forwardRef, memo, useRef } from "react";

const FormatsSection = memo(
  forwardRef<HTMLDivElement, { active: boolean }>(function FormatsSection({ active }, ref) {
    const formats = useRef<FormatProps[]>([
      {
        label: "7-15 минут простые и легкие",
        children: (
          <ul>
            <li>Настрой на день</li>
            <li>Перерыв в течение дня, чтобы переключить центр и отдохнуть</li>
            <li>Вечером расслабиться и настроиться на сон</li>
          </ul>
        ),
      },
      {
        label: "25-35 минут средние и насыщенные ",
        children: (
          <ul>
            <li>Силовые на ноги, пресс, руки, спину</li>
            <li>Вытяжение, растяжка, шпагаты</li>
            <li>Здоровая спина и др.</li>
          </ul>
        ),
      },
      {
        label: "45-60 минут глубокие и длинные",
        children: (
          <ul>
            <li>Универсальная йога на все тело</li>
            <li>Длинный настрой через пранаямы</li>
            <li>Глубокая проработка каждого участка тела</li>
            <li>Полная перезагрузка</li>
          </ul>
        ),
      },
      {
        label: "ЕЖЕДНЕВНОЕ ВДОХНОВЕНИЕ",
        children: (
          <p>Утренняя цитата/аффирмация/мудрость дня, которую вы можете забрать в свой день!</p>
        ),
        center: true,
      },
    ]);

    return (
      <section className={`formats_wrapper ${active ? "active" : ""}`} ref={ref}>
        <div className="formats_container">
          <div className="top_text_block">
            <h1>Формат йога-клуба</h1>
            <p>3 раза в неделю на канале будут выходить практики в записи</p>
          </div>

          {formats.current.map((format, i) => (
            <FormatBlock key={format.label} {...format} delay={i + 1} />
          ))}

          <img src="/images/yogaman.png" alt="" />
        </div>
      </section>
    );
  })
);

export default FormatsSection;
