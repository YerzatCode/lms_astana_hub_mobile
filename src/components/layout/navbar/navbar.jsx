import Logo from '@/assets/Logo.svg'
import { IcLanguage, IcNotification, IcSearch } from '@/assets/js/'
import Ava from '@/assets/png/Ava.png'
import { button } from '@/routes/button.navbar.js'
import styles from '@/styles/navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
	return (
		<div className={styles.navbar}>
			<div className={styles.left}>
				<Link href={'/'}>
					<Image src={Logo} alt='' priority />
				</Link>
				<div className={styles.search}>
					<IcSearch />
					<input placeholder='Найти' />
				</div>
			</div>
			<div className={styles.right}>
				{button.map((item) => (
					<button key={item.name} className='btn_border'>
						<span>{item.name}</span>
						{item.icon}
					</button>
				))}
				<div className={styles.notifaction}>
					<IcNotification />
				</div>
				<div className={styles.network}>
					<IcLanguage />
				</div>
				<Image src={Ava} alt='Yerzat' />
			</div>
		</div>
	)
}

export default Navbar
