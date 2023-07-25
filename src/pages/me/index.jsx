import { IcFile, IcSave } from '@/assets/js'
import Ava from '@/assets/png/Ava.png'
import Layout from '@/components/layout/layout'
import styles from '@/styles/profile.module.scss'
import Image from 'next/image'
import Scrollbars from 'react-custom-scrollbars-2'

export default function Profile() {
	return (
		<Layout title={'Профиль'}>
			<Scrollbars>
				<div className='container'>
					<div className={styles.profile_head}>
						<Image src={Ava} alt='' width={54} height={54} />
						<h4>Никита</h4>
					</div>

					<div className={styles.profile_data}>
						<div>
							<p>ФИО</p>
							<text>Фамилия Имя Отчество</text>
						</div>{' '}
						<div>
							<p>Телефон</p>
							<text>+77077070707</text>
						</div>{' '}
						<div>
							<p>Email</p>
							<text>test@test.ru</text>
						</div>{' '}
					</div>
					<div className={styles.profile_references}>
						<h4>Мой справки</h4>
						<div>
							<text>Налоговый вычет</text>
							<p>Описание</p>
							<button className='btn_border_active'>Заказать справку</button>
						</div>
						<div>
							{' '}
							<text>Сертификат</text>
							<p>Описание</p>
							<button className='btn_border_active'>
								Скачать <IcFile />
							</button>
						</div>
					</div>
					<div className={styles.profile_setting}>
						<div div className={styles.profile_save}>
							<h4>Настройка</h4>{' '}
							<button className='btn_border_active'>
								Сохранить <IcSave />
							</button>
						</div>
						<div>
							<text>Язык</text>
							<div className={styles.profile_language}>
								<button className='btn_border_active'>Русский</button>
								<button className='btn_border_active'>Русский</button>
								<button className='btn_border_active'>Русский</button>
							</div>
						</div>
						<div>
							<text>Почта</text>
							<br />
							<input placeholder='text@test.kz' />
						</div>
						<div>
							<text>Пароль</text>
							<br />
							<input placeholder='********' />
						</div>
					</div>
				</div>
			</Scrollbars>
		</Layout>
	)
}
