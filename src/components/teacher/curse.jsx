import styles from '@/styles/teacher.module.scss'
import Image from 'next/image'
import Accardion from '../utils/accardion'
import TeacherSearchUser from './search'
import TeacherUserList from './user'

export default function TeacherCurse() {
	const num = [...Array(20)]
	return (
		<div className='content'>
			<div className='standart'>
				<h4>Название курса</h4>
				<Accardion
					number={'01.01.2023 – 01.01.2024'}
					title={'Группа №1'}
					text={
						<div className={styles.edu_list}>
							{num.map((item, index) => (
								<div key={index} className={styles.edu_list_user}></div>
							))}
						</div>
					}>
					<div className={styles.curse_group_head}>
						<div className={styles.gol1}>
							<p>Email</p>
						</div>
						<div className={styles.gol2}>
							<p>Имя</p>
						</div>
						<div className={styles.gol3}>
							<p>Телефон</p>
						</div>
						<div className={styles.gol4}>
							<p>Статус</p>
						</div>
						<div className={styles.gol5}>
							<p>Оценка</p>
						</div>
					</div>
					<TeacherUserList />
					<TeacherUserList />
					<TeacherUserList />
				</Accardion>
				<Accardion
					number={'01.01.2023 – 01.01.2024'}
					title={'Группа №1'}
					text={
						<div className={styles.edu_list}>
							{num.map((item, index) => (
								<div key={index} className={styles.edu_list_user}></div>
							))}
						</div>
					}>
					<div className={styles.curse_group_head}>
						<div className={styles.gol1}>
							<p>Email</p>
						</div>
						<div className={styles.gol2}>
							<p>Имя</p>
						</div>
						<div className={styles.gol3}>
							<p>Телефон</p>
						</div>
						<div className={styles.gol4}>
							<p>Статус</p>
						</div>
						<div className={styles.gol5}>
							<p>Оценка</p>
						</div>
					</div>
					<TeacherUserList />
					<TeacherUserList />
					<TeacherUserList />
				</Accardion>
				<TeacherSearchUser />
			</div>
			<div className='add_panel'>
				<Image className={styles.curse_image} src={''} alt='' />{' '}
			</div>
		</div>
	)
}
