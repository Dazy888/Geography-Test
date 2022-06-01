import React, {useEffect} from "react";

type PropsType = {
    content: React.Ref<any>
    answersBl: any
    nextBtn: React.Ref<any>
    choseAnswer: () => void
}

function Content({nextBtn, content, answersBl, choseAnswer}: PropsType) {
    useEffect(() => {
        const answersBlNode: any = answersBl.current
        function chooseAnswer(e: any) {
            if (e.target.closest('span') || e.target.tagName === 'SPAN' && !e.target.classList.contains('content__letter_selected')) {
                choseAnswer()
                const answers: any = answersBlNode.querySelectorAll('.content__letter_selected')
                if (answers.length >= 1) {
                    for (const answer of answers) {
                        answer.classList.remove('content__letter_selected')
                    }
                }
                e.target.closest('span').classList.toggle('content__letter_selected')
            }
        }
        answersBlNode.onclick = chooseAnswer
    }, [])
    return (
        <div className="content" ref={content}>
            <div className="content__question">
                <p className="content__txt">What country is the biggest in Europe?</p>
                <img src="./Photos/question-1-img.png" className="content__img" alt={'Hello'}/>
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
    )
}

export default Content