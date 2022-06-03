import './Styles/Start.css'
import './Styles/Media.css'
import React from "react";

type PropsType = {
    wrapper: React.Ref<any>
    navigate: (url: string) => void
}

function Start({wrapper, navigate}: PropsType) {
    return (
        <div id="start-wrapper" className="flex-property-set" ref={wrapper}>
            <div className="welcome flex-property-set">
                <div className="welcome__content">
                    <p className="welcome__txt">Welcome : Do you want to start taking the test?</p>
                    <hr className="welcome__line"/>
                    <button className="welcome__btn" onClick={() => navigate('/test')}>Start</button>
                </div>
            </div>
        </div>
    )
}

export default Start