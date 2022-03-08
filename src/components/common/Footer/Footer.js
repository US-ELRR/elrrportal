export default function Footer() {
  return (
    <footer className='max-w-7xl border-t mx-auto px-4 py-2 mt-8 flex justify-around items-end text-sm'>
      <div id='copy-right' className='text-sm'>
        <p>
          <span>&copy;</span>
          <span>2022</span>
          <span>&nbsp;</span>
          <span> - </span>
          <span>Copy Right. All rights reserved.</span>
        </p>
      </div>
      <div className='grid grid-cols-4 gap-8'>
        <div className='col-span-1'>
          <h3 className='font-semibold py-2 underline underline-offset-1 text-gray-600'>
            About
          </h3>
          <ul className='text-gray-500'>
            <li>
              <a href='#'>link one</a>
            </li>
            <li>
              <a href='#'>link two</a>
            </li>
            <li>
              <a href='#'>link three</a>
            </li>
          </ul>
        </div>
        <div className='col-span-1'>
          <h3 className='font-semibold py-2 underline underline-offset-1 text-gray-600'>
            Resources
          </h3>
          <ul className='text-gray-500'>
            <li>
              <a href='#'>link one</a>
            </li>
            <li>
              <a href='#'>link two</a>
            </li>
            <li>
              <a href='#'>link three</a>
            </li>
          </ul>
        </div>
        <div className='col-span-1'>
          <h3 className='font-semibold py-2 underline underline-offset-1 text-gray-600'>
            Contacts
          </h3>
          <ul className='text-gray-500'>
            <li>
              <a href='#'>link one</a>
            </li>
            <li>
              <a href='#'>link two</a>
            </li>
            <li>
              <a href='#'>link three</a>
            </li>
          </ul>
        </div>
        <div className='col-span-1'>
          <h3 className='font-semibold py-2 underline underline-offset-1 text-gray-600'>
            Web Policy
          </h3>
          <ul className='text-gray-500'>
            <li>
              <a href='#'>link one</a>
            </li>
            <li>
              <a href='#'>link two</a>
            </li>
            <li>
              <a href='#'>link three</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
