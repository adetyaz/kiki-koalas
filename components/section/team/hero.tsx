import Image from 'next/image'

export const AboutHero = () => {
	return (
		<section className='bg-white border-b border-black p-4 md:px-96 md:py-32'>
			<div className='relative'>
				<Image
					src='/images/dialog-koala-2.png'
					alt='koala'
					height={100}
					width={100}
					className='absolute -top-4 left-12'
				/>
				<h2 className='text-5xl text-center mb-4 font-barricada'>
					The Kiki
					<br />
					Kommunity
				</h2>
				<Image
					src='/images/dialog-koala.png'
					alt='koala'
					height={100}
					width={100}
					className='absolute right-4 bottom-0'
				/>
			</div>
			<p>
				We are a dedicated team of builders, visionaries, operators, and
				creators, all aligned with a shared mission: propelling Kiki Koalas to
				become a loved Web3 brand anchored at the heart of the Cardano
				community.
			</p>
		</section>
	)
}
