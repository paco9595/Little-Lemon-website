import { Star } from 'lucide-react';

export default function Stars({number}: {number: number}) {
  return (
    <div className='grid grid-cols-5 w-[117px]'>
      {Array(5).fill(0).map((_,id) =>(
          <Star key={id} color={number>= id? '#F2D64B': 'gray'} fill={number>= id? '#F2D64B': 'gray'}/>
      
      ))}
    </div>
  )
}
