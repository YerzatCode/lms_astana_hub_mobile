import { Down } from '@/assets/faq'
import styles from '@/styles/courses.module.scss'
import { useRef, useState } from 'react'

function CourseModule() {
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
			<div className={styles.course_module} onClick={accordionOpen}>
				<div>
					<p>Модуль №1</p>
					<h5>Название модуля</h5>
					<div className={styles.title}>
						<text>Описание модуля </text>
						<text>Описание модуля </text>
					</div>
				</div>
				<div className={toggle ? styles.up : styles.down}>
					<Down />
				</div>
			</div>
			<div
				ref={content}
				className={styles.accordion_content}
				style={{ height: height }}>
				<div className={styles.accordion_title}>
					<div>
						<h6>Название урока</h6>
						<p>Описание урока</p>
					</div>
					<div>
						<h6>Название урока</h6>
						<p>Описание урока</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default CourseModule
