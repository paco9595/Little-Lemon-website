import Stars from './stars';

export default function Comment({comment}: {comment:{id:number, comment:string, stars:number, user: {fullName:string, img:string}}}) {
  return (
    <div className='grid grid-cols-[94px_1fr] my-4 text-left' aria-label="comment">
      <div>
        <img src={comment.user.img} alt=""  className='rounded-full'/>
      </div>
      <div className='my-auto ml-3'>
        <div className='flex'>
          <Stars number={comment.stars}/>
          <span className='ml-2'>{comment.user.fullName}</span>
        </div>
        <p>{comment.comment}</p>
      </div>
    </div>
  )
}