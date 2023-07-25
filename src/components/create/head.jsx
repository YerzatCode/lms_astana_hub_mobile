import { IcDone, IcSave } from '@/assets/js'
import styles from '@/styles/editor.module.scss'

export default function CreateHead() {
	return (
		<div className={styles.create_head}>
			<h4>Создание курса</h4>
			<div>
				<button className='btn_border_active'>
					Опубликовать <IcDone />
				</button>
				<button className='btn_border'>
					Сохранить черновик <IcSave />
				</button>
			</div>
		</div>
	)
}
