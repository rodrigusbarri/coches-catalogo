import Image from 'next/image'
import { CarCard, CustomFilter, Hero, SearchBar } from '@/components'
import { fetchCars } from '@/utils'


export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Catálogo de coches</h1>
          <p>Explora los coches que te pueden gustar</p>
          <div className='home__filters'>
            <SearchBar />

            <div className='home__filter-container'>
              <CustomFilter title='fuel' />
              <CustomFilter title='year' />
            </div>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (<CarCard car={car} />))}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oppps, no hay coches</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>
  )
}
