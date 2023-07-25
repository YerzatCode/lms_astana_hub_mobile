import { IcDone, IcPlus, IcSave, IcVideo } from '@/assets/js'
import Layout from '@/components/layout/layout'
import BackButton from '@/components/task/back'
import styles from '@/styles/editor.module.scss'

export default function CreateLesson() {
	return (
		<Layout title={'Добавитб уроки'}>
			<div className='container '>
				<div>
					<BackButton />
				</div>{' '}
				<div className={styles.lesson_create}>
					<div className={styles.lesson_create_head}>
						<h4>Добавление урока</h4>
						<button className='btn_border_active'>
							Добавит <IcDone />
						</button>
					</div>
					<div className={styles.lesson_create_content}>
						<div className={styles.lesson_create_content_right}>
							<div className={styles.lesson_create_name}>
								<text>Название урока</text>
								<p>До 20 символов</p>
								<input placeholder='Название' />
							</div>
							<div className={styles.lesson_create_description}>
								<text>Описание урока</text>
								<p>До 80 символов</p>
								<textarea placeholder='Описание ' />
							</div>
							<div className={styles.lesson_create_add}>
								<text>Дополнительные материалы </text>
								<button className='btn_border'>
									<IcPlus /> Загрузить файл
								</button>
							</div>
						</div>
						<div className={styles.lesson_create_video}>
							<text>Видео урока</text>
							<p>Mp4 до 1 Гб</p>
							<div className={styles.lesson_create_video_upload}>
								<IcVideo />
								<button className='btn_border_active'>
									Загрузить видео
									<IcSave />
								</button>
								<p>Или перетащите файл</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
