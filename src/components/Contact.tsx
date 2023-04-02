import BasicData from '../data/basic'

const Contact = () => {
  return (
    <ul className='text-right'>
      <li>
        <span className='font-sans font-bold mx-2'>
          {`${BasicData?.address?.city}, ${BasicData?.address?.state}`}
        </span>
        <i className="fa fa-globe-asia text-rose-600"></i>
      </li>
      <li>
        <span className='font-sans font-bold mx-2'>
          <a href={`mailto:${BasicData?.email}`}>{BasicData?.email}</a>
        </span>
        <i className="fas fa-envelope text-rose-600"></i>
      </li>
      <li>
        <span className='font-sans font-bold mx-2'>{BasicData?.phone}</span>
        <i className="fas fa-address-card text-rose-600"></i>
      </li>
    </ul>
  )
}

export default Contact
