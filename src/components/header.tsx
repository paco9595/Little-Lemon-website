import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-primary-green mx-auto mb-24">
      <div className="max-w-[887px] mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className='text-left pt-12'>
          <h1 className="text-[56px]">Little Lemon</h1>
          <h2 className="text-[32px] mb-4">Chicago</h2>
          <p className="h-20 text-xl w-[422px] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium aut cumque veniam ad voluptas esse inventore
          </p>
          <div className='mt-24 mb-7 w-fit bg-primary-yellow py-5 px-6 rounded-md'>
            <Link to={'/booking'}>Reserve a Table</Link>
          </div>
        </div>
        <div className='relative hidden md:block'>
          <img
            src="/restauranfood.jpg"
            alt=""
            className="md:rounded-xl md:w-[375px] md:h-[450px] md:absolute md:top-[15%] md:right-[13%] relative top-0 left-0 rounded-none w-full h-full"
          />
        </div>
      </div>
    </header>
  );
}
