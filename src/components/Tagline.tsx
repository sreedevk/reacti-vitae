import BasicData from '../data/basic'

const Tagline = () => {
  return (
    <h1 className="w-full uppercase font-staatliches tracking-widest text-center text-sm my-2 py-1 bg-rose-700 font-bold text-white">{BasicData?.tagline}</h1>   
  )
}

export default Tagline
