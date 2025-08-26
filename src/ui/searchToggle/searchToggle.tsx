'use client'

import { useState } from "react";
import './searchToggle.css';

export default function SearchToggle() {

    const [openSearch, setOpenSearch] = useState(false);

    return (
        <div>
            <button type="submit" className="relative cursor-pointer z-1" onClick={() => setOpenSearch(!openSearch)}>
                {openSearch ? 
                <svg fill="#000000" width="25px" height="25px" viewBox="0 0 32.311 32.311" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(-96.951 -642.343)">
                    <path d="M125.2,644.343a2.062,2.062,0,0,1,2.06,2.059v24.191a2.062,2.062,0,0,1-2.06,2.06H101.011a2.063,2.063,0,0,1-2.06-2.06V646.4a2.063,2.063,0,0,1,2.06-2.059H125.2m0-2H101.011a4.059,4.059,0,0,0-4.06,4.059v24.191a4.06,4.06,0,0,0,4.06,4.06H125.2a4.06,4.06,0,0,0,4.06-4.06V646.4a4.059,4.059,0,0,0-4.06-4.059Z"/>
                    <path d="M120.862,667.253a1,1,0,0,1-.707-.293l-15.511-15.51a1,1,0,0,1,1.414-1.414l15.511,15.51a1,1,0,0,1-.707,1.707Z"/>
                    <path d="M105.351,667.253a1,1,0,0,1-.707-1.707l15.511-15.51a1,1,0,0,1,1.414,1.414l-15.511,15.51A1,1,0,0,1,105.351,667.253Z"/>
                    </g>
                </svg>
                : 
                <svg fill="#000000" width="25px" height="25px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z" fillRule="evenodd"/>
                </svg>
                }
            </button>
            {openSearch 
            && 
            <section className="w-full h-full fixed z-0 left-0 top-0 bg-gray-300 flex flex-col items-center justify-center">
                <form action="" className="flex gap-3 items-center border-2 max-w-[980px] w-full mx-10 rounded-[1rem]">
                    <input type="text" placeholder="搜索" className="text-[1.5rem] w-full rounded-l-[1rem] p-1.5"/>
                    <svg fill="#000000" width="25px" height="25px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="px-2 box-content cursor-pointer">
                      <path d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z" fillRule="evenodd"/>
                    </svg>
                </form>
            </section>
            }
            
        </div>
    )
}