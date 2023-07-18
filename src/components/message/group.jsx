import styles from '@/styles/message.module.scss'
import ListObject from '../utils/object'

export default function GroupList() {
	return (
		<div className={styles.list}>
			<h6>Группы</h6>
			<ListObject name={'ICP'} last_message={'Next.js'} />
		</div>
	)
}
