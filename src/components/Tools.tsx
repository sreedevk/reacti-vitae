import TechStack from '../data/tech-stack'
import Title from './shared/title'

const skillFormatter = (skill: string)  => {
  return (
    <li className='my-1 font-bold'>{skill}</li>
  )
}

const skillBlockFormatter = (skills: string[], title: string) => {
  return (
    <div className="w-1/2 md:w-2/12 px-4 text-center md:text-left">
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
      <div className="flex flex-wrap justify-between">
        { skillBlockFormatter(TechStack?.tools?.databases, "Databases") }
        { skillBlockFormatter(TechStack?.tools?.web, "Web") }
        { skillBlockFormatter(TechStack?.tools?.cloud_architecture, "Devops") }
        { skillBlockFormatter(TechStack?.tools?.development_tools, "Development") }
        { skillBlockFormatter(TechStack?.tools?.data_processing, "DataProc") }
        { skillBlockFormatter(TechStack?.tools?.other, "Other") }
      </div>
    </div>
  )
}

export default Tools
