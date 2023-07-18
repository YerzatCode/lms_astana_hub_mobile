import { IcSave } from '@/assets/js'
import styles from '@/styles/course.module.scss'

export default function TaskUpload() {
	return (
		<>
			<div className={styles.task_upload}>
				<text>Описание задания</text>
				<div className={styles.task_fileUpload}>
					<button className='btn'>
						Прикрепить файл
						<IcSave />
					</button>
					<p>Или перетащите файл</p>
				</div>
				<div>
					<text>Комментарий к заданию</text>
					<p>До 300 символов</p>
					<textarea placeholder='Комментарий'></textarea>
				</div>
			</div>
		</>
	)
}
