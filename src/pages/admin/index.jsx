import { IcPlus } from '@/assets/js'
import ArchiveModule from '@/components/admin/archive'
import EduGroupModule from '@/components/admin/eduGroup'
import CourseAdminModule from '@/components/course/courseAdmin'
import Layout from '@/components/layout/layout'
import styles from '@/styles/admin.module.scss'
import { useRouter } from 'next/router'
import Scrollbars from 'react-custom-scrollbars-2'
export default function Admin() {
	const { push } = useRouter()
	return (
		<Layout title={'Админ панель'}>
			<Scrollbars>
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
					<div className={styles.admin_setting}>
						<h4>Образовательные группы</h4>
						<EduGroupModule />
						<ArchiveModule />
					</div>
				</div>
			</Scrollbars>
		</Layout>
	)
}
