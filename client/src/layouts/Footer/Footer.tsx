import { FOOTER_LINKS_DATA } from '../../data'
import LinksBlock from './elements/LinksBlock/LinksBlock'
import styles from './Footer.module.scss'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.linksContainer}>
				<div className={styles.contactsBlock}>
					<p>Contact us</p>
					<p>+357 12 345678</p>
					<p>+38 (123) 456 78 90</p>
					<p>indiraptor63983@gmail.com</p>
					<button>Contact Us</button>
				</div>
				{FOOTER_LINKS_DATA.map(link => (
					<LinksBlock key={link.title} title={link.title} links={link.links} />
				))}
			</div>
		</footer>
	)
}
