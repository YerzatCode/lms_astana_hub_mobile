import { Ava } from '@/assets/navbar'
import styles from '@/styles/courses.module.scss'
import Image from 'next/image'
import CourseModule from './course.module'

function CourseInfoCom() {
	return (
		<div className={styles.course_container}>
			<div className={styles.course_right}>
				<div className={styles.content}>
					<h2>Название курса</h2>
					<text>
						Описание курса описание курса описание курса описание курса описание
						курса описание курса описание курса описание курса описание курса
						описание курса
					</text>
				</div>
				<div className={styles.course_right_program}>
					<h4>Программа курса</h4>
					<CourseModule />
					<CourseModule />
				</div>
			</div>
			<div className={styles.course_left}>
				<Image src={Ava} alt='/' />
				<div className={styles.rating}>100.000 тенге</div>
				<button>Записаться на курс</button>
			</div>
		</div>
	)
}

export default CourseInfoCom
