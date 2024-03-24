import React, { useState } from "react";
import "./style.css";
import { FaAngleDown } from "react-icons/fa6";
import { IoChevronUpSharp } from "react-icons/io5";

import { Canvas, useFrame } from '@react-three/fiber'


const Accordion = ({ data }) => {
  const [accordionItems, setAccordionItems] = useState(
    data.map((item) => ({ ...item, open: false }))
  );

  const handleClick = (id) => {
    setAccordionItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, open: !item.open } : item
      )
    );
  };

  return (
    <div className="container">
      <div className="Stage">
        <div className="accordion">
          <h1 className="PageName">Этапы работы </h1>
          {accordionItems.map((item) => (
            <div key={item.id}>
              <div className="title" onClick={() => handleClick(item.id)}>
                <h2 className="title-text">{item.title}</h2>
                <div className="arrow-wrapper">
                  {item.open ? <IoChevronUpSharp /> : <FaAngleDown />}
                </div>
              </div>
              <div className={item.open ? "content content-open" : "content"}>
                {item.open && <PrintedText text={item.content} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PrintedText = ({ text }) => {
  const [printedText, setPrintedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const printNextChar = () => {
    if (currentIndex < text.length) {
      setPrintedText((prevText) => prevText + text[currentIndex]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  React.useEffect(() => {
    const timer = setInterval(printNextChar, 23);
    return () => clearInterval(timer);
  }, [currentIndex, text]);

  return <p>{printedText}</p>;
};

const Stage = () => {
  let data = [
    {
      id: 1,
      title: "01 Концепт",
      content: `В процессе анализа мы выявим все ключевые 
      особенности продукта, определим целевую 
      аудиторию и задачи, необходимые для создания трех различных версий сценария.`,
    },
    {
      id: 2,
      title: "02 Анимация",
      content: `
      Исходя из разработанного сценария, который был представлен на этапе концепции, мы приступим к созданию 3D видеоролика с полной анимацией.
      `,
    },
    {
      id: 3,
      title: "03 Материалы",
      content: `
     
      Этап, на котором вы сможете ознакомиться с 
      полностью готовым видеороликом, 
      содержащим все необходимые материалы и отличающимся высоким качеством изображения и освещения.
    
      `,
    },
    {
      id: 4,
      title: "04 Финал",
      content: `

      Красиво и систематично распределим все компоненты по соответствующим папкам, 
      отправим вам удобную ссылку для доступа к облачному хранилищу, а также подготовим полный чек-лист 
      с разнообразными рекомендациями по использованию и финальной реализации проекта.

      `,
    },
  ];

  return <Accordion data={data} />;
};

export default Stage;
