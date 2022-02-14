import { format } from 'date-fns';
import { useEffect, useState } from "react";
import { VscArrowSmallDown, VscArrowSmallUp, VscChevronUp, VscDebugRestart, VscLocation } from "react-icons/vsc";
import { WiRaindrop, WiStrongWind } from "react-icons/wi";
import solImg from '../../assets/imgs/sol.png';
import { ModalBottom, ModalCenter } from "../../components/Modal";
import { useApiClient } from '../../hooks/api';

export const Home = () => {
    const [showModalCenter, setShowModalCenter] = useState(false)
    const [showModalBottom, setShowModalBottom] = useState(false)
    const [weather, setWeather] = useState(false)
    const [temp, setTemp] = useState(0)
    const apiClient = useApiClient()
    const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=-23.102091&lon=-45.706848&appid=4eea0f281626be4f98d568d2010e59e6'
    const descWeather = {
        'Thunderstorm': 'Trovejando',
        'Drizzle': 'Chuva Fraca',
        'Rain': 'Chovendo',
        'Snow': 'Nevando',
        'Mist': 'Névoa',
        'Smoke': 'Esfumaçado',
        'Haze': 'Com Neblina',
        'Dust': 'Esfumaçado',
        'Fog': 'Névoa',
        'Sand ': 'Esfumaçado',
        'Ash': 'Esfumaçado',
        'Squall': 'Tempestade',
        'Tornado': 'Tornado',
        'Clear': 'Céu Limpo',
        'Clouds': 'Com Nuvens',
    }
    const getWeather = () => {
        apiClient.get(apiUrl)
        .then(response => {
            if (response.status === 200) {
                console.log(response.data)
                const temp = response.data.main.temp - 273.15
                setTemp(temp.toFixed(0))
                setWeather(response.data)
            }
        })
        .catch(error => {console.log(error)})
    }

    useEffect(() => {
        getWeather()
    }, [])

    return weather && <>
        <div className="flex font-semibold items-center lg:space-x-4">
            <div className="flex-none text-2xl cursor-pointer lg:hidden">
                <VscDebugRestart onClick={() => getWeather()}/>
            </div>
            <div className="flex-1 text-center text-xl lg:hidden">Ensolarado</div>
            <div className="flex-none text-right text-2xl cursor-pointer lg:text-3xl">
                <VscLocation onClick={() => setShowModalCenter(true)}/>
            </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row mx-20p">
            <div className="flex-1 flex-col items-center flex space-y-6 lg:space-y-2">
                <div className="flex-1 pt-3 text-2xl text-center font-semibold hidden lg:block">{descWeather[weather.weather[0].main]}</div>
                <div className="flex-1 pt-3 text-base text-center font-medium">{format(new Date(), 'hh:mm a')}</div>
                <div className="flex-1 pt-8 pb-12 text-center lg:pt-4 lg:pb-6">
                    <img
                        src={solImg}
                        alt=""
                        className="rounded-full shadow-xl"
                        style={{ background: '#d9ecf2'}}
                    />
                </div>
                <div className="flex-1 text-2xl text-center font-medium">{format(new Date(), 'dd/MM/yyyy')}</div>
                <div className="flex-1 text-8xl text-center font-semibold">{temp}</div>
                <div className="flex-1 text-2xl text-center font-medium">{weather.name}</div>
                <div className="flex-1 text-4xl text-center font-medium cursor-pointer hidden lg:block">
                    <VscDebugRestart onClick={() => getWeather()}/>
                </div>
            </div>
            {weather.main && weather.wind &&
                <div className="flex-1 flex-row space-x-4 hidden lg:flex">
                    <div className="flex-1 flex flex-col space-y-4">
                        <div className="flex-1 shadow-md p-4"><VscArrowSmallDown className="inline text-2xl" /> - {(weather.main.temp_min - 273.15).toFixed(0)} °C</div>
                        <div className="flex-1 shadow-md  p-4"><WiRaindrop className="inline text-2xl" /> - {weather.main.humidity} %</div>
                    </div>
                    <div className="flex-1 flex flex-col space-y-4">
                        <div className="flex-1 shadow-md  p-4"><VscArrowSmallUp className="inline text-2xl" /> - {(weather.main.temp_max - 273.15).toFixed(0)} °C</div>
                        <div className="flex-1 shadow-md  p-4"><WiStrongWind className="inline text-2xl" /> - {weather.wind.speed} m/s</div>
                    </div>
                </div>
            }
        </div>
        <div className="flex fixed bottom-0 left-0 right-0 text-5xl w-full lg:hidden">
            <div className="flex-1 text-center">
                <VscChevronUp className="inline cursor-pointer" onClick={() => setShowModalBottom(true)}/>
            </div>
        </div>
        <ModalCenter showModal={showModalCenter} setShowModal={setShowModalCenter} />
        <ModalBottom showModal={showModalBottom} setShowModal={setShowModalBottom} weather={weather}/>

    </>
}