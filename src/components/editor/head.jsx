import { IcDone } from '@/assets/js'
import styles from '@/styles/editor.module.scss'

export default function EditHead() {
	return (
		<div className={styles.create_head}>
			<h4>Редактирование курса</h4>

			<button className='btn_border_active'>
				Опубликовать <IcDone />
			</button>
		</div>
	)
}
