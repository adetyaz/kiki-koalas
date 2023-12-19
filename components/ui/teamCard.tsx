import Image from 'next/image'
import { Button } from './button'
import { Team } from '@/lib/types'

export const TeamCard = ({
	image,
	name,
	position,
	description,
	color,
}: Team) => {
	return (
		<div className={`bg-[${color}] border border-black pt-8 `}>
			<Image
				src={image}
				alt='team member'
				height={200}
				width={200}
				className='mx-auto block '
			/>
			<div className='bg-white border border-t-black flex flex-col gap-2 p-4'>
				<span className='text-sm px-3 py-1 border rounded-3xl font-barricada border-b-4 border-black w-fit uppercase'>
					{position}
				</span>
				<h3 className='font-barricada text-2xl'>{name}</h3>
				<p>{description}</p>
				<Button className='bg-white border border-b-4 border-black w-10 h-10 p-0'>
					<svg
						width='23'
						height='20'
						viewBox='0 0 23 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M17.4256 0H20.8185L13.4062 8.4718L22.1262 20H15.2985L9.95077 13.0082L3.83179 20H0.436923L8.36513 10.9385L0 0H7.00103L11.8349 6.39077L17.4256 0ZM16.2349 17.9692H18.1149L5.97949 1.9241H3.96205L16.2349 17.9692Z'
							fill='#252525'
						/>
					</svg>
				</Button>
			</div>
		</div>
	)
}
