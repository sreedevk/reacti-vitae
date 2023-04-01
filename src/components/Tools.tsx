import TechStack from '../data/tech-stack'
import Title from './shared/title'

const skillFormatter = (skill: string)  => {
  return (
    <li className='my-1'>{skill}</li>
  )
}

const skillBlockFormatter = (skills: string[], title: string) => {
  return (
    <div>
      <h3 className="underline my-2 uppercase">{title}</h3>
      <ul className="text-sm">
        { skills.map(skillFormatter) }
      </ul>
    </div>
  )
}

const Tools = () => {
  return (
    <div className="my-1 w-full">
      <Title icon_class='fas fa-cog' title='Tools' />
      <div className="flex mx-1 flex-row justify-between">
        { skillBlockFormatter(TechStack?.tools?.databases, "Databases") }
        { skillBlockFormatter(TechStack?.tools?.web, "Web") }
        { skillBlockFormatter(TechStack?.tools?.data_processing, "Data Processing") }
        { skillBlockFormatter(TechStack?.tools?.development_tools, "Development Tools") }
      </div>
    </div>
  )
}

export default Tools
