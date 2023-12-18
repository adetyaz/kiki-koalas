import { TeamCard } from '@/components/ui/team-card'
import { team } from '@/lib/data'

export const Meet = () => {
	return (
		<section>
			<h2 className='text-5xl text-center my-20 font-barricada'>
				Meet the Kiki Kollective
			</h2>
			<div className='grid grid-cols-3 gap-x-0 mt-24 mx-auto md:w-[60%]'>
				{team.map((member) => (
					<TeamCard key={member.name} {...member} />
				))}
			</div>
		</section>
	)
}
