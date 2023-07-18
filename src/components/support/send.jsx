import { IcSave } from '@/assets/js'
import styles from '@/styles/support.module.scss'
export default function SupportSendBox() {
	return (
		<>
			<div className={styles.support_send}>
				<text>Описание задания</text>
				<div className={styles.support}>
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
