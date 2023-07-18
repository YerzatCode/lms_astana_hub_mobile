import styles from '@/styles/sidebar.module.scss'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

function SidebarMob() {
	const [open, setOpen] = useState(true)

	return (
		<div>
			<div
				className={styles.menu}
				onClick={() => {
					setOpen(!open)
				}}>
				<FontAwesomeIcon icon={open ? faBars : faTimes} />
			</div>
			<div className={open ? styles.mobile : styles.mobile_active}>
				SidebarMob
			</div>
		</div>
	)
}

export default SidebarMob
