import Layout from '@/components/layout/layout'
import LessonsImg from '@/components/lessons/img'
import LessonsProgram from '@/components/lessons/program'
import LessonsTitle from '@/components/lessons/title'

export default function Lessons() {
	return (
		<Layout title={'Название курса | Курсы'}>
			<div className='content'>
				<div className='basic'>
					<LessonsTitle />
					<LessonsProgram />
				</div>
				<div className='add_panel'>
					<LessonsImg />
				</div>
			</div>
		</Layout>
	)
}
