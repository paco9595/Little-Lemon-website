import Subscribe from "./subscribe";

export default function Header() {
  return (
    <header className="max-w-[1024px] grid grid-cols-1 md:grid-cols-2">
      <div className=" bg-[#C9D8CE] flex justify-center items-center  ">
        <div className='my-20 md:mb-20'>
          <img src="Asset 14@4x.png" alt="" className="w-3/4 mx-auto " />
          <h2>Subscribe to receive coupons</h2>
          <Subscribe submit={()=>{}}/>
        </div>
      </div>
      <div className="">
        <img src="header-img.jpg" alt="" className='h-[500px]' />
      </div>
    </header>
  );
}
