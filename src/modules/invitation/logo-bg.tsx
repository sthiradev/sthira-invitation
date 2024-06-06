import { CornerFloral } from '@/assets/icons'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Flip from 'gsap/dist/Flip'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'
import styles from './styles/style.module.css'
import { MenuBaseProps } from './types/menu-base-props'

const SNWhiteLogoOnly = () => {
    return (
        <svg viewBox="0 0 502 502" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M251 468C370.846 468 468 370.846 468 251C468 131.154 370.846 34 251 34C131.154 34 34 131.154 34 251C34 370.846 131.154 468 251 468Z"
                stroke="white"
                strokeDasharray="7 7"
            />
            <path
                d="M251 497C386.862 497 497 386.862 497 251C497 115.138 386.862 5 251 5C115.138 5 5 115.138 5 251C5 386.862 115.138 497 251 497Z"
                stroke="white"
            />
            <path
                d="M82.3418 281.698H86.2725C87.07 296.282 92.9375 308.301 103.875 317.758C114.585 327.1 126.889 331.771 140.789 331.771C151.499 331.771 160.215 328.752 166.937 322.714C173.659 316.675 177.02 309.441 177.02 301.01C177.02 292.123 173.772 285.23 167.278 280.331C161.012 275.546 148.65 270.134 130.193 264.096C115.382 259.197 104.843 255.152 98.5771 251.962C91.2855 248.202 85.5889 243.132 81.4873 236.752C77.0439 230.258 74.8223 222.966 74.8223 214.877C74.8223 205.876 77.8415 197.047 83.8799 188.388C82.5127 192.831 81.8291 196.705 81.8291 200.009C81.8291 208.896 83.9368 216.7 88.1523 223.422C92.4818 230.372 97.8366 235.613 104.217 239.145C110.597 242.79 121.25 246.949 136.175 251.62C155.657 257.545 169.728 264.096 178.387 271.273C186.704 278.223 190.862 287.566 190.862 299.301C190.862 310.808 186.533 321.233 177.874 330.575C169.101 340.032 155.999 344.76 138.567 344.76C131.504 344.76 121.705 343.45 109.173 340.829C98.2354 338.55 90.0322 337.354 84.5635 337.24L83.3672 335.873C83.4811 333.936 83.5381 331.43 83.5381 328.354C83.5381 324.708 83.1963 319.068 82.5127 311.435C81.943 303.801 81.6582 298.104 81.6582 294.345C81.6582 289.446 81.8861 285.23 82.3418 281.698ZM202.996 210.263H199.407C199.293 197.047 194.052 187.248 183.685 180.868C173.545 174.602 161.24 171.469 146.771 171.469C135.263 171.469 125.807 173.918 118.401 178.817C110.882 183.716 107.122 189.584 107.122 196.42C107.122 203.712 110.084 209.465 116.009 213.681C122.161 218.238 134.295 223.65 152.41 229.916C169.272 235.727 181.064 240.455 187.786 244.101C194.964 248.088 200.945 253.785 205.73 261.19C210.516 268.824 212.908 277.312 212.908 286.654C212.908 300.896 207.667 312.061 197.186 320.15C201.059 314.796 202.996 307.276 202.996 297.592C202.996 288.477 200.888 280.388 196.673 273.324C192.229 266.146 186.761 260.45 180.267 256.234C173.659 251.905 162.892 247.291 147.967 242.392C125.522 234.986 110.882 228.663 104.046 223.422C97.21 218.067 93.792 209.75 93.792 198.471C93.792 185.482 99.0329 175.285 109.515 167.88C119.996 160.702 134.865 157.113 154.119 157.113C167.221 157.113 183.229 159.392 202.142 163.949V165.146L202.483 171.64C202.483 175.058 202.597 179.159 202.825 183.944C203.167 189.755 203.338 194.882 203.338 199.325C203.338 202.287 203.224 205.933 202.996 210.263ZM399.543 312.289L221.979 160.873H242.146L385.871 283.236V212.313C385.871 200.465 385.074 191.35 383.479 184.97C381.883 178.931 378.636 173.861 373.737 169.76C368.838 165.772 362.572 163.152 354.938 161.898V158.822C355.052 158.822 357.046 158.993 360.92 159.335C375.845 160.36 385.985 160.873 391.34 160.873C396.239 160.873 407.917 160.189 426.374 158.822V161.898C420.45 162.696 415.266 165.146 410.822 169.247C406.493 173.121 403.531 177.906 401.936 183.603C400.34 189.413 399.543 197.559 399.543 208.041V312.289ZM202.668 160.873L399.543 329.037V343.051H396.125L241.291 211.288V290.756C241.291 308.074 243.513 320.093 247.956 326.815C252.399 333.537 259.406 337.924 268.977 339.975V343.051C251.773 341.684 240.095 341 233.942 341C226.993 341 216.511 341.684 202.497 343.051V339.975C212.295 337.696 218.96 333.082 222.492 326.132C226.024 319.182 227.79 306.877 227.79 289.218L227.619 200.009L215.314 189.584C198.225 175.001 183.812 165.772 172.077 161.898V158.822L202.668 160.873Z"
                fill="white"
            />
        </svg>
    )
}

export default function LogoBackground({}: MenuBaseProps) {
    const logoBg = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const sections = gsap.utils.toArray<HTMLElement>('section.invitation')

        sections.forEach(section => {
            ScrollTrigger.create({
                trigger: section,
                start: 'top top',
                end: 'top top',
                markers: true,
                onEnter: () => {
                    moveLogoBg()
                },
                onEnterBack: () => {
                    moveLogoBg()
                },
            })
        })
    }, [])

    const moveLogoBg = () => {
        if (!logoBg.current) {
            return
        }

        const state = Flip.getState(logoBg.current)

        if (logoBg.current.classList.contains(styles.right)) {
            logoBg.current.classList.remove(styles.right)
            logoBg.current.classList.add(styles.left)
        } else {
            logoBg.current.classList.remove(styles.left)
            logoBg.current.classList.add(styles.right)
        }

        Flip.from(state, {
            duration: 2,
            ease: 'back',
            opacity: 0.1,
            rotate: 360,
        })
    }

    return (
        <>
            <div className={`${styles.bgLogo} ${styles.right}`} id="invitation-logo-bg" ref={logoBg}>
                <div className="w-full">
                    <SNWhiteLogoOnly />
                </div>
            </div>
            <div className="fixed top-0 left-0 w-16 h-16 opacity-40">
                <CornerFloral className="fill-white rotate-90" />
            </div>
            <div className="fixed bottom-0 right-0 w-16 h-16 opacity-40">
                <CornerFloral className="fill-white -rotate-90" />
            </div>
        </>
    )
}
