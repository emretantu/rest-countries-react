import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <>
      <header>
        <nav>
          This is nav.
        </nav>
      </header>
      <main>
        This is main.
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout