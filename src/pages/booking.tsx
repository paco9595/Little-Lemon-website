import BookingForm from '../components/bookingForm';

export default function Booking () {
  return (
    <div className='max-w-[887px] mx-auto text-left my-20 '>
      <h2 className='text-3xl mb-5'>Book a Table</h2>
      <BookingForm/>
    </div>
  )
}