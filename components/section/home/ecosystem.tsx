import { Button } from '../../ui/button'

export const Ecosystem = () => {
	return (
		<section className='bg-cover bg-center bg-no-repeat h-[80vh] bg-[url("/images/ecosystem-koala.png")] md:p-24 border-b border-black'>
			<div className='ml-auto w-2/4'>
				<h3 className='font-barricada text-4xl'>Kiki Koalas ecosystem</h3>
				<p className='my-4'>
					Our vision extends far beyond creating remarkable NFTs. We are
					committed to building an expansive ecosystem of utility that will
					propel Kiki Koalas into a colossal Web3 brand.
				</p>
				<Button className='btn bg-white text-black rounded-full'>
					White paper
				</Button>
			</div>
		</section>
	)
}
