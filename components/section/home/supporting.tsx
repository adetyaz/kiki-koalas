import Image from 'next/image'
import { Button } from '../../ui/button'

export const Supporting = () => {
	return (
		<section className='bg-[#FFFAD0] border-b border-black p-4 md:px-96 md:py-28'>
			<h2 className='text-5xl text-center font-barricada'>
				Supporting
				<span>
					<Image
						src='/images/grey-fur-2.png'
						alt='grey fur koala'
						height={50}
						width={50}
						className='inline-block'
					/>
				</span>
				Koala
				<br />
				konservation
			</h2>
			<p className='my-4'>
				At Kiki Koalas, we're dedicated to protecting koalas from the wild and
				natural disasters in Australia. We will donate a portion of our raised
				funds to koala conservation efforts, helping to ensure their safety and
				survival. By collecting Kiki Koalas NFTs, you contribute to this vital
				cause, making a difference in the lives of these beloved Australian
				icons.
			</p>
			<Button className='btn bg-white text-black rounded-full block mx-auto'>
				Learn more
			</Button>
		</section>
	)
}
