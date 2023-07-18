import { IcDone, IcSave, LeftArrow } from '@/assets/js'
import styles from '@/styles/course.module.scss'

export default function TaskTitle() {
	return (
		<div>
			<div className={styles.task_title}>
				<h4>Задание №1</h4>
				<button className='btn'>
					Отправить решение <IcDone />
				</button>
			</div>
		</div>
	)
}
