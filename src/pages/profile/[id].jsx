import { IcChat } from '@/assets/js'
import Ava from '@/assets/png/Ava.png'
import Layout from '@/components/layout/layout'
import BackButton from '@/components/task/back'
import UserTasks from '@/components/task/userTask'
import styles from '@/styles/user.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CircularProgressbar } from 'react-circular-progressbar'

export default function Profile() {
	const { push } = useRouter()
	const pro = 100
	return (
		<Layout title={'Никита | Профиль'}>
			<div className='container'>
				<div>
					<BackButton />
				</div>
				<div className={styles.user}>
					<div className={styles.user_head}>
						<div>
							<Image src={Ava} alt='' width={54} height={54} />
							<h4>Никита</h4>
						</div>{' '}
						<button
							className='btn_border_active'
							onClick={() => push('/message')}>
							Открыть чат
							<IcChat />
						</button>
					</div>
					<div className={styles.user_content}>
						<div className={styles.user_data}>
							<div>
								<text>Успеваемость</text>
								<div className={styles.user_progress}>
									<div className={styles.user_progress_bar}>
										<CircularProgressbar
											value={pro}
											text='red'
											strokeWidth={10}
										/>
									</div>
								</div>
							</div>

							<div className={styles.user_info}>
								<div>
									<p>ФИО</p>
									<text>Фамилия Имя Отчество</text>
								</div>
								<div>
									<p>Телефон</p>
									<text>+77077070707</text>
								</div>

								<div>
									<p>Email</p>
									<text>test@test.ru</text>
								</div>
							</div>
						</div>
						<div className={styles.user_task}>
							<text>Задания</text>
							<UserTasks />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
