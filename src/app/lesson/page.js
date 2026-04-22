import DataJSON from "../utils/data.json";

export default function lesson() {
    const jsonData = JSON.parse(JSON.stringify(DataJSON));
    console.log(jsonData);
    return(
        <div className=" container h-screen w-screen">
            <main className="flex flex-col items-center justify-center h-screen w-screen gap-5">
                <img src="https://nhs.edu.mn/favicon.ico" className="mt-300"></img>

                <div className="grid grid-cols-5 gap-5">
                    {jsonData.map((item) => (
                        <div className="p-8 border rounded-xl bg-white cursor-pointer hover:bg-black " key={item.id}>
                            <div className="flex flex-row items-between bg-black">
                                <h2 className="font-bold">{item.First_name}</h2>
                                <div>Student</div>
                            </div>
                            <img src="https://tse2.mm.bing.net/th/id/OIP.dcyZasadquPyCfekD9g7jAHaFW?pid=Api&h=220&P=0" className="h-[35%] w-[50%]"></img>
                            <p>Type: {item.type}</p>
                            <p>Point: {item.point}</p>
                            <p>Created: {item.created_at}</p>
                            <button className="w-auto h-auto bg-red-500 text-white p-2 text-sm font-bold cursor-pointer hover:bg-red-800 rounded-2xl">Delete</button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}