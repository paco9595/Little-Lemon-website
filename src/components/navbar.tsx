export default function Navbar() {
  return (
    <nav className='flex justify-between mb-7'>
      <div>
        <img src="/Asset 14@4x.png" alt="littel lemon logo" className='w-36' />
      </div>
      <div className='hidden md:block'>
        <ul className='flex '>
          <li className='mx-4'>Book</li>
          <li className='mx-4'>Comments</li>
          <li className='mx-4'>Location</li>
        </ul>
      </div>
    </nav>
  )
}