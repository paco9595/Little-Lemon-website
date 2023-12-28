import specilist from '../data/specilist';
import Card from './card';

export default function Specilist() {
  return (
    <section className='max-w-[887px] mx-auto'>
      <div className="flex justify-between  mx-auto">
        <h2 className='text-[40px] leading-[47px]'>Specials</h2>
        <button className='py-5 px-6 bg-primary-yellow rounded-md'>Online Menu</button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-8 mt-14 mb-20'>
        {specilist.map(specilist=> (
          <Card key={specilist.id} card={specilist}/>
        ))}
      </div>
    </section>
  );
}
