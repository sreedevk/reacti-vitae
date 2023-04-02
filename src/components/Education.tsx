import EducationDetails from '../data/education'
import Title from './shared/title'

type Education = {
  university: string,
  degree: string,
  description: string,
  location: string,
  year_of_completion: number
}

const educationFormatter = (education: Education) => {
  return (
    <div className='my-4'>
      <div className='flex flex-row justify-between'>
        <h2 className="font-bold text-lg">{education.degree}</h2>
        <h3 className='font-bold text-gray-500'>{education.year_of_completion}</h3>
      </div>
      <h3 className='text-md italic'>
        {education.university},
        <span className='text-sm text-rose-500 font-bold'>
          &nbsp;{education.location}
        </span>
      </h3>
      <p className='my-1 text-xs'>{education.description}</p>
    </div>
  )
}

const Education = () => {
  return (
    <div className="w-full">
      <Title title='Education' icon_class='fas fa-university' />
      <div>{EducationDetails.map(educationFormatter)}</div>
    </div>
  )
}

export default Education
