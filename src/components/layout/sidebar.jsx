import { routes } from '@/routes/routes.sidebar'
import styles from '@/styles/sidebar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

function SideBar() {
	const { pathname } = useRouter()
	const linkName = pathname.split('/', 2)[1]
	console.log('/' + linkName)
	return (
		<div className={styles.sidebar}>
			{routes.map((item) => (
				<Link href={item.href} key={item.name}>
					<div
						className={
							'/' + linkName === item.href ? styles.active : styles.deactive
						}>
						{item.icon}
						<h6>{item.name}</h6>
					</div>
				</Link>
			))}
		</div>
	)
}

export default SideBar
