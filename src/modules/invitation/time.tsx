import Countdown from 'react-countdown'
import TimeCountdown from './time-countdown'
import { MenuBaseProps } from './types/menu-base-props'
import { useEffect, useState } from 'react'
import Clock from 'react-clock'
import { useGSAP } from '@gsap/react'
import Flip from 'gsap/dist/Flip'

const openingDate = new Date('2024-06-07T09:30:00')

export default function InvitationTime(props: MenuBaseProps) {
    const [value, setValue] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    useGSAP(() => {
        Flip.fit('#clock', '#invitation-logo-bg', {
            duration: 2,
            ease: 'back',
        })
    }, [])

    return (
        <div className="w-full h-full overflow-hidden flex items-center justify-center">
            <div className="absolute w-full h-full -z-10 flex items-center justify-center">
                <div className="max-w-96 h-96 w-full md:w-[36rem] md:h-[36rem]" id="clock">
                    <Clock value={value} size="100%" />
                </div>
            </div>
            <div className="container mx-auto flex flex-col items-center">
                <Countdown
                    date={openingDate}
                    renderer={countdownProps => <TimeCountdown {...props} {...countdownProps} />}
                />
            </div>
        </div>
    )
}
