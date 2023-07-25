import { IcDone, IcSave } from '@/assets/js'
import styles from '@/styles/support.module.scss'
export default function SupportSendBox() {
	return (
		<>
			<div className={styles.support_send}>
				<div className={styles.support_head}>
					<h4>Новый тикет</h4>
					<button className='btn'>
						Отправит заявку <IcDone />
					</button>
				</div>{' '}
				<div className={styles.support_content}>
					<div className={styles.support_name}>
						<text>Названия</text>
						<p>До 20 символов</p>
						<input placeholder='Названия' />
					</div>
					<div className={styles.support_subject}>
						<text>Тема обращение</text>
						<br />
						<select>
							<option>Subject</option>
							<option>Subject</option>
							<option>Subject</option>
						</select>
					</div>
					<div className={styles.support_description}>
						<text>Описание тикета</text>
						<p>До 80 символов</p>
						<textarea placeholder='Описание' />
					</div>
					<div className={styles.support_post}>
						<button className='btn'>
							Прикрепить файл <IcSave />
						</button>
						<p>Или перетащите файл</p>
					</div>
				</div>
			</div>
		</>
	)
}
