import { useApp } from '@/context/app/useContext'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export default function ProshopPopup() {
    const { viewport } = useApp()

    const wrapperRef = useRef<HTMLDivElement>(null)
    const cardWrapperRef = useRef<HTMLDivElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.set(wrapperRef.current, {
            display: 'none',
        })

        const tl = gsap.timeline({ delay: 2 })

        tl.set(wrapperRef.current, { display: 'flex', zIndex: -100 })

        const ease = () => {
            if (viewport.width >= 1024) {
                return 'back.out(10)'
            } else if (viewport.width >= 728) {
                return 'back.out(5)'
            }
            return 'back.out(3)'
        }

        tl.from(cardWrapperRef.current, {
            duration: 1,
            scale: 0,
            ease: ease(),
        })

        tl.set(wrapperRef.current, { zIndex: 100 })

        tl.from(cardRef.current, {
            opacity: 0,
            duration: 0.5,
        })

        return () => {
            tl.kill()
        }
    }, [])

    return (
        <div
            className="w-screen h-screen fixed bg-black bg-opacity-40 flex items-center justify-center px-3"
            ref={wrapperRef}
        >
            <div
                className="w-full max-w-96 h-96 bg-red-600 rounded-tl-3xl rounded-b-3xl relative overflow-hidden"
                ref={cardWrapperRef}
            >
                <div
                    className="absolute right-0 top-0 bg-primary-dark text-center p-2 rounded-bl-xl cursor-pointer"
                    onClick={() => {
                        wrapperRef.current?.remove()
                    }}
                >
                    <FontAwesomeIcon icon={faTimes} className="text-white fill-white w-5 h-5" />
                </div>
                <div ref={cardRef} className="w-full h-full py-5 flex items-center justify-center">
                    <p className="text-center">Jika Ingin Membawa Cindera Mata, Mohon Yang Mahal</p>
                </div>
            </div>
        </div>
    )
}
