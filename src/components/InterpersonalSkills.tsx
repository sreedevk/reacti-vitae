import Title from "./shared/title"
import InterpersonalSkillsList from '../data/interpersonal-skills'

const interpersonalSkillFormatter = (skill: string) => {
  return (
    <li className="my-1 text-sm font-bold"> <span className="text-rose-800">*</span> {skill}</li>
  )
}

const formatSkills = (skills: string[]) => {
  const chunkSize = 3;

  return Array.from(
    { length: Math.ceil(skills.length / chunkSize) },
    (_, index) => skills.slice(index * chunkSize, index * chunkSize + chunkSize))
    .map(chunk => {
      return (
        <ul>
          {chunk.map(interpersonalSkillFormatter) }
        </ul>
      )
    })
}

const InterpersonalSkills = () => {
  return (
    <div>
      <Title icon_class="fas fa-network-wired" title="Interpersonal Skills" />
      <div className="flex flex-col md:flex-row px-6 justify-between">
        {formatSkills(InterpersonalSkillsList)}
      </div>
    </div>
  )
}

export default InterpersonalSkills
