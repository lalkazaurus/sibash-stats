import { Link } from 'react-router-dom'
import type { DataLink } from '../../../../../types/link'
import styles from './LinksBlock.module.scss'

interface LinksBlockProps {
	title: string
	links: DataLink[]
}

export default function LinksBlock({ title, links }: LinksBlockProps) {
	return (
		<div className={styles.block}>
			<span className={styles.blockTitle}>
				<p>{title}</p>
			</span>
			<div className={styles.linksBlock}>
				{links.map(link => (
					<Link key={link.title} to={link.link} className={styles.footerLink}>
						{link.title}
					</Link>
				))}
			</div>
		</div>
	)
}
