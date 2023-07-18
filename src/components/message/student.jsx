import { IcSearch } from '@/assets/js'
import styles from '@/styles/message.module.scss'
import ListObject from '../utils/object'

export default function StudentList() {
	return (
		<div className={styles.list}>
			<h6>Студенты</h6>
			<div className={styles.search}>
				<IcSearch />
				<input placeholder='Найти' />
			</div>
			<ListObject
				name={'Женя'}
				last_message={'Go my friends '}
				message_num={1}
			/>

			<ListObject name={'Женя'} last_message={'Go my friends '} />
		</div>
	)
}
