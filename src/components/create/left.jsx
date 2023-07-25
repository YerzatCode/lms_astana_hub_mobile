import { IcSave } from '@/assets/js'
import styles from '@/styles/editor.module.scss'

export default function CreateLeftContent() {
	return (
		<div className={styles.create_left}>
			<div className={styles.create_name}>
				<text>Название курса</text>
				<p>До 20 символов</p>
				<input placeholder='Название' />
			</div>
			<div className={styles.create_description}>
				<text>Описание курса</text>
				<p>До 80 символов</p>
				<textarea placeholder='Описание' />
			</div>
			<div className={styles.create_time}>
				<text>Длительность курса</text>{' '}
				<select>
					<option>1 месяц</option>
				</select>
			</div>
			<div className={styles.create_prof}>
				<text>Направление обучения</text>{' '}
				<select>
					<option>Разработка</option>
				</select>
			</div>
			<button className='btn'>
				Сохранить <IcSave />
			</button>
		</div>
	)
}
