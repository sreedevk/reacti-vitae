import BasicData from '../data/basic'

const Contact = () => {
  return (
    <ul className='md:text-right text-center flex flex-col text-xs md:text-md my-2'>
      <li>
        <span className='font-sans font-bold mx-2'>
          {`${BasicData?.address?.city}, ${BasicData?.address?.state}`}
        </span>
        <i className="fa fa-globe-asia text-rose-600 hidden md:inline-block"></i>
      </li>
      <li>
        <span className='font-sans font-bold mx-2 '>
          <a href={`mailto:${BasicData?.email}`}>{BasicData?.email}</a>
        </span>
        <i className="fas fa-envelope text-rose-600 hidden md:inline-block"></i>
      </li>
    </ul>
  )
}

export default Contact
