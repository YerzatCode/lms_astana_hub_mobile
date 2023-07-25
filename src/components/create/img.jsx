import React from 'react'
import styles from '@/styles/editor.module.scss'
import { IcFile, IcSave } from '@/assets/js'


export default function CreateUploadImg() {
  return (
		<div className={styles.create_img}>
			<text>Обложка курса</text>
			<p>JPEG до 5 Мб</p>
			<div className={styles.create_file}>
				<div className={styles.create_icon}>
					<IcFile />
				</div>
				<button className='btn_border_active'>
					Загрузить файл
					<IcSave />
				</button>
				<p>Или перетащите файл</p>
			</div>
		</div>
	)
}
