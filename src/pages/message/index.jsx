import { IcPlus } from '@/assets/js'
import Layout from '@/components/layout/layout'
import GroupList from '@/components/message/group'
import MessageContent from '@/components/message/message'
import StudentList from '@/components/message/student'
import TeacherList from '@/components/message/techer'

export default function Message() {
	return (
		<Layout title={'Сообщения'}>
			<div className='content'>
				<div className='basic'>
					<MessageContent />
				</div>
				<div className='add_panel'>
					<StudentList />
					<GroupList />
					<TeacherList />
					<button className='btn'>
						Написать в поддержку
						<IcPlus />
					</button>
				</div>
			</div>
		</Layout>
	)
}
