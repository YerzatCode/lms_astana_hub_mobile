import { useState } from 'react'
import AdminHome from './admin/admin.home'
import TeacherHome from './teacher/teacher.home'
import HomeUser from './user/user.home'

function HomeCom() {
	const [status, setStatus] = useState('user')
	return (
		<>
			{status === 'user' && <HomeUser />}
			{status === 'admin' && <AdminHome />}
			{status === 'teacher' && <TeacherHome />}
		</>
	)
}

export default HomeCom
