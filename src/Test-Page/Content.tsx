import React, {useEffect} from "react";

type PropsType = {
    content: React.Ref<any>
    answersBl: any
    nextBtn: React.Ref<any>
    choseAnswer: () => void
    photo: string
    img: React.Ref<any>
    question: React.Ref<any>
    questionTxt: string
    answers: Array<string>
}

function Content({answers, questionTxt, question, img, photo, nextBtn, content, answersBl, choseAnswer}: PropsType) {
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
                <p className="content__txt" ref={question}>{questionTxt}</p>
                <img ref={img} src={photo} className="content__img" alt={'Hello'}/>
            </div>
            <div className="content__answers" ref={answersBl}>
                <div className="content__option a">
                            <span className="content__letter flex-property-set_center"> <i
                                className="fa-solid fa-a letter-icon"></i> </span>
                    <p className="answer-txt">{answers[0]}</p>
                </div>

                <div className="content__option b">
                            <span className="content__letter flex-property-set_center"> <i
                                className="fa-solid fa-b letter-icon"></i> </span>
                    <p className="answer-txt">{answers[1]}</p>
                </div>

                <div className="content__option c">
                            <span className="content__letter flex-property-set_center"> <i
                                className="fa-solid fa-c letter-icon"></i> </span>
                    <p className="answer-txt">{answers[2]}</p>
                </div>

                <div className="content__option d">
                            <span className="content__letter flex-property-set_center"> <i
                                className="fa-solid fa-d letter-icon"></i> </span>
                    <p className="answer-txt">{answers[3]}</p>
                </div>
            </div>
            <button className="content__next-btn" ref={nextBtn}><i className="fa-regular fa-circle-right next-icon"></i></button>
        </div>
    )
}

export default Content