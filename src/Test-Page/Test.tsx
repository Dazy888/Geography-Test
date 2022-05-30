import './Styles/Test.css'
import './Styles/Media.css'

function Test() {
    return(
        <div id="wrapper">
            <div className="container">
                <div className="top flex-property-set_between">
                    <div className="top__timer">
                        <i className="fa-regular fa-clock clock-icon"></i>
                        <div className="top__svg">
                            <svg className="top__progress-ring" width="150" height="150">
                                <circle className="top__progress-ring_circle" stroke="rgb(255,94,149)" stroke-width="4"
                                        r="60" fill="transparent" cx="65" cy="65"></circle>
                            </svg>
                            <p className="timer-txt"><span className="min">4</span> <span className="colon">:</span>
                                <span className="sec">00</span> <span className="ms">00</span></p>
                        </div>
                    </div>
                    <div className="top__current-question">
                        <i className="fa-solid fa-clipboard-question current-question-icon"></i>
                        <div className="top__rows">
                            <div className="top__row flex-property-set_between">
                    <span className="top__item flex-property-set_center top__item_selected"> <i
                        className="fa-solid fa-1 num-icon"></i> </span>
                                <span className="top__item flex-property-set_center"> <i
                                    className="fa-solid fa-2 num-icon"></i> </span>
                                <span className="top__item flex-property-set_center"> <i
                                    className="fa-solid fa-3 num-icon"></i> </span>
                                <span className="top__item flex-property-set_center"> <i
                                    className="fa-solid fa-4 num-icon"></i> </span>
                                <span className="top__item flex-property-set_center"> <i
                                    className="fa-solid fa-5 num-icon"></i> </span>
                            </div>

                            <div className="top__row flex-property-set_between">
                                <span className="top__item flex-property-set_center"> <i
                                    className="fa-solid fa-6 num-icon"></i> </span>
                                <span className="top__item flex-property-set_center"> <i
                                    className="fa-solid fa-7 num-icon"></i> </span>
                                <span className="top__item flex-property-set_center"> <i
                                    className="fa-solid fa-8 num-icon"></i> </span>
                                <span className="top__item flex-property-set_center"> <i
                                    className="fa-solid fa-9 num-icon"></i> </span>
                                <span className="top__item flex-property-set_center">
                        <i className="fa-solid fa-1 num-icon"></i>
                        <i className="fa-solid fa-0 num-icon"></i>
                    </span>
                            </div>
                        </div>
                    </div>
                    <div className="top__grades">
                        <i className="fa-solid fa-graduation-cap grades-icon"></i>
                        <p className="grades-txt"><span className="top__grades-count">0</span> Grades</p>
                    </div>
                </div>
                <div className="content">
                    <div className="content__question">
                        <p className="content__txt">What country is the biggest in Europe?</p>
                        <img src="" className="content__img" />
                    </div>
                    <div className="content__answers">
                        <div className="content__option a">
                <span className="content__letter flex-property-set_center"> <i
                    className="fa-solid fa-a letter-icon"></i> </span>
                            <p className="answer-txt">France</p>
                        </div>

                        <div className="content__option b">
                <span className="content__letter flex-property-set_center"> <i
                    className="fa-solid fa-b letter-icon"></i> </span>
                            <p className="answer-txt">Ukraine</p>
                        </div>

                        <div className="content__option c">
                <span className="content__letter flex-property-set_center"> <i
                    className="fa-solid fa-c letter-icon"></i> </span>
                            <p className="answer-txt">Germany</p>
                        </div>

                        <div className="content__option d">
                <span className="content__letter flex-property-set_center"> <i
                    className="fa-solid fa-d letter-icon"></i> </span>
                            <p className="answer-txt">Polish</p>
                        </div>
                    </div>
                    <button className="content__next-btn"><i className="fa-regular fa-circle-right next-icon"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Test