import Logo from '@/assets/import.js'
import { Ava, Network, Notification, Search } from '@/assets/navbar/index.js'
import { button } from '@/routes/button.navbar.js'
import styles from '@/styles/navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
	return (
		<div className={styles.navbar}>
			<div className={styles.left}>
				<Link href={'/'}>
					<Image src={Logo} alt='' />
				</Link>
				<div className={styles.search}>
					<Search />
					<input placeholder='Найти' />
				</div>
			</div>
			<div className={styles.right}>
				{button.map((item) => (
					<button key={item.name} className={styles.navbar_button}>
						<span>{item.name}</span>
						{item.icon}
					</button>
				))}
				<div className={styles.notifaction}>
					<Notification />
				</div>
				<div className={styles.network}>
					<Network />
				</div>
				<Image src={Ava} alt='Yerzat' />
			</div>
		</div>
	)
}

export default Navbar
