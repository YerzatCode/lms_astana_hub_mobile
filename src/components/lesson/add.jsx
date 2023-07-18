import { IcBook, IcFile } from '@/assets/js'
import styles from '@/styles/course.module.scss'

export default function LessonAdd() {
	return (
		<div className={styles.lesson_add}>
			<h6>Дополнительные материалы</h6>
			<div className={styles.button}>
				<button className='btn'>
					Презентация
					<IcFile />
				</button>
				<button className='btn'>
					Регламент
					<IcFile />
				</button>
				<button className='btn'>
					Книга
					<IcBook />
				</button>
			</div>
		</div>
	)
}
