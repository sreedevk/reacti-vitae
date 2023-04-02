import TechStack from '../data/tech-stack'
import Title from './shared/title'

const skillFormatter = (skill: string)  => {
  return (
    <li className='my-1 font-bold'>{skill}</li>
  )
}

const skillBlockFormatter = (skills: string[], title: string) => {
  return (
    <div>
      <h3 className="underline font-bold my-2 uppercase font-highway-gothic text-rose-600">{title}</h3>
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
        { skillBlockFormatter(TechStack?.tools?.cloud_architecture, "Cloud Architecture") }
        { skillBlockFormatter(TechStack?.tools?.development_tools, "Development Tools") }
      </div>
    </div>
  )
}

export default Tools
