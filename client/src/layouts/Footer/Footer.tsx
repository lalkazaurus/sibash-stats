import { FOOTER_LINKS_DATA } from '../../data'
import LinksBlock from './elements/LinksBlock/LinksBlock'
import styles from './Footer.module.scss'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandFacebook } from "react-icons/tb";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.linksContainer}>
				<div className={styles.contactsBlock}>
					<p className={styles.blockTitle}>Contact us</p>
					<p>+357 12 345678</p>
					<p>+38 (123) 456 78 90</p>
					<p>indiraptor63983@gmail.com</p>
					<button className={styles.contactButton}>Contact Us</button>
				</div>
				{FOOTER_LINKS_DATA.map(link => (
					<LinksBlock key={link.title} title={link.title} links={link.links} />
				))}
			</div>
			<div className={styles.lowerfooter}>
				<div className={styles.icons}>
					<FaGithub size={24}/>
					<FaLinkedin size={24}/>
					<BsTwitterX size={24}/>
					<FaInstagram size={24}/>
					<TbBrandFacebook size={24}/>
				</div>
				<span>
					<p>© Lalkazaurus with MIT License 2026</p>
				</span>
				<button>Review</button>
			</div>
		</footer>
	)
}
