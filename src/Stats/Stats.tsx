import './Styles/Stats.css'
import React from "react";

type PropsType = {
    grades: number
    answersBl: React.Ref<any>
    restart: React.Ref<any>
}

function Stats({restart, grades, answersBl}: PropsType) {
    return (
        <div id={'stats-wrapper'}>
            <div className="gratitude">
                <p className="gratitude__txt">Thanks for passing the test</p>
                <p className={'gratitude__grades'}>You earned <span className={'grades'}>{grades}</span> of 10 grades
                </p>
            </div>
            <div className="answers" ref={answersBl}>
                <div className={'answers__row'}>
                    <p className="answers__question">What country is the biggest in Europe</p>
                    <p className={'answers__number'}>1</p>
                    <div className="answers__content">
                        <div className="answers__bl">
                            <span> <i className="fa-solid fa-a letter"></i> </span>
                            <p className="answers__txt answer">France</p>
                            <p className="answers__txt">543.940 km²</p>
                        </div>
                        <div className="answers__bl">
                            <span className="round"> <i className="fa-solid fa-b letter"></i> </span>
                            <p className="answers__txt answer">Ukraine</p>
                            <p className="answers__txt">603.548 km²</p>
                        </div>
                        <div className="answers__bl">
                            <span> <i className="fa-solid fa-c letter"></i> </span>
                            <p className="answers__txt answer">Germany</p>
                            <p className="answers__txt">357.588 km²</p>
                        </div>
                        <div className="answers__bl">
                            <span> <i className="fa-solid fa-d letter"></i> </span>
                            <p className="answers__txt answer">Poland</p>
                            <p className="answers__txt">312.679 km²</p>
                        </div>
                    </div>
                </div>
                <div className="answers__row">
                    <p className="answers__question">What lake is the biggest in Europe</p>
                    <p className={'answers__number'}>2</p>
                    <div className="answers__content">
                        <div className="answers__bl">
                            <span className="round"> <i className="fa-solid fa-a letter"></i> </span>
                            <p className="answers__txt answer">Caspian Sea</p>
                            <p className="answers__txt">371.000 km²</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-b letter"></i> </span>
                            <p className="answers__txt answer">Onega</p>
                            <p className="answers__txt">9.700 km²</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-c letter"></i> </span>
                            <p className="answers__txt answer">Vanern</p>
                            <p className="answers__txt">5.650 km²</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-d letter"></i> </span>
                            <p className="answers__txt answer">Ladoga</p>
                            <p className="answers__txt">17.700 km²</p>
                        </div>
                    </div>
                </div>
                <div className="answers__row">
                    <p className="answers__question">What mountain is the biggest in Europe</p>
                    <p className={'answers__number'}>3</p>
                    <div className="answers__content">
                        <div className="answers__bl">
                            <span className="round"> <i className="fa-solid fa-a letter"></i> </span>
                            <p className="answers__txt answer">Elbrus</p>
                            <p className="answers__txt">5.642 m</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-b letter"></i> </span>
                            <p className="answers__txt answer">Shikhar</p>
                            <p className="answers__txt">5.193 m</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-c letter"></i> </span>
                            <p className="answers__txt answer">Konstan-Tau</p>
                            <p className="answers__txt">5.144 m</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-d letter"></i> </span>
                            <p className="answers__txt answer">Mont Blanc</p>
                            <p className="answers__txt">4.809 m</p>
                        </div>
                    </div>
                </div>
                <div className="answers__row">
                    <p className="answers__question">What river is the longest in Europe</p>
                    <p className={'answers__number'}>4</p>
                    <div className="answers__content">
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-a letter"></i> </span>
                            <p className="answers__txt answer">Ural</p>
                            <p className="answers__txt">2.428 km</p>
                        </div>
                        <div className="answers__bl">
                            <span className="round"> <i className="fa-solid fa-b letter"></i> </span>
                            <p className="answers__txt answer">Volga</p>
                            <p className="answers__txt">3.530 km</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-c letter"></i> </span>
                            <p className="answers__txt answer">Dynpro</p>
                            <p className="answers__txt">2.201 km</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-d letter"></i> </span>
                            <p className="answers__txt answer">Belay</p>
                            <p className="answers__txt">1.430 km</p>
                        </div>
                    </div>
                </div>
                <div className="answers__row">
                    <p className="answers__question">What island is the biggest in the world</p>
                    <p className={'answers__number'}>5</p>
                    <div className="answers__content">
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-a letter"></i> </span>
                            <p className="answers__txt answer">Madagascar</p>
                            <p className="answers__txt">587.041 km²</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-b letter"></i> </span>
                            <p className="answers__txt answer">New Guinea</p>
                            <p className="answers__txt">786.000 km²</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-c letter"></i> </span>
                            <p className="answers__txt answer">Borneo</p>
                            <p className="answers__txt">743.330 km²</p>
                        </div>
                        <div className="answers__bl">
                            <span className="round"> <i className="fa-solid fa-d letter"></i> </span>
                            <p className="answers__txt answer">Greenland</p>
                            <p className="answers__txt">2.166.000 km²</p>
                        </div>
                    </div>
                </div>
                <div className="answers__row">
                    <p className="answers__question">How many oceans are on the planet</p>
                    <p className={'answers__number'}>6</p>
                    <div className="answers__content">
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-a letter"></i> </span>
                            <p className="answers__txt answer">4</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-b letter"></i> </span>
                            <p className="answers__txt answer">7</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-c letter"></i> </span>
                            <p className="answers__txt answer">3</p>
                        </div>
                        <div className="answers__bl">
                            <span className="round"> <i className="fa-solid fa-d letter"></i> </span>
                            <p className="answers__txt answer">5</p>
                        </div>
                    </div>
                </div>
                <div className="answers__row">
                    <p className="answers__question">How many mainlands are on the planet</p>
                    <p className={'answers__number'}>7</p>
                    <div className="answers__content">
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-a letter"></i> </span>
                            <p className="answers__txt answer">3</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-b letter"></i> </span>
                            <p className="answers__txt answer">5</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-c letter"></i> </span>
                            <p className="answers__txt answer">9</p>
                        </div>
                        <div className="answers__bl">
                            <span className="round"> <i className="fa-solid fa-d letter"></i> </span>
                            <p className="answers__txt answer">6</p>
                        </div>
                    </div>
                </div>
                <div className="answers__row">
                    <p className="answers__question">What is the account of the earth from the sun</p>
                    <p className={'answers__number'}>8</p>
                    <div className="answers__content">
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-a letter"></i> </span>
                            <p className="answers__txt answer">2</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-b letter"></i> </span>
                            <p className="answers__txt answer">5</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-c letter"></i> </span>
                            <p className="answers__txt answer">4</p></div>
                        <div className="answers__bl">
                            <span className="round"> <i className="fa-solid fa-d letter"></i> </span>
                            <p className="answers__txt answer">3</p>
                        </div>
                    </div>
                </div>
                <div className="answers__row">
                    <p className="answers__question">What is the biggest planet in the solar system</p>
                    <p className={'answers__number'}>9</p>
                    <div className="answers__content">
                        <div className="answers__bl">
                            <span className="round"> <i className="fa-solid fa-a letter"></i> </span>
                            <p className="answers__txt answer">Jupiter</p>
                            <p className="answers__txt">69.911 km</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-b letter"></i> </span>
                            <p className="answers__txt answer">Saturn</p>
                            <p className="answers__txt">58.232 km</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-c letter"></i> </span>
                            <p className="answers__txt answer">Mars</p>
                            <p className="answers__txt">3.389 km</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-d letter"></i> </span>
                            <p className="answers__txt answer">Neptune</p>
                            <p className="answers__txt">24.622 km</p>
                        </div>
                    </div>
                </div>
                <div className="answers__row">
                    <p className="answers__question">How many planets are in the solar system</p>
                    <p className={'answers__number'}>10</p>
                    <div className="answers__content">
                        <div className="answers__bl">
                            <span> <i className="fa-solid fa-a letter"></i> </span>
                            <p className="answers__txt answer">6</p>
                        </div>
                        <div className="answers__bl">
                            <span className="round"> <i className="fa-solid fa-b letter"></i> </span>
                            <p className="answers__txt answer">8</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-c letter"></i> </span>
                            <p className="answers__txt answer">5</p>
                        </div>
                        <div className="answers__bl">
                            <span className={'answers__letter'}> <i className="fa-solid fa-d letter"></i> </span>
                            <p className="answers__txt answer">7</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="restart-btn" ref={restart}>Restart Test</button>
        </div>
    )
}

export default Stats