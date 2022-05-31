import './Styles/Test.css'
import './Styles/Media.css'
import React from "react";

type PropsType = {
    circle: React.Ref<any>
    sec: React.Ref<any>
    min: React.Ref<any>
    ms: React.Ref<any>
    answersBl: React.Ref<any>
    rows: React.Ref<any>
    nextBtn: React.Ref<any>
    content: React.Ref<any>
}

function Test({content, circle, sec, min, ms, answersBl, rows, nextBtn}: PropsType) {
    return (
        <div id="wrapper">
            <div className="container">
                <div className="top flex-property-set_between">
                    <div className="top__timer">
                        <i className="fa-regular fa-clock clock-icon"></i>
                        <div className="top__svg">
                            <svg className="top__progress-ring" width="170" height="170">
                                <circle ref={circle} className="top__progress-ring_circle" stroke="rgb(255,94,149)"
                                        strokeWidth="4" r="80" fill="transparent" cx="85" cy="85"/>
                            </svg>
                            <p className="timer-txt"><span className="min" ref={min}>4</span> <span className="colon">:</span>
                                <span className="sec" ref={sec}>00</span> <span className="ms" ref={ms}>00</span></p>
                        </div>
                    </div>
                    <div className="top__current-question">
                        <i className="fa-solid fa-clipboard-question current-question-icon"></i>
                        <div className="top__rows" ref={rows}>
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
                </div>
                <div className="content" ref={content}>
                    <div className="content__question">
                        <p className="content__txt">What country is the biggest in Europe?</p>
                        <img src="../Photos/question-1-img.png" className="content__img"/>
                    </div>
                    <div className="content__answers" ref={answersBl}>
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
                    <button className="content__next-btn" ref={nextBtn}><i className="fa-regular fa-circle-right next-icon"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Test