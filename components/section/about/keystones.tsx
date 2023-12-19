import KoalaInfoBox from '@/components/ui/koalaInfoBox'
import { mockKeystone } from '@/lib/data'

export const Keystones = () => {
	return (
		<section>
			<h2 className='text-5xl text-center my-20 font-barricada'>
				The keystones to our koalas
			</h2>
			{mockKeystone.map((info) => (
				<KoalaInfoBox key={info.title} {...info} />
			))}
		</section>
	)
}
