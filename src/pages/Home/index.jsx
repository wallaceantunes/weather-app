import { format } from 'date-fns';
import { useEffect, useState } from "react";
import { VscArrowSmallDown, VscArrowSmallUp, VscChevronUp, VscDebugRestart, VscLocation } from "react-icons/vsc";
import { WiRaindrop, WiStrongWind } from "react-icons/wi";
import ClearImg from '../../assets/imgs/clear.png';
import CloudsImg from '../../assets/imgs/clouds.png';
import RainImg from '../../assets/imgs/rain.png';
import ThImg from '../../assets/imgs/th.png';
import TornadoImg from '../../assets/imgs/tornado.png';
import WindImg from '../../assets/imgs/wind.png';
import { ModalBottom, ModalCenter } from "../../components/Modal";
import { useApiClient } from '../../hooks/api';

export const Home = () => {
    const [showModalCenter, setShowModalCenter] = useState(true)
    const [showModalBottom, setShowModalBottom] = useState(false)
    const [cities, setCities] = useState([])
    const [ufs, setUfs] = useState([])
    const [uf, setUf] = useState(null)
    const [city, setCity] = useState({
        lat: null,
        lon: null
    })
    const [weather, setWeather] = useState(false)
    const [temp, setTemp] = useState(0)
    const apiClient = useApiClient()
    const citiesUrl = 'http://ibge.cplotter.com.br:3008/'
    const ufsUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    const descWeather = {
        'Thunderstorm': {
            name: 'Trovejando',
            img: ThImg
        },
        'Squall': {
            name: 'Tempestade',
            img: ThImg
        },
        'Drizzle': {
            name: 'Chuva Fraca',
            img: RainImg
        },
        'Rain': {
            name: 'Chovendo',
            img: RainImg
        },
        'Smoke': {
            name: 'Esfumaçado',
            img: WindImg
        },
        'Haze': {
            name: 'Com Neblina',
            img: WindImg
        },
        'Dust': {
            name: 'Esfumaçado',
            img: WindImg
        },
        'Fog': {
            name: 'Névoa',
            img: WindImg
        },
        'Sand ': {
            name: 'Esfumaçado',
            img: WindImg
        },
        'Ash': {
            name: 'Esfumaçado',
            img: WindImg
        },
        'Snow': {
            name: 'Nevando',
            img: RainImg
        },
        'Mist': {
            name: 'Névoa',
            img: RainImg
        },
        'Tornado': {
            name: 'Tornado',
            img: TornadoImg
        },
        'Clear': {
            name: 'Céu Limpo',
            img: ClearImg
        },
        'Clouds': {
            name: 'Com Nuvens',
            img: CloudsImg
        },
    }

    const getWeather = (city) => {
        apiClient.get(`http://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=4eea0f281626be4f98d568d2010e59e6`)
        .then(response => {
            if (response.status === 200) {
                const temp = response.data.main.temp - 273.15
                setTemp(temp.toFixed(0))
                setWeather(response.data)
            }
        })
        .catch(error => {console.log(error)})
    }

    const getCities = (uf) => {
        apiClient.get(citiesUrl + uf)
        .then(response => {
            if (response.status === 200) {
                setCities(response.data)
            }
        })
        .catch(error => {console.log(error)})
    }

    const getUfs = () => {
        apiClient.get(ufsUrl)
        .then(response => {
            if (response.status === 200) {
                setUfs(response.data)
            }
        })
        .catch(error => {console.log(error)})
    }

    useEffect(() => {
        getUfs()
    }, [])
    
    useEffect(() => {
        getWeather(city)
    }, [city])
    
    useEffect(() => {
        getCities(uf)
    }, [uf])

    return <>
        {weather && <>
            <div className="flex font-semibold items-center lg:space-x-4">
                <div className="flex-none text-2xl cursor-pointer lg:hidden">
                    <VscDebugRestart onClick={() => getWeather()}/>
                </div>
                <div className="flex-1 text-center text-xl lg:hidden">{descWeather[weather.weather[0].main].name}</div>
                <div className="flex-none text-right text-2xl cursor-pointer lg:text-3xl">
                    <VscLocation onClick={() => setShowModalCenter(true)}/>
                </div>
            </div>
            <div className="flex flex-col items-center lg:flex-row mx-20p">
                <div className="flex-1 flex-col items-center flex space-y-6 lg:space-y-2">
                    <div className="flex-1 pt-3 text-2xl text-center font-semibold hidden lg:block">{descWeather[weather.weather[0].main].name}</div>
                    <div className="flex-1 pt-3 text-base text-center font-medium">{format(new Date(), 'hh:mm a')}</div>
                    <div className="flex-1 pt-8 pb-12 text-center lg:pt-4 lg:pb-6">
                        <img
                            src={descWeather[weather.weather[0].main].img}
                            alt=""
                            className="rounded-full shadow-xl"
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
            <ModalBottom showModal={showModalBottom} setShowModal={setShowModalBottom} weather={weather}/>
        </>
        }
        <ModalCenter showModal={showModalCenter} setShowModal={setShowModalCenter} ufs={ufs} cities={cities} setUf={setUf} setCity={setCity} />
    </>
}