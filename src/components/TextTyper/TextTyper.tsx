import { useEffect, useState } from "react";
import "./TextTyper.style.scss";

const TextTyper = ({ text }: { text: string }) => {
  const [typed_text, setTypedText] = useState<string>("");
  const [showCursor, setShowCursor] = useState<boolean>(true);

  useEffect(() => {
    if (typed_text.length !== text.length)
      setTimeout(
        () => setTypedText(typed_text + text[typed_text.length]),
        Math.random() * (80 - 10) + 10
      );
    else setShowCursor(false);
  }, [typed_text]);

  return (
    <div className="text_container">
      {typed_text}
      {showCursor && "|"}
    </div>
  );
};

export default TextTyper;
