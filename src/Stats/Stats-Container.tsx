import Stats from "./Stats";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/Redux-Store";
import {getGrades, getUserAnswers} from "../Redux/Test-selectors";
import React, {useEffect} from "react";

type PropsType = {
    grades: number
    answers: Array<string>
}
function StatsContainer({grades, answers}: PropsType) {
    const answersBl: any = React.createRef()
    useEffect(() => {
        const answersContent = answersBl.current.querySelectorAll('.answers__content')
        let i = 0
        for (const answersContentElement of answersContent) {
            const answersTexts = answersContentElement.querySelectorAll('.answer')
            for (const answersText of answersTexts) {
                if (answersText.innerText === answers[i]) answersText.previousElementSibling.classList.add('round-user')
            }
            i++
        }
    }, [])
    return <Stats answersBl={answersBl} grades={grades} answers={answers} />
}

function mapStateTpProps(state: AppStateType) {
    return {
        grades: getGrades(state),
        answers: getUserAnswers(state)
    }
}

const StatsContainerComponent = connect(mapStateTpProps, {})(StatsContainer)
export default StatsContainerComponent