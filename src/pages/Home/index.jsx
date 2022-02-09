import { useState } from "react"
import { VscChevronUp, VscDebugRestart, VscLocation } from "react-icons/vsc"
import solImg from '../../assets/imgs/sol.png'
import { ModalBottom, ModalCenter } from "../../components/Modal"

export const Home = () => {
    const [showModalCenter, setShowModalCenter] = useState(false)
    const [showModalBottom, setShowModalBottom] = useState(false)

    return <>
        <div className="flex font-semibold items-center">
            <div className="flex-none text-2xl cursor-pointer">
                <VscLocation onClick={() => setShowModalCenter(true)}/>
            </div>
            <div className="flex-1 text-center text-xl">Ensolarado</div>
            <div className="flex-none text-right text-2xl cursor-pointer" onClick={() => alert('Reload')}>
                <VscDebugRestart />
            </div>
        </div>
        <div className="flex flex-col items-center space-y-6">
            <div className="flex-1 pt-3 text-base text-center font-medium">12:52 PM</div>
            <div className="flex-1 pt-8 pb-12 text-center">
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
        </div>
        <div className="flex fixed bottom-0 left-0 right-0 text-5xl w-full">
            <div className="flex-1 text-center">
                <VscChevronUp className="inline cursor-pointer" onClick={() => setShowModalBottom(true)}/>
            </div>
        </div>
        <ModalCenter showModal={showModalCenter} setShowModal={setShowModalCenter} />
        <ModalBottom showModal={showModalBottom} setShowModal={setShowModalBottom} />

    </>
}