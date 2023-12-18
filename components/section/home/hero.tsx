import Image from 'next/image'

export const Hero = () => {
	return (
		<section className='flex flex-col justify-between h-[80vh] overflow-hidden border-b border-black'>
			<h1 className='text-center text-white text-8xl font-barricada text-shadow'>
				kiki koala
			</h1>
			<div className='flex justify-center relative background'>
				<Image
					src='/images/bush-1.png'
					alt='bush'
					height={0}
					width={250}
					className='relative mt-auto left-48 h-40 w-80'
				/>
				<div className='flex justify-center'>
					<Image
						src='/images/koala-1.png'
						alt='koala'
						height={350}
						width={350}
						className='relative top-8 left-20 z-10'
					/>
					<Image
						src='/images/koala-2.png'
						alt='koala'
						height={350}
						width={350}
						className='relative z-20'
					/>
					<Image
						src='/images/koala-3.png'
						alt='koala'
						height={350}
						width={350}
						className='relative top-8 right-20 z-10'
					/>
				</div>
				<Image
					src='/images/bush-2.png'
					alt='bush'
					height={100}
					width={250}
					className='relative mt-auto  right-48 h-40 w-80 '
				/>
			</div>
		</section>
	)
}
