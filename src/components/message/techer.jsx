import styles from '@/styles/message.module.scss'
import ListObject from '../utils/object'
export default function TeacherList() {
	return (
		<div className={styles.list}>
			<h6>Преподаватели</h6>
			<ListObject name={'Кенес'} last_message={'...'} />
		</div>
	)
}
