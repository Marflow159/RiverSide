import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import './skeleton.scss'
const SkeletonCard = ({ cards }) => {
    return Array(cards)
        .fill(0)
        .map((_, i) => (
            <div className='skeleton' key={i}>
                <div className='skeleton__1'>
                    <Skeleton circle width={132} height={132} />
                </div>
                <div className='skeleton__2'>
                    <Skeleton width={140} height={36} />
                </div>
                <div className='skeleton__3'>
                    <Skeleton width={60} height={18} />
                </div>
                <div className='skeleton__4'>
                    <Skeleton width={170} height={50} />
                </div>
            </div>
        ))


}

export default SkeletonCard;