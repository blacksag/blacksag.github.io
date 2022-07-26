import '../styles/Landing.scss';
import backgroundImage from '../assets/sudhanshu-jain-5.jpg';
// import { useState, useCallback, useEffect } from 'react';

// const tittles = [
//   'web developer',
//   'graphics programmer',
//   'computer engineer',
//   'game developer',
//   'web3 enthusiast'];

function Landing () {

  // const [newTittle, setnewTittle] = useState(tittles[0]);

  return (
    <>
      <div className='backdrop' style={{backgroundImage: `url(${backgroundImage})`}}>
        <h1>Sudhanshu Jain</h1>
        <p>Software Developer</p>
      </div>
    </>
  )
}

export default Landing
