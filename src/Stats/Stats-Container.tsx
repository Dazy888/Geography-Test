import Stats from "./Stats";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/Redux-Store";
import {getGrades, getUserAnswers} from "../Redux/Test-selectors";

type PropsType = {
    grades: number
    answers: Array<string>
}
function StatsContainer({grades, answers}: PropsType) {
    return <Stats grades={grades} answers={answers} />
}

function mapStateTpProps(state: AppStateType) {
    return {
        grades: getGrades(state),
        answers: getUserAnswers(state)
    }
}

const StatsContainerComponent = connect(mapStateTpProps, {})(StatsContainer)
export default StatsContainerComponent