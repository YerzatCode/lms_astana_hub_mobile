import { LeftArrow } from '@/assets/js'
import { useRouter } from 'next/router'

export default function SupportBack() {
	const { back } = useRouter()

	return (
		<div>
			<button className='btn' onClick={() => back()}>
				<LeftArrow />
				Мои обращения
			</button>
		</div>
	)
}
