import specilist from '../data/specilist';

export default function Card({card}: {card: typeof specilist[0]}){
  return (
    <div>
      <img src={card.image} alt="" className='rounded-t-2xl w-full' />
      <div className='px-6 py-5 text-left bg-secondary-gray'>
        <div className='flex justify-between mb-6'>
          <div>{card.title}</div>
          <div className='text-secondary-melon'>${card.price}</div>
        </div>
        <p className='text-base  leading-[19px] mb-4 '>{card.description}</p>
        <button className='bg-primary-yellow'>Order Now</button>
      </div>
    </div>
  )
}