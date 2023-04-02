import Title from "./shared/title"
import WritingAndMediaList from '../data/writing_and_media'

type Article = {
  title: string,
  url: string,
  created_at: Date
}

const articleFormatter = (article: Article) => {
  return (
    <li className="my-1 font-bold hover:text-rose-500">
      <a href={article.url} className="underline text-sm">
        {article.title}
      </a>
    </li>
  )
}

const dateSorter = (a: Article, b: Article) => {
  return b.created_at.getTime() - a.created_at.getTime()
}

const WritingAndMedia = () => {
  return (
    <div className="w-full mr-2">
      <Title title="Writing & Media" icon_class="fa-solid fa-photo-film" />    
      <div>
        <ul>
          {WritingAndMediaList?.articles?.sort(dateSorter).map(articleFormatter)}
        </ul>
      </div>
    </div>
  )
}

export default WritingAndMedia
