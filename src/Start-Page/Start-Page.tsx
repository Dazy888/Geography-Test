import Start from "./Start"
import {createRef, useEffect} from "react"
import {useNavigate} from "react-router-dom"

export function StartPage() {
    const wrapper: any = createRef()
    useEffect(() => {
        const welcome: any = wrapper.current.querySelector('.welcome')

        setTimeout(() => {
            wrapper.current.style.backgroundColor = 'rgba(0,0,0,0.9)'
        }, 10)

        setTimeout(() => {
            welcome.classList.add('welcome__load-animation')
        }, 1700)

        function shadowAnimation() {
            if (welcome.classList.contains('big-shadow')) {
                welcome.classList.remove('big-shadow')
                welcome.classList.add('small-shadow')
            } else {
                welcome.classList.remove('small-shadow')
                welcome.classList.add('big-shadow')
            }
        }

        setInterval(shadowAnimation, 800)
    }, [])

    const navigate = useNavigate()
    return <Start wrapper={wrapper} navigate={navigate} />
}