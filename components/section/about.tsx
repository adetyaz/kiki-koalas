import Image from 'next/image'

export const About = () => {
	return (
		<section className='bg-white border-b border-black p-4 md:px-96 md:py-32'>
			<h2 className='text-5xl text-center font-barricada'>
				Say hello to the
				<br />
				Kiki
				<span>
					<Image
						src='/images/grey-fur.png'
						alt='grey fur koala'
						height={50}
						width={50}
						className='inline-block'
					/>
				</span>
				Koalas
			</h2>
			<p>
				Introducing the Kiki Koalas – 3,333 adorable Koalas that kick back at
				the Kiki Kollective! The Kiki Koalas are not only about the 3D art; it's
				about nurturing a welcoming and tightly-knit community. Each Kiki Koala
				brings us together, forming bonds and friendships that transcend pixels
				and screens.
			</p>
		</section>
	)
}
