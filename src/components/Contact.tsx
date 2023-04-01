import BasicData from '../data/basic'

const Contact = () => {
  return (
    <ul>
      <li>
        <i className="fa fa-globe-asia mx-1"></i>
        <span>{ `${BasicData?.address?.city}, ${BasicData?.address?.state}` }</span>
      </li>
      <li>
        <i className="fas fa-envelope mx-1"></i>
        <span>
          <a href={`mailto:${BasicData?.email}`}>{BasicData?.email}</a>
        </span>
      </li>
      <li>
        <i className="fas fa-address-card mx-1"></i>
        <span>{BasicData?.phone}</span>
      </li>
    </ul>
  )
}

export default Contact
