export default function Weather() {
    return(
        <div class="w-full h-screen grid grid-cols-13 gap-2 bg-slate-900 p-2">
            <div class=" h-full w-full bg-blue-950 rounded-xl flex flex-col items-center">
                <img alt="" src="https://cdn-icons-png.flaticon.com/512/5024/5024369.png" class="w-[50%] h-[7%] bg-blue-900 rounded-xl p-2 mt-5"></img>
                <div class=" w-full h-[50%] flex flex-col mt-10">
                    <div class="w-[60%] h-[30%] flex items-center ml-5 flex-col">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/3406/3406977.png" class="h-[50%] w-[50%]"></img>
                        <p class="text-blue-300">Weather</p>
                    </div>
                    <div class="w-[60%] h-[30%] flex items-center ml-5 flex-col">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/561/561184.png" class="h-[35%] w-[50%]"></img>
                        <p class="text-blue-300">Cities</p>
                    </div>
                    <div class="w-[60%] h-[30%] flex items-center ml-5 flex-col">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/876/876205.png" class="h-[35%] w-[50%]"></img>
                        <p class="text-blue-300">Map</p>
                    </div>
                    <div class="w-[60%] h-[30%] flex items-center ml-5 flex-col">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/992/992668.png" class="h-[35%] w-[50%]"></img>
                        <p class="text-blue-300">Settings</p>
                    </div>
                </div>
                
            </div>
            <div class=" h-full w-full bg-slate-900 col-span-8 rounded-xl flex flex-col"> 
                <input placeholder="Search for cities" class="w-full h-[5%] bg-blue-950 rounded-xl text-blue-300 pl-5 font-bold text-sm p-5"></input>
                <div class="w-full h-[30%] bg-slate-900 flex justify-between p-5 pl-10 mt-3">
                    <div class="flex flex-col justify-between">
                        <div class="flex flex-col">
                            <p class="text-3xl text-blue-300 font-bold">Madrid</p>
                            <p class="text-sm text-blue-300">Chance of rain: 0%</p>
                        </div>
                        <p class="text-5xl text-blue-300 font-bold">31*</p>
                    </div>
                    <img alt="" src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png" class="mr-10"></img>
                </div>
                <div class="w-full h-[30%] bg-blue-950 flex flex-col justify-between p-5 mt-3 rounded-xl">
                    <div class="flex flex-col">
                        <p class="text-xs text-blue-300 font-bold">TODAY S FORECAST</p>
                        <div class=" w-full h-full mt-5 flex flex-row flex justify-center">
                            <div class="  flex items-center flex-col">
                                <p class="text-sm text-blue-300 font-bold">6:00 AM</p>
                                <img alt="" src="https://cdn-icons-png.flaticon.com/128/14440/14440334.png" class="w-15 h-15"></img>
                                <p className="text-xl text-white font-bold">25*</p>
                            </div>
                            <div class="h-full w-0.5 bg-blue-200 ml-7"></div>

                            <div className=" flex items-center flex-col ml-7">
                                <p className="text-sm text-blue-300 font-bold">9:00 AM</p>
                                <img alt="" src="https://cdn-icons-png.flaticon.com/128/1163/1163661.png" class="w-15 h-15"></img>
                                <p className="text-xl text-white font-bold">28*</p>
                            </div>
                            <div class="h-full w-0.5 bg-blue-200 ml-7"></div>

                            <div className=" flex items-center flex-col ml-7">
                                <p className="text-sm text-blue-300 font-bold">12:00 PM</p>
                                <img alt="" src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png" className="w-15 h-15"></img>
                                <p className="text-xl text-white font-bold">33*</p>
                            </div>
                            <div class="h-full w-0.5 bg-blue-200 ml-7"></div>

                            <div class=" flex items-center flex-col ml-7">
                                <p class="text-sm text-blue-300 font-bold">3:00 PM</p>
                                <img alt="" src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png" class="w-15 h-15"></img>
                                <p class="text-xl text-white font-bold">34*</p>
                            </div>
                            <div class="h-full w-0.5 bg-blue-200 ml-7"></div>

                            <div class=" flex items-center flex-col ml-7">
                                <p class="text-sm text-blue-300 font-bold">6:00 PM</p>
                                <img alt="" src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png" class="w-15 h-15"></img>
                                <p class="text-xl text-white font-bold">32*</p>
                            </div>
                            <div class="h-full w-0.5 bg-blue-200 ml-7"></div>

                            <div class=" flex items-center flex-col ml-7">
                                <p class="text-sm text-blue-300 font-bold">9:00 PM</p>
                                <img alt="" src="https://cdn-icons-png.flaticon.com/128/1163/1163661.png" class="w-15 h-15"></img>
                                <p class="text-xl text-white font-bold">30*</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div class="w-full h-full bg-blue-950 rounded-xl mt-3 p-3">
                    <div class="w-full h-auto flex flex-row justify-between items-center">
                        <p class="text-blue-300 font-bold text-xs">AIR CONDITIONS</p>
                        <button class="bg-blue-500 text-blue-300 p-2 font-bold text-xs rounded-full pl-5 pr-5"> See more</button>
                    </div>
                    <div class="h-[80%] w-full  mt-3 grid grid-cols-2 ml-10">
                        <div >
                            <p class="font-semibold text-blue-400">Real Feel</p>
                            <p class="font-bold text-2xl text-blue-300">30*</p>
                        </div>
                        <div>
                            <p class="font-semibold text-blue-400">Wind</p>
                            <p class="font-bold text-2xl text-blue-300">0.3 km/h</p>
                        </div>
                        <div>
                            <p class="font-semibold text-blue-400">Chance of rain</p>
                            <p class="font-bold text-2xl text-blue-300">0%</p>
                        </div>
                        <div>
                            <p class="font-semibold text-blue-400">UV Index</p>
                            <p class="font-bold text-2xl text-blue-300">3</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" h-auto w-full bg-blue-950 col-span-4 rounded-xl mt-14 p-8">
                <p class="font-bold text-xs text-blue-300">7-DAY FORECAST</p>
                <div class="w-full flex flex-row justify-between items-center mt-5">
                    <p class="text-blue-300 text-sm">Today</p>
                    <div class="w-auto flex flex-row justify-center items-center">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png" class="w-[20%] h-[20%]"></img>
                        <p class="text-white font-bold text-sm ml-5">Sunny</p>
                    </div>
                    <p class="text-blue-300 text-sm"><a class="text-white font-bold text-sm">36</a>/22</p>
                </div>
                <div class="w-full h-[0.1%] bg-blue-300 mt-4 mb-4"></div>

                <div class="w-full flex flex-row justify-between items-center mt-5">
                    <p class="text-blue-300 text-sm">Tue</p>
                    <div class="w-auto flex flex-row justify-center items-center">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png" class="w-[20%] h-[20%]"></img>
                        <p class="text-white font-bold text-sm ml-5">Sunny</p>
                    </div>
                    <p class="text-blue-300 text-sm"><a class="text-white font-bold text-sm">37</a>/21</p>
                </div>
                <div class="w-full h-[0.1%] bg-blue-300 mt-4 mb-4"></div>

                <div class="w-full flex flex-row justify-between items-center mt-5">
                    <p class="text-blue-300 text-sm">Wed</p>
                    <div class="w-auto flex flex-row justify-center items-center">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png" class="w-[20%] h-[20%]"></img>
                        <p class="text-white font-bold text-sm ml-5">Sunny</p>
                    </div>
                    <p class="text-blue-300 text-sm"><a class="text-white font-bold text-sm">37</a>/21</p>
                </div>
                <div class="w-full h-[0.1%] bg-blue-300 mt-4 mb-4"></div>

                <div class="w-full flex flex-row justify-between items-center mt-5">
                    <p class="text-blue-300 text-sm">Thu</p>
                    <div class="w-auto flex flex-row justify-center items-center">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/14440/14440334.png" class="w-[20%] h-[20%]"></img>
                        <p class="text-white font-bold text-sm ml-5">Cloudy</p>
                    </div>
                    <p class="text-blue-300 text-sm"><a class="text-white font-bold text-sm">37</a>/21</p>
                </div>
                <div class="w-full h-[0.1%] bg-blue-300 mt-4 mb-4"></div>

                <div class="w-full flex flex-row justify-between items-center mt-5">
                    <p class="text-blue-300 text-sm">Fri</p>
                    <div class="w-auto flex flex-row justify-center items-center">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/14440/14440334.png" class="w-[20%] h-[20%]"></img>
                        <p class="text-white font-bold text-sm ml-5">Cloudy</p>
                    </div>
                    <p class="text-blue-300 text-sm"><a class="text-white font-bold text-sm">37</a>/21</p>
                </div>
                <div class="w-full h-[0.1%] bg-blue-300 mt-4 mb-4"></div>

                <div class="w-full flex flex-row justify-between items-center mt-5">
                    <p class="text-blue-300 text-sm">Sat</p>
                    <div class="w-auto flex flex-row justify-center items-center">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/4088/4088981.png" class="w-[20%] h-[20%]"></img>
                        <p class="text-white font-bold text-sm ml-5">Rainy</p>
                    </div>
                    <p class="text-blue-300 text-sm"><a class="text-white font-bold text-sm">37</a>/21</p>
                </div>
                <div class="w-full h-[0.1%] bg-blue-300 mt-4 mb-4"></div>

                <div class="w-full flex flex-row justify-between items-center mt-5">
                    <p class="text-blue-300 text-sm">Sun</p>
                    <div className="w-auto flex flex-row justify-center items-center">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/3982/3982078.png" className="w-[20%] h-[20%]"></img>
                        <p className="text-white font-bold text-sm ml-5">Stormy</p>
                    </div>
                    <p className="text-blue-300 text-sm"><a class="text-white font-bold text-sm">37</a>/21</p>
                </div>
            </div>
        </div>
    );
}