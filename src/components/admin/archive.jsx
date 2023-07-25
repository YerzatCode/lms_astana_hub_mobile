import { IcPlus, IcSave } from '@/assets/js'
import styles from '@/styles/admin.module.scss'
import { useRouter } from 'next/router'

export default function ArchiveModule() {
	const { push } = useRouter()
	return (
		<div className={styles.archive}>
			<h4>Архив</h4>
			<text>Укажите срок</text>
			<p className={styles.archive_description}>
				Архив содержит в себе инфомрацию о успеваемости студентов, аттестации и
				выполнения домашних заданий
			</p>
			<select>
				<option>y</option>
				<option>y</option>
				<option>y</option>
			</select>
			<div className={styles.archive_button}>
				{' '}
				<button className='btn_border_active'>
					Скачать архив <IcSave />
				</button>
				<button className='btn_border' >
					Восстановит архив
					<IcPlus />
				</button>
			</div>
		</div>
	)
}
