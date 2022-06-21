/** packages */
import { Routes, Route } from "solid-app-router"

/** page components */
import { Battle, Home } from "pages"

/** main */
function App() {
  return (
    <Routes>
      {/** battle routes */}
      <Route path="/battle" element={Battle.Lobby} />
      <Route path="/battle/new" element={Battle.New} />

      {/** home routes */}
      <Route path="/" element={Home.Landing} />
      <Route path="/login" element={Home.Login} />
    </Routes>
  )
}

/** exports */
export { App };