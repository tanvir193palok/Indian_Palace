

const UsersPage = ({searchParams : {user}}) => {
  return (
    <div>
      {user ? user : "Usres page"}
    </div>
  )
}

export default UsersPage
