import { useState } from "react"
import { VscChevronUp, VscDebugRestart, VscLocation } from "react-icons/vsc"
import solImg from '../../assets/imgs/sol.png'
import { ModalBottom, ModalCenter } from "../../components/Modal"

export const Home = () => {
    const [showModalCenter, setShowModalCenter] = useState(false)
    const [showModalBottom, setShowModalBottom] = useState(false)

    return <>
        <div className="flex font-semibold items-center lg:space-x-4">
            <div className="flex-none text-2xl cursor-pointer lg:hidden">
                <VscDebugRestart onClick={() => alert('Reload')}/>
            </div>
            <div className="flex-1 text-center text-xl lg:hidden">Ensolarado</div>
            <div className="flex-none text-right text-2xl cursor-pointer lg:text-3xl">
                <VscLocation onClick={() => setShowModalCenter(true)}/>
            </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row mx-20p">
            <div className="flex-1 flex-col items-center flex space-y-6 lg:space-y-2">
                <div className="flex-1 pt-3 text-2xl text-center font-semibold hidden lg:block">Ensolarado</div>
                <div className="flex-1 pt-3 text-base text-center font-medium">12:52 PM</div>
                <div className="flex-1 pt-8 pb-12 text-center lg:pt-4 lg:pb-6">
                    <img
                        src={solImg}
                        alt=""
                        className="rounded-full shadow-xl"
                        style={{ background: '#d9ecf2'}}
                    />
                </div>
                <div className="flex-1 text-2xl text-center font-medium">04/02/2022</div>
                <div className="flex-1 text-8xl text-center font-semibold">25</div>
                <div className="flex-1 text-2xl text-center font-medium">Caçapava</div>
                <div className="flex-1 text-4xl text-center font-medium cursor-pointer hidden lg:block">
                    <VscDebugRestart onClick={() => alert('Reload')}/>
                </div>
            </div>
            <div className="flex-1 flex-row space-x-4 hidden lg:flex">
                <div className="flex-1 flex flex-col space-y-4">
                    <div className="flex-1 shadow-md  p-4">Icone - texto</div>
                    <div className="flex-1 shadow-md  p-4">Icone - texto</div>
                    <div className="flex-1 shadow-md  p-4">Icone - texto</div>
                </div>
                <div className="flex-1 flex flex-col space-y-4">
                    <div className="flex-1 shadow-md  p-4">Icone - texto</div>
                    <div className="flex-1 shadow-md  p-4">Icone - texto</div>
                    <div className="flex-1 shadow-md  p-4">Icone - texto</div>
                </div>
            </div>
        </div>
        <div className="flex fixed bottom-0 left-0 right-0 text-5xl w-full lg:hidden">
            <div className="flex-1 text-center">
                <VscChevronUp className="inline cursor-pointer" onClick={() => setShowModalBottom(true)}/>
            </div>
        </div>
        <ModalCenter showModal={showModalCenter} setShowModal={setShowModalCenter} />
        <ModalBottom showModal={showModalBottom} setShowModal={setShowModalBottom} />

    </>
}