"use client";
import getMoreInfo from "@/utils/MoreInfoEmail";
import React, { useState } from "react";

const BookingsButton = (): React.ReactElement => {
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [emailAlert, setEmailAlert] = useState<string>("");
  const [emailStatus, setEmailStatus] = useState<string>('');

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleClick = () => setIsInputVisible(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const handleInputBlur = async () => {
    if (inputValue === "") {
      setIsInputVisible(false);
    } else {
      if (isValidEmail(inputValue)) {
        setEmailStatus('Enviando...');
        const moreInfo = await getMoreInfo(inputValue);
        if (moreInfo.status === 0) {
          setInputValue("");
          setEmailAlert("Email enviado.");
          setEmailStatus('');
          setIsInputVisible(false);
          setTimeout(() => {
            setEmailAlert("");
          }, 3000);
        } else setInputValue(inputValue);
      } else {
        setEmailAlert("Email incorrecto.");
        setTimeout(() => {
          setEmailAlert("");
        }, 3000);
      }
    }
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      await handleInputBlur();
    }
  };

  return (
    <div>
      {isInputVisible ? (
        <input
          type="email"
          name="email"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          placeholder="Email"
          className="w-[280px] h-[68px] p-4 flex items-center justify-center rounded-[14px] outline-none text-white text-lg bg-[#191A23] placeholder:text-center"
        />
      ) : (
        <button
          onClick={handleClick}
          className="w-[280px] h-[68px] flex items-center justify-center rounded-[14px] text-center text-white bg-[#191A23] transition-all ease-in duration-150"
        >
          Obten más información
        </button>
      )}
      <div className={`text-left ml-2 mt-2 ${emailStatus !== '' ? 'animate-pulse' : '' }`}>
        <span
          className={
            emailAlert === "Email incorrecto."
              ? "text-red-500 font-bold"
              : "text-green-500 font-bold"
          }
        >
          {emailStatus ? emailStatus : ''}
          {emailAlert === "Email incorrecto." ? emailAlert : emailAlert}
        </span>
      </div>
    </div>
  );
};

export default BookingsButton;
