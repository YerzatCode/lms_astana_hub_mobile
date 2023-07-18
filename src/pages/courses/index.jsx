import AllCourses from '@/components/course/allCourses'
import MyCourses from '@/components/course/myCourses'
import Layout from '@/components/layout/layout'
import Scrollbars from 'react-custom-scrollbars-2'

export default function Courses() {
	return (
		<Layout title={'Курсы'}>
			<Scrollbars autoHide autoHideTimeout={0}>
				<div className='container'>
					<AllCourses />
					<MyCourses />
				</div>
			</Scrollbars>
		</Layout>
	)
}
