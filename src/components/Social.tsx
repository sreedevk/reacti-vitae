import SocialData from '../data/social'

type SocialMediaLink = {
  name: string,
  icon: string,
  handle: string,
  url: string
}

const formatSocial = (social: SocialMediaLink) => {
  return (
    <li className='inline-block text-xs' key={social.name}>
      <a href={social.url} className='mx-1 underline hover:bg-rose-400 hover:text-white'>
        <i className={`${social.icon} mr-1`}></i>
        {social.handle}
      </a>
    </li>
  )
}

const Social = () => {
  const formattedSocials = SocialData?.map(formatSocial)

  return (
    <ul>
      { formattedSocials }
    </ul>
  )
}

export default Social;
