import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary bg-opacity-10 my-4 py-4'>
            <h5 className='ps-3'>Q-Zone</h5>
            <img className='w-100 p-2' src={qzone1} alt="" />
            <img className='w-100 p-2' src={qzone2} alt="" />
            <img className='w-100 p-2' src={qzone3} alt="" />
        </div>
    );
};

export default QZone;