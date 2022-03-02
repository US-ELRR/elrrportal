import Image from 'next/image';

import DODlogo from 'src\\public\\DOD.png';

export function DODImage() {
  return (
    <Image
      src={DODlogo}
      alt='DOD logo'
      width={100}
      height={100}
      layout='fixed'
    />
  );
}

export default function Banner() {
  return (
    <div className='inline-flex justify-center items-center gap-2'>
      <DODImage />
      <div>
        <h1>Enterprise Learner Record Repository</h1>
        <p>U.S. Department of Defence</p>
      </div>
    </div>
  );
}
