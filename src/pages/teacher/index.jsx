import Layout from '@/components/layout/layout'
import TeacherCurse from '@/components/teacher/curse'
import TeacherSearchUser from '@/components/teacher/search'

export default function Teacher() {
	return (
		<Layout title={'Учительский'}>
			<div className='container'>
				<TeacherCurse />
				<TeacherCurse />
			</div>
		</Layout>
	)
}
