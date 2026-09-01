import type { Stats } from "../../../../../types/stats"
import styles from "./StatTrack.module.scss"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface StatTrackProps {
    stats: Stats
}

export default function StatTrack({ stats } : StatTrackProps) {
    <div className={styles.statsBlock}>
        <CircularProgressbar value={66} text={`${66}%`}/>
    </div>
}