
export default function Credit() {
    return (
        <div className="container flex flex-col items-center justify-center bg-white min-h-[200px] p-[20px] rounded-xl text-xl">
            <p>Created by: 
                <a href="https://github.com/BikramNischal" target="_blank"
                    className="text-blue-500 font-bold">
                    BikramNischal
                </a>
            </p>
            <p className="block">
                API USED: <a href="https://open-meteo.com/en/docs" className="text-blue-500 font-bold">Open-Meteo</a>
            </p>

        </div>
    )
}