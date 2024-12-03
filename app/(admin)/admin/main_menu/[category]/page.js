

const MainMenuFoods = ({params: {category}}) => {
  return (
    <div>
    {decodeURIComponent(category)}
    </div>
  )
}

export default MainMenuFoods
