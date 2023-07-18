import { DownArrow } from '@/assets/js'
import styles from '@/styles/utils.module.scss'
import { useRef, useState } from 'react'

function Accardion({ children, title, text, number }) {
	const content = useRef(null)
	const [height, setHeight] = useState('0px')
	const [toggle, setToggle] = useState(false)
	function accordionOpen() {
		setToggle(!toggle)
		setHeight(toggle ? '0px' : `${content.current.scrollHeight}px`)
		console.log(height)
	}
	return (
		<>
			<div className={styles.accordion} onClick={accordionOpen}>
				<div>
					{number && <p>Модуль №{number}</p>}
					<h5>{title}</h5>
					<div className={styles.description}>{text}</div>
				</div>
				<div className={toggle ? styles.up : styles.down}>
					<DownArrow />
				</div>
			</div>
			<div
				ref={content}
				className={styles.accordion_content}
				style={{ height: height }}>
				<div className={styles.accordion_title}>{children}</div>
			</div>
		</>
	)
}

export default Accardion
