'use client';

import { useState } from "react";
import DataJSON from "../utils/data.json";

export default function lesson() {
    const jsonData = JSON.parse(JSON.stringify(DataJSON));
    const[nameSearch, setNameSearch] = useState("");
    return(
        <main className="flex flex-col items-center h-full w-full gap-5 bg-[url(https://images.wallpapersden.com/image/download/starry-sky-hd-dark-blue-night_bmZpaG2UmZqaraWkpJRnbmZnrWZraGc.jpg)]">
            <div className="flex flex-row items-center justify-start w-full pl-15 mt-5">
                <a href="http://localhost:3000"><img src="https://play-lh.googleusercontent.com/cfckIXjGbzGF7SXOONjbvcWTdO3QnRCwVRT7yOZsILt_U7TeLkK7y1Ug9TTu37-XGg" className="h-15 w-15"></img></a>
                <input value={nameSearch} onChange={(e) => setNameSearch(e.target.value)} placeholder="Welcome to Nest 11A" className="p-1.5 pl-4 ml-5 rounded-full border border-purple-700 text-white outline-none"></input>
            </div>
            
            <div className="grid grid-cols-5 gap-5 mb-86 mt-20 pr-15 pl-15">
                {jsonData.filter((item) => item.First_name.toLowerCase().includes(nameSearch.toLowerCase())).map((item) => (
                    (item.type == "student")
                    ? 
                    <div className="hover:scale-105 border-2 border-purple-700 rounded-xl bg-white cursor-pointer p-3 flex flex-col justify-between" key={item.id}>
                        <div>
                           <div className="flex flex-row justify-between">
                                <p className="font-bold">{item.Last_name[0]}. {item.First_name}</p>
                                <p className="text-purple-700 border-1 border-purple-700 rounded-xl p-2">{item.type}</p>
                            </div>
                            {(item.gender == "male") ? <img src="https://imagedelivery.net/LBWXYQ-XnKSYxbZ-NuYGqQ/7ff29767-f052-40ae-0571-20c89eab6400/banner" className="h-[35%] w-[35%]"></img> : <img src="https://i.redd.it/1y165vhkz1c51.png" className="h-[35%] w-[35%]"></img>}
                            <p>Age: {item.age}</p>
                            {(item.point > 59) ? <p className="text-green-500 font-bold">Grade: {item.point}</p> : <p className="text-red-500 font-bold"> Grade: {item.point}</p>}
                            <p>Gender: {item.gender}</p>
                        </div>
                        
                        <button className="font-bold text-white bg-red-500 rounded-full p-2 mt-5 cursor-pointer ">Details</button>
                    </div>
                    :
                    <div className="hover:scale-105 border-2 border-blue-700 rounded-xl bg-white cursor-pointer p-3 flex flex-col justify-between" key={item.id}>
                        <div>
                            <div className="flex flex-row justify-between">
                                <p className="font-bold">{item.Last_name[0]}. {item.First_name}</p>
                                <p className="text-blue-700 border-1 border-blue-700 rounded-xl p-2">{item.type}</p>
                            </div>
                            <img src="https://tse2.mm.bing.net/th/id/OIP.dcyZasadquPyCfekD9g7jAHaFW?pid=Api&h=220&P=0" className="h-[40%] w-[35%]"></img>
                            <p>Age: {item.age}</p>
                            <p>Gender: {item.gender}</p>
                        </div>

                        <button className="font-bold text-white bg-red-500 rounded-full p-2 mt-5 cursor-pointer ">Details</button>
                    </div>
                ))}
                <div className="col-span-5 flex justify-center">
                    <a href="http://localhost:3000"><button className="text-white text-sm mt-25">click the logo to go to the homepage</button></a>
                </div>
            </div>
        </main>
    );
}