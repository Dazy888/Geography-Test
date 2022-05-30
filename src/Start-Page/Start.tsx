import './Styles/Start.css'
import './Styles/Media.css'
import {createRef} from "react";
import {useNavigate} from "react-router-dom";

function Start() {
    const wrapper: any = createRef()
    const welcome: any = createRef()

    setTimeout(() => {
        wrapper.current.style.backgroundColor = 'rgba(0,0,0,0.9)'
    }, 10)
    setTimeout(() => {
        welcome.current.classList.add('welcome__load-animation')
    }, 1700)

    function shadowAnimation() {
        if (welcome.current) {
            if (welcome.current.classList.contains('big-shadow')) {
                welcome.current.classList.remove('big-shadow')
                welcome.current.classList.add('small-shadow')
            } else {
                welcome.current.classList.remove('small-shadow')
                welcome.current.classList.add('big-shadow')
            }
        }
    }

    setInterval(shadowAnimation, 800)

    const navigate = useNavigate()
    function startTest() {
        navigate('/test')
    }

    return (
        <div id="wrapper" className="flex-property-set" ref={wrapper}>
            <div className="welcome flex-property-set" ref={welcome}>
                <div className="welcome__content">
                    <p className="welcome__txt">Welcome : Do you want to start taking the test?</p>
                    <hr className="welcome__line"/>
                    <button className="welcome__btn" onClick={startTest}>Start</button>
                </div>
            </div>
        </div>
    )
}

export default Start