import BasicData from '../data/basic'
import Social from './Social'
import Contact from './Contact'

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row w-full justify-between container mx-auto text-center md:text-left">
      <div>
        <h1 className='font-anton text-3xl md:text-4xl'>
          <span className='mr-2'>
            {BasicData?.name?.first}
          </span>          
          <span className='text-rose-600'>
            {BasicData?.name?.last}
          </span>
        </h1>
        <h3 className='text-md font-bold'>{BasicData?.designation}</h3>
        <Social />
      </div>
      <Contact />
    </header>
  )
}

export default Header;
