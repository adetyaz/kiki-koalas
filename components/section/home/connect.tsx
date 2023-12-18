import { Button } from '../../ui/button'

export const Connect = () => {
	return (
		<section className='grid grid-cols-2 border-b border-black'>
			<div className='bg-[#FFDCF7] p-8 md:py-32 md:pl-60 md:pr-12'>
				<svg
					width='41'
					height='42'
					viewBox='0 0 41 42'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M36.0764 4.51528L21.974 20.8935M7.87153 37.2717L21.974 20.8935M21.974 20.8935L40.1543 20.5737M21.974 20.8935L0.160425 21.4354M21.974 20.8935L36.9377 35.4952M21.974 20.8935L5.92864 7.73402M21.974 20.8935L21.4599 0.660829M21.974 20.8935L21.3787 40.9875'
						stroke='#252525'
						stroke-width='4'
					/>
				</svg>
				<h3 className='font-barricada text-4xl'>Meet the team</h3>
				<p className='my-4'>
					Sink your claws into the team leading the Kiki Koalas to lofty gum
					tree tops.
				</p>
				<Button className='btn bg-white text-black rounded-full'>
					Stalk the team
				</Button>
			</div>
			<div className='bg-[#CAF2FF] p-8 md:py-32 md:pr-60 md:pl-12'>
				<svg
					width='41'
					height='42'
					viewBox='0 0 41 42'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M36.0764 4.51528L21.974 20.8935M7.87153 37.2717L21.974 20.8935M21.974 20.8935L40.1543 20.5737M21.974 20.8935L0.160425 21.4354M21.974 20.8935L36.9377 35.4952M21.974 20.8935L5.92864 7.73402M21.974 20.8935L21.4599 0.660829M21.974 20.8935L21.3787 40.9875'
						stroke='#252525'
						stroke-width='4'
					/>
				</svg>
				<h3 className='font-barricada text-4xl'>Hang out with us</h3>
				<p className='my-8'>
					Kick it with us in our tree tops where we sleep, eat and repeat.
				</p>
				<Button className='btn bg-white text-black rounded-full'>
					Discord
				</Button>
			</div>
		</section>
	)
}
