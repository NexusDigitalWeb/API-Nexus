"use client";
import { getQuestions } from "@/utils/question.utils";
import React, { useEffect, useState } from "react";
import questInterface from "./question.interface";
import anime from "animejs";
import { Waypoint } from "react-waypoint";

interface response {
  response: string;
  isVisible: boolean;
}

const Questions = (): React.ReactElement => {
  const [questionsList, setQuestionList] = useState<Array<questInterface>>([]);
  const [visibleAnswers, setVisibleAnswers] = useState<{
    [key: number]: response;
  }>({});
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(
    null
  );
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const quests = await getQuestions();
      setQuestionList(quests.question);
    };
    fetchData();
  }, []);

  const handleWaypointToRight = (target: string) => {
    anime({
      targets: target,
      left: 0,
      duration: 3000,
      easing: "easeInOutExpo",
    });
  };

  const AnswerVisibility = (i: number) => {
    setOpenQuestionIndex((prevIndex) => (prevIndex === i ? null : i));
    setVisibleAnswers((prevVisibleAnswers) => {
      const updatedVisibleAnswers: { [key: number]: response } = {};

      // Cerrar automáticamente respuestas
      Object.keys(prevVisibleAnswers).forEach((indexStr) => {
        const indexToClose = parseInt(indexStr, 10);
        updatedVisibleAnswers[indexToClose] = {
          ...prevVisibleAnswers[indexToClose],
          isVisible: false,
        };
      });

      // Abro la nueva pregunta si no estaba abierta y la cierro si ya estaba abierta
      updatedVisibleAnswers[i] = {
        ...questionsList[i],
        isVisible: !prevVisibleAnswers[i]?.isVisible,
      };
      setIsClicked(true);

      return updatedVisibleAnswers;
    });
  };

  return (
    <div className="flex flex-col gap-5 mt-14">
      <div className="h-[175px] items-center justify-center flex flex-col gap-[30px] relative left-[1000px] title-animation">
        <h2 className="flex flex-col items-center justify-center w-[226px] h-[97px]">
          <span className="w-[226px] md:w-[326px]  h-[46px] md:h-[66px] rounded-[7px] pr-[7px] pl-[7px] text-center text-[36px] md:text-[46px] lead-[45.94px] bg-[#B9FF66] gap-[]">
            Preguntas
          </span>
          <span className="w-[240px] md:w-[280px] h-[51px] md:h-[61px] rounded-[7px] pr-[7px] pl-[7px] text-center text-[40px] lead-[51.04px] gap-[10px] bg-[#B9FF66]">
            Frecuentes
          </span>
        </h2>
        <p className="text-[16px] md:text-[18px] lead-[24px] text-center p-1">
          Verifica las preguntas frecuentes para sacar tus dudas
        </p>
        <Waypoint onEnter={() => handleWaypointToRight(".title-animation")} />
      </div>

      <div className="p-2 flex flex-col gap-3">
        {questionsList.map((quest, index) => (
          <div
            key={quest._id}
            className={`relative left-[1000px] animation-window-${index}`}
          >
            <Waypoint
              onEnter={() =>
                handleWaypointToRight(`.animation-window-${index}`)
              }
            />
            <div
              className={`h-[100px] rounded-[45px] border border-b-4 border-black border-solid flex flex-row items-center justify-around bg-[#F3F3F3]`}
            >
              <p className="text-[30px] md:text-[40px] font-medium">0{index + 1}</p>
              <p className="text-center text-[12px] sm:text-[15px] md:text-[18px]  w-[150px] sm:w-[400px] md:w-[450px] min-[500px]:w-[300px]">
                {quest.question}
              </p>
              <p
                onClick={() => AnswerVisibility(index)}
                className="border border-black rounded-[100%] w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-[20px] flex items-center justify-center cursor-pointer"
              >
                {isClicked && openQuestionIndex === index ? "-" : "+"}
              </p>
            </div>

            <div
              className={`h-[full] rounded-[50px] text-center border-black border-solid flex flex-row items-center justify-around bg-[#B9FF66] transition-all duration-200 ease-in
                 ${
                  visibleAnswers[index]?.isVisible &&
                  openQuestionIndex === index
                    ? "flex h-full p-3"
                    : "h-0"
                }`}
            >
              <p className="text-[12px] sm:text-[16px] md:text-[18px] w-[250px] sm:w-[420px] md:w-[580px] transition-all ease-in duration-150">
                {visibleAnswers[index]?.isVisible
                  ? visibleAnswers[index].response
                  : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
