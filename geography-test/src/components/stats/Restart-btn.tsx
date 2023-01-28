import React from "react"
import styles from "@/styles/Stats.module.scss"

interface Props {
    restartListener: () => void
}

const RestartBtnComponent: React.FC<Props> = ({ restartListener }) => {
    return <button onClick={restartListener} className={styles["restart-btn"]}>Restart Test</button>
}

export const RestartBtn = React.memo(RestartBtnComponent)