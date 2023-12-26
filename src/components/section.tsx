export default function Section({children}:{children: React.ReactNode}) {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2'>
      {children}
    </section>
  )
}