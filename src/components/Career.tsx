import CareerSnapshot from '../data/career'
import Title from './shared/title'

type Company = {
  name: string,
  location: string,
  summary: string[],
  stack: string,
  start_date: string,
  end_date: string,
  designation: string
}

const formatSummary = (summary: string[]) => {
  return (
    <ul>
      {summary.map(smr => {
        return (<li>
          <span className="text-rose-600 font-bold">*</span> {smr}
        </li>)
      })}
    </ul>
  )
}

const formatCompany = (company: Company) => {
  return (
    <div className="border-l-2 my-4 border-solid border-rose-600 px-4">
      <div className='flex flex-row justify-between'>
        <div className="w-1/2">
          <h3 className="text-2xl tracking-wide font-staatliches text-rose-400 inline-block">{company.name}</h3>
          <h4 className='inline-block text-sm mx-2 italic text-gray-500'>{company.location}</h4>
        </div>
        <div className="w-1/2 text-sm my-1 font-bold text-gray-500 text-right">{company.start_date}&nbsp;-&nbsp;{company.end_date}</div>
      </div>
      <h4 className="mb-2">{company.designation}</h4>
      <p className="text-xs">{formatSummary(company.summary)}</p>
      <h3 className='text-sm font-bold my-2'>
        <span className='text-gray-600'>Tech Stack:</span> 
        <span className='text-rose-400 mx-2'>{company.stack}</span>
      </h3>
    </div>
  )
}

const Career = () => {
  return (
    <div className='w-full mr-6'>
      <Title icon_class='fas fa-briefcase' title='Career' />
      <div>
        { CareerSnapshot.map(formatCompany).reverse() }
      </div>
    </div>
  )
}

export default Career
