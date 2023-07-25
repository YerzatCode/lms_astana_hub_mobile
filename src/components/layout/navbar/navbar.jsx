import Logo from '@/assets/Logo.svg'
import { IcLanguage, IcNotification, IcSearch } from '@/assets/js/'
import Ava from '@/assets/png/Ava.png'
import { button } from '@/routes/button.navbar.js'
import styles from '@/styles/navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Navbar() {
	const { pathname, push } = useRouter()
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
				<div className={styles.right_button}>
					{button.map((item) => (
						<button
							key={item.name}
							className={
								item.href === pathname ? 'btn_border_active' : 'btn_border'
							}
							onClick={() => push(item.href)}>
							<span>{item.name}</span>
							{item.icon}
						</button>
					))}
				</div>
				<div className={styles.notifaction}>
					<IcNotification />
				</div>
				<div className={styles.network}>
					<IcLanguage />
				</div>
				<Link href={'/me'}>
					<Image
						src={Ava}
						alt='Yerzat'
						className={pathname === '/me' ? 'active' : ''}
					/>
				</Link>
			</div>
		</div>
	)
}

export default Navbar
