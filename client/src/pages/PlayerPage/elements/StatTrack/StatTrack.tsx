import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import type { Stats } from '../../../../../types/stats'
import styles from './StatTrack.module.scss'

interface StatTrackProps {
	stats: Stats
}

const clamp = (val: number, min: number, max: number) =>
	Math.min(Math.max(val, min), max)

const roundTo = (num: number, decimals: number) => {
	const factor = 10 ** decimals
	return Math.round((num + Number.EPSILON) * factor) / factor
}

function getColorByThresholds(value: number, [low, high]: [number, number]) {
	if (value < low) return '#FF3D71'
	if (value < high) return '#7C5CFF'
	return '#00E5A0'
}

interface StatConfigItem {
	key: string
	label: string
	min: number
	max: number
	decimals: number
	suffix: string
	thresholds: [number, number]
}

const STAT_CONFIG: StatConfigItem[] = [
	{
		key: 'headshot',
		label: 'Headshot %',
		min: 0,
		max: 100,
		decimals: 0,
		suffix: '%',
		thresholds: [35, 50],
	},
	{
		key: 'adr',
		label: 'ADR',
		min: 0,
		max: 130,
		decimals: 0,
		suffix: '',
		thresholds: [65, 85],
	},
	{
		key: 'kd',
		label: 'K/D Ratio',
		min: 0,
		max: 2,
		decimals: 2,
		suffix: '',
		thresholds: [0.8, 1.2],
	},
	{
		key: 'clutchSuccess',
		label: 'Clutch Success',
		min: 0,
		max: 100,
		decimals: 0,
		suffix: '%',
		thresholds: [20, 40],
	},
	{
		key: 'entrySuccess',
		label: 'Entry Success',
		min: 0,
		max: 100,
		decimals: 0,
		suffix: '%',
		thresholds: [45, 55],
	},
	{
		key: 'flashSuccess',
		label: 'Flash Success',
		min: 0,
		max: 100,
		decimals: 0,
		suffix: '%',
		thresholds: [15, 30],
	},
	{
		key: 'fpr',
		label: 'First Pick Rate',
		min: 0,
		max: 1,
		decimals: 2,
		suffix: '',
		thresholds: [0.1, 0.2],
	},
	{
		key: 'kr',
		label: 'Kills / Round',
		min: 0,
		max: 1.5,
		decimals: 2,
		suffix: '',
		thresholds: [0.6, 0.75],
	},
	{
		key: 'utilityDamage',
		label: 'Utility Damage',
		min: 0,
		max: 50,
		decimals: 0,
		suffix: '',
		thresholds: [5, 10],
	},
]

export default function StatTrack({ stats }: StatTrackProps) {
	const kd = roundTo(stats.kills / stats.deaths, 2)
	const values: Record<string, number> = { ...stats, kd }

	return (
		<div className={styles.statsBlock}>
			{STAT_CONFIG.map(
				({ key, label, min, max, decimals, suffix, thresholds }) => {
					const rawValue = values[key]
					const displayValue = roundTo(rawValue, decimals)
					const color = getColorByThresholds(rawValue, thresholds)

					return (
						<div className={styles.statItem} key={key}>
							<div className={styles.circleWrapper}>
								<CircularProgressbar
									value={clamp(rawValue, min, max)}
									minValue={min}
									maxValue={max}
									text={`${displayValue}${suffix}`}
									styles={buildStyles({
										pathColor: color,
										textColor: color,
										trailColor: '#1a1a1a',
										pathTransitionDuration: 0.5,
									})}
								/>
							</div>
							<span className={styles.statLabel}>{label}</span>
						</div>
					)
				},
			)}
		</div>
	)
}
