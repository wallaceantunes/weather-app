import { VscArrowSmallDown, VscArrowSmallUp } from "react-icons/vsc";
import { WiRaindrop, WiStrongWind } from "react-icons/wi";
import { Select } from "./Select";

export const ModalCenter = ({showModal, setShowModal, ufs, cities}) => {
    return <>
        {showModal ? (
            <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 mx-3 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Selecione a cidade
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-75 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                        >
                            <span className="bg-transparent text-black opacity-75 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto flex-row">
                        <div className="flex-1">
                            <Select label="Estado" options={ufs} name="sigla" value="id" />
                        </div>
                        <div className="flex-1">
                            <Select label="Cidade" options={cities} name="nome" value="codigo_ibge" />
                        </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Salvar
                        </button>
                    </div>
                </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={() => setShowModal(false)}></div>
            </>
        ) : null}
    </> 
}


export const ModalBottom = ({showModal, setShowModal, weather}) => {
    return <>
        {showModal ? (
            <>
            <div
                className="justify-center items-end flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none"
            >
                <div className="relative w-full">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-xl font-semibold">
                            Detalhes
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-75 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                        >
                            <span className="bg-transparent text-black opacity-75 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto flex-row">
                        <div className="flex-1">
                            <VscArrowSmallUp className="inline text-3xl" /> - {(weather.main.temp_max - 273.15).toFixed(0)} °C
                        </div>
                        <div className="flex-1">
                            <VscArrowSmallDown className="inline text-3xl" /> - {(weather.main.temp_min - 273.15).toFixed(0)} °C
                        </div>
                        <div className="flex-1">
                            <WiRaindrop className="inline text-3xl" /> - {weather.main.humidity} %
                        </div>
                        <div className="flex-1">
                            <WiStrongWind className="inline text-3xl" /> - {weather.wind.speed} m/s
                        </div>
                    </div>
                    {/* footer
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Salvar
                        </button>
                    </div> */}
                </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={() => setShowModal(false)}></div>
            </>
        ) : null}
    </> 
}