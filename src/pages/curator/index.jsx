import { IcPlus } from '@/assets/js'
import CourseAdminModule from '@/components/course/courseAdmin'
import Layout from '@/components/layout/layout'
import styles from '@/styles/admin.module.scss'
import { useRouter } from 'next/router'

export default function Curator() {
	const { push } = useRouter()
	return (
		<Layout title={'Кураторский'}>
			<div className='container'>
				<div>
					<h4>Курсы</h4>
					<div className={styles.admin_courses}>
						<CourseAdminModule />
						<CourseAdminModule />
						<div className={styles.admin_add} onClick={() => push('/create')}>
							<IcPlus />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
