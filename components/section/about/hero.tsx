import Image from 'next/image'

export const AboutHero = () => {
	return (
		<section className='bg-white border-b border-black p-4 md:px-96 md:py-32'>
			{/* <div className='relative'>
				<Image
					src='/images/dialog-koala-2.png'
					alt='koala'
					height={100}
					width={100}
					className='absolute -top-4 left-12'
				/>
				<Image
					src='/images/dialog-koala.png'
					alt='koala'
					height={100}
					width={100}
					className='absolute right-4 bottom-0'
				/>
			</div> */}
			<h2 className='text-5xl text-center mb-4 font-barricada'>
				Krafting the
				<br />
				Kiki Koalas
			</h2>

			<p>
				Our 3D art is a living tribute to artistry and unwavering commitment. We
				broke free from the grasp of 2D art and artificial intelligence,
				crafting every pixel with an artist's touch, one cursor click at a time.
			</p>
		</section>
	)
}
