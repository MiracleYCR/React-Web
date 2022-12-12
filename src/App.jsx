import routes from '@/router'
import { useRoutes, Link } from 'react-router-dom';

function App() {
  const Outlet = useRoutes(routes)

  return (
    <div className="App">
      { Outlet }
    </div>
  )
}

export default App
