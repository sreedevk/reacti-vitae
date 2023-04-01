import TechStack from '../data/tech-stack'
import Title from './shared/title'

type PLanguage = {
  language: string,
  proficiency: number
}

const formatLanguage = (language: PLanguage) => {
  return (
    <div className='my-2 flex flex-row w-full justify-between'>
      <h4 className='mr-8 text-sm font-bold italic'>{language?.language}</h4>
      <div className='w-64 bg-gray-100 rounded-xl'>
        <div className="h-full bg-rose-500 rounded-xl" style={{ width: `${language?.proficiency}%`}}></div>
      </div>
    </div>
  )
}

const ProgrammingLanguages = () => {
  const formattedLanguages = TechStack?.languages.map(formatLanguage)

  return (
    <div className='my-1 mr-4'>
      <Title icon_class='fas fa-terminal' title='Programming Languages' />
      <div className='my-2 mx-1'>
        { formattedLanguages }
      </div>
    </div>
  )
}

export default ProgrammingLanguages
