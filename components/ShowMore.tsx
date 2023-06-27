'use client'
import { ShowMoreProps } from '@/types'
import CustomButton from './CustomButton';
import { updateSearchParams } from '@/utils';

export const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {

  const handleNAvigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    setLimit(newLimit);
  }

  return (
    <div className='w.full flex-center gap-5 mt-10'>
      {!isNext && (
        <CustomButton
          title='Ver más coches'
          btnType='button'
          containerStyles='bg-primary-blue rounded-full text-white'
          handleClick={handleNAvigation}
        />
      )}

    </div>
  )
}
