import Title from "./shared/title"
import BasicData from '../data/basic'

const languageFormatter = (language: { name: string, proficiency: number }) => {
  return (
    <li className="w-1/2 flex justify-between">
      <span className="text-md font-bold">{language.name}</span>
      <pre className="text-rose-600 text-xl mx-4">{"\u2217".repeat(language.proficiency || 0)}</pre>
    </li>
  )
}

const Languages = () => {
  return (
    <div>
      <Title icon_class="fas fa-language" title="Languages"/>
      <ul className="flex flex-wrap">
        { BasicData.languages.map(languageFormatter) }
      </ul>
    </div>
  )
}

export default Languages
