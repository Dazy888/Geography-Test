import React, {useEffect} from "react";

type PropsType = {
    choseAnswer: any
    wrapper: any
    img: string
    answers: Array<string>
    question: string
    dispatch: any
}

export function Content({dispatch, question, answers, img, choseAnswer, wrapper}: PropsType) {
    useEffect(() => {
        const answersBl = wrapper.current.querySelector('.content__answers')
        function chooseAnswer(e: any) {
            if (e.target.closest('span') || e.target.tagName === 'SPAN' && !e.target.classList.contains('content__letter_selected')) {
                dispatch(choseAnswer())
                const answers: any = answersBl.querySelectorAll('.content__letter_selected')
                if (answers.length >= 1) {
                    for (const answer of answers) {
                        answer.classList.remove('content__letter_selected')
                    }
                }
                e.target.closest('span').classList.toggle('content__letter_selected')
            }
        }
        answersBl.onclick = chooseAnswer
    }, [])

    return (
        <div className="content">
            <div className="content__question">
                <p className="content__txt">{question}</p>
                <img src={img} className="content__img" alt={'Hello'}/>
            </div>
            <div className="content__answers">
                <div className="content__option a">
                    <span className="content__letter flex-property-set_center"> <i className="fa-solid fa-a letter-icon"></i> </span>
                    <p className="answer-txt">{answers[0]}</p>
                </div>

                <div className="content__option b">
                    <span className="content__letter flex-property-set_center"> <i className="fa-solid fa-b letter-icon"></i> </span>
                    <p className="answer-txt">{answers[1]}</p>
                </div>

                <div className="content__option c">
                    <span className="content__letter flex-property-set_center"> <i className="fa-solid fa-c letter-icon"></i> </span>
                    <p className="answer-txt">{answers[2]}</p>
                </div>

                <div className="content__option d">
                    <span className="content__letter flex-property-set_center"> <i className="fa-solid fa-d letter-icon"></i> </span>
                    <p className="answer-txt">{answers[3]}</p>
                </div>
            </div>
            <button className="content__next-btn"><i className="fa-regular fa-circle-right next-icon"></i></button>
        </div>
    )
}