"use client"
import { getQuestions } from '@/utils/question.utils';
import React, { useEffect, useState } from 'react';

const Questions = (): React.ReactElement => {
    const [questionsList, setQuestionList] = useState<Array<{}>>([]);

    useEffect(() => {
        const fetchData = async () => {
            const quests = await getQuestions()
            
            setQuestionList(quests)
        }
        fetchData();
        

    }, [])
    console.log(questionsList);
    return (
        <div>
            <div className='h-[175px] items-center justify-center flex flex-col gap-[30px]'>
                <h2 className='flex flex-col items-center justify-center w-[226px] h-[97px]'>
                    <span className='w-[226px]  h-[46px] rounded-[7px] pr-[7px] pl-[7px] text-center text-[36px] lead-[45.94px] bg-[#B9FF66] gap-[]'>Preguntas</span>
                    <span className='w-[240px] h-[51px] rounded-[7px] pr-[7px] pl-[7px] text-center text-[40px] lead-[51.04px] gap-[10px] bg-[#B9FF66]'>Frecuentes</span>
                </h2>
                <p className='text-[16px] lead-[24px] text-center'>Podes las preguntas mas comunes que hacen nuestros clientes</p>
            </div>
            
            <div>

            </div>

        </div>
    );
};

export default Questions;