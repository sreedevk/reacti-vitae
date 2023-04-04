import Title from "./shared/title"
import BasicData from '../data/basic'

const languageFormatter = (language: { name: string, proficiency: number }) => {
  return (
    <li className="w-1/2 flex justify-between">
      <span className="text-sm md:text-md font-bold">{language.name}</span>
      <pre className="text-rose-600 text-lg mr-4">{"\u2217".repeat(language.proficiency || 0)}</pre>
    </li>
  )
}

const Languages = () => {
  return (
    <div>
      <Title icon_class="fas fa-language" title="Languages"/>
      <ul className="flex flex-wrap px-2 my-2">
        { BasicData.languages.map(languageFormatter) }
      </ul>
    </div>
  )
}

export default Languages
