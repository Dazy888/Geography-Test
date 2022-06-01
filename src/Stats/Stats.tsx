type PropsType = {
    grades: number
    answers: Array<string>
}

function Stats({grades, answers}: PropsType) {
    return (
        <div id={'stats-wrapper'}>
            <div className="gratitude">
                <p className="gratitude__txt">Thanks for passing the test</p>
            </div>
            <div className="answers">
                <div className="answers__row">
                    <p className="answers__question">What country is the biggest in Europe</p>
                    <div className="answers__content flex-property-set question-number_1">
                        <div className="answers__bl">
                            <span> <i className="fa-solid fa-a letter"></i> </span>
                            <p className="answers__txt">France</p>
                            <p className="answers__txt">543.940 km²</p>
                        </div>
                        <div className="answers__bl">
                            <span className="round"> <i className="fa-solid fa-b letter"></i> </span>
                            <p className="answers__txt">Ukraine</p>
                            <p className="answers__txt">603.548 km²</p>
                        </div>
                        <div className="answers__bl">
                            <span> <i className="fa-solid fa-c letter"></i> </span>
                            <p className="answers__txt">Germany</p>
                            <p className="answers__txt">357.588 km²</p>
                        </div>
                        <div className="answers__bl">
                            <span> <i className="fa-solid fa-d letter"></i> </span>
                            <p className="answers__txt">Poland</p>
                            <p className="answers__txt">312.679 km²</p>
                        </div>
                    </div>
                    <div className="answers__row">
                        <p className="answers__question">What lake is the biggest in Europe</p>
                        <div className="answers__content question-number_2">
                            <div className="answers__bl">
                                <span className="round"> <i className="fa-solid fa-a letter"></i> </span>
                                <p className="answers__txt">Caspian Sea</p>
                                <p className="answers__txt">371.000 km²</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-b letter"></i> </span>
                                <p className="answers__txt">Onega</p>
                                <p className="answers__txt">9.700 km²</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-c letter"></i> </span>
                                <p className="answers__txt">Vänern</p>
                                <p className="answers__txt">5.650 km²</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-d letter"></i> </span>
                                <p className="answers__txt">Ladoga</p>
                                <p className="answers__txt">17.700 km²</p>
                            </div>
                        </div>
                    </div>
                    <div className="answers__row">
                        <p className="answers__question">What mountain is the biggest in Europe</p>
                        <div className="answers__content question-number_3">
                            <div className="answers__bl">
                                <span className="round"> <i className="fa-solid fa-a letter"></i> </span>
                                <p className="answers__txt">Elbrus</p>
                                <p className="answers__txt">5.642 m</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-b letter"></i> </span>
                                <p className="answers__txt">Shkhara</p>
                                <p className="answers__txt">5.193 m</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-c letter"></i> </span>
                                <p className="answers__txt">Koshtan-Tau</p>
                                <p className="answers__txt">5.144 m</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-d letter"></i> </span>
                                <p className="answers__txt">Mont Blanc</p>
                                <p className="answers__txt">4.809 m</p>
                            </div>
                        </div>
                    </div>
                    <div className="answers__row">
                        <p className="answers__question">What river is the longest in Europe</p>
                        <div className="answers__content question-number_4">
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-a letter"></i> </span>
                                <p className="answers__txt">Ural</p>
                                <p className="answers__txt">2.428 km</p>
                            </div>
                            <div className="answers__bl">
                                <span className="round"> <i className="fa-solid fa-b letter"></i> </span>
                                <p className="answers__txt">Volga</p>
                                <p className="answers__txt">3.530 km</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-c letter"></i> </span>
                                <p className="answers__txt">Dnipro</p>
                                <p className="answers__txt">2.201 km</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-d letter"></i> </span>
                                <p className="answers__txt">Belaya</p>
                                <p className="answers__txt">1.430 km</p>
                            </div>
                        </div>
                    </div>
                    <div className="answers__row">
                        <p className="answers__question">What island is the biggest in the world</p>
                        <div className="answers__content question-number_5">
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-a letter"></i> </span>
                                <p className="answers__txt">Madagascar</p>
                                <p className="answers__txt">587.041 km²</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-b letter"></i> </span>
                                <p className="answers__txt">New Guinea</p>
                                <p className="answers__txt">786.000 km²</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-c letter"></i> </span>
                                <p className="answers__txt">Borneo</p>
                                <p className="answers__txt">743.330 km²</p>
                            </div>
                            <div className="answers__bl">
                                <span className="round"> <i className="fa-solid fa-d letter"></i> </span>
                                <p className="answers__txt">Greenland</p>
                                <p className="answers__txt">2.166.000 km²</p>
                            </div>
                        </div>
                    </div>
                    <div className="answers__row">
                        <p className="answers__question">How many oceans are on the planet</p>
                        <div className="answers__content question-number_6">
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-a letter"></i> </span>
                                <p className="answers__txt">4</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-b letter"></i> </span>
                                <p className="answers__txt">7</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-c letter"></i> </span>
                                <p className="answers__txt">3</p>
                            </div>
                            <div className="answers__bl">
                                <span className="round"> <i className="fa-solid fa-d letter"></i> </span>
                                <p className="answers__txt">5</p>
                            </div>
                        </div>
                    </div>
                    <div className="answers__row">
                        <p className="answers__question">How many mainlands are on the planet</p>
                        <div className="answers__content question-number_7">
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-a letter"></i> </span>
                                <p className="answers__txt">3</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-b letter"></i> </span>
                                <p className="answers__txt">5</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-c letter"></i> </span>
                                <p className="answers__txt">9</p>
                            </div>
                            <div className="answers__bl">
                                <span className="round"> <i className="fa-solid fa-d letter"></i> </span>
                                <p className="answers__txt">6</p>
                            </div>
                        </div>
                    </div>
                    <div className="answers__row">
                        <p className="answers__question">What is the account of the earth from the sun</p>
                        <div className="answers__content question-number_8">
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-a letter"></i> </span>
                                <p className="answers__txt">2</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-b letter"></i> </span>
                                <p className="answers__txt">5</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-c letter"></i> </span>
                                <p className="answers__txt">4</p></div>
                            <div className="answers__bl">
                                <span className="round"> <i className="fa-solid fa-d letter"></i> </span>
                                <p className="answers__txt">3</p>
                            </div>
                        </div>
                    </div>
                    <div className="answers__row">
                        <p className="answers__question">What is the biggest planet in the solar system</p>
                        <div className="answers__content question-number_9">
                            <div className="answers__bl">
                                <span className="round"> <i className="fa-solid fa-a letter"></i> </span>
                                <p className="answers__txt">Jupiter</p>
                                <p className="answers__txt">69.911 km</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-b letter"></i> </span>
                                <p className="answers__txt">Saturn</p>
                                <p className="answers__txt">58.232 km</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-c letter"></i> </span>
                                <p className="answers__txt">Mars</p>
                                <p className="answers__txt">3.389 km</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-d letter"></i> </span>
                                <p className="answers__txt">Neptun</p>
                                <p className="answers__txt">24.622 km</p>
                            </div>
                        </div>
                    </div>
                    <div className="answers__row">
                        <p className="answers__question">How many planets are in the solar system</p>
                        <div className="answers__content question-number_10">
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-a letter"></i> </span>
                                <p className="answers__txt">6</p>
                            </div>
                            <div className="answers__bl">
                                <span className="round"> <i className="fa-solid fa-b letter"></i> </span>
                                <p className="answers__txt">8</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-c letter"></i> </span>
                                <p className="answers__txt">5</p>
                            </div>
                            <div className="answers__bl">
                                <span> <i className="fa-solid fa-d letter"></i> </span>
                                <p className="answers__txt">7</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="restart-btn">Restart Test</button>
        </div>
    )
}

export default Stats