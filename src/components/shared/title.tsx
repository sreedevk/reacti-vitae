const Title = (props: { icon_class: string, title: string }) => {
  return (
    <h3 className="border-solid border-b-4 border-t-4 border-gray-300 px-4 mb-4 text-lg font-bold uppercase">
      <i className={`${props.icon_class} mr-2 text-rose-700`}></i>
      {props.title}
    </h3>
  )
}

export default Title
