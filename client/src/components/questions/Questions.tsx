"use client"
import { getQuestions } from '@/utils/question.utils';
import React, { useEffect, useState } from 'react';
import questInterface from './question.interface';

interface response {
    response: string,
    isVisible: boolean
}

const Questions = (): React.ReactElement => {
    const [questionsList, setQuestionList] = useState<Array<questInterface>>([]);
    const [visibleAnswers, setVisibleAnswers] = useState<{ [key: number]: response }>({});

    useEffect(() => {
        const fetchData = async () => {
            const quests = await getQuestions()
            setQuestionList(quests.question)
        }
        fetchData();
    }, [])

    const AnswerVisibility = (i: number) => {
        setVisibleAnswers((prevVisibleAnswers) => {
            const updatedVisibleAnswers = { ...prevVisibleAnswers };
            updatedVisibleAnswers[i] = { ...questionsList[i], isVisible: !prevVisibleAnswers[i]?.isVisible };
            return updatedVisibleAnswers;
        });
    };

    return (
        <div className='flex flex-col gap-5'>
            <div className='h-[175px] items-center justify-center flex flex-col gap-[30px]'>
                <h2 className='flex flex-col items-center justify-center w-[226px] h-[97px]'>
                    <span className='w-[226px]  h-[46px] rounded-[7px] pr-[7px] pl-[7px] text-center text-[36px] lead-[45.94px] bg-[#B9FF66] gap-[]'>Preguntas</span>
                    <span className='w-[240px] h-[51px] rounded-[7px] pr-[7px] pl-[7px] text-center text-[40px] lead-[51.04px] gap-[10px] bg-[#B9FF66]'>Frecuentes</span>
                </h2>
                <p className='text-[16px] lead-[24px] text-center p-1'>Verifica las preguntas frecuentes para sacar tus dudas</p>
            </div>

            <div className=' h-[712px] p-2 flex flex-col gap-3'>
                {questionsList.map((quest, index) => (
                    <div key={quest._id}>
                        <div
                            className='h-[100px] rounded-[45px] border border-b-4 border-black border-solid flex flex-row items-center justify-around bg-[#F3F3F3]'
                        >
                            <p className='text-[30px]'>{index}</p>
                            <p className='lead-[22.97px] text-center text-[12px] w-[150px] min-[500px]:w-[300px]'>{quest.question}</p>
                            <p
                                onClick={() => AnswerVisibility(index)}
                                className='border border-black rounded-[100%] w-[30px] h-[30px] text-[20px] flex items-center justify-center'>+
                            </p>
                        </div>

                        <div
                            className={`h-[120px] rounded-[50px] text-center border-black border-solid flex flex-row items-center justify-around bg-[#B9FF66] 
                ${visibleAnswers[index]?.isVisible ? 'block' : 'hidden'}`}
                        >
                            <p className='text-[12px] w-[250px]  '>
                                {visibleAnswers[index]?.response}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Questions;