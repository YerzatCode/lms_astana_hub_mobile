import Accardion from '@/components/utils/accardion'

export default function FAQ() {
	return (
		<div>
			<h2>FAQ</h2>
			<Accardion title={'Какой то вопрос'}>
				<div>
					<h6>Вопросы</h6>
				</div>
			</Accardion>
			<Accardion title={'Какой то вопрос'}>
				<div>
					<h6>Вопросы</h6>
				</div>
			</Accardion>
		</div>
	)
}
