import './App.css'
import Header from './components/widgets/header'
import Service from './components/widgets/service'

function App() {

  return (
    <div className="wrapper flex flex-col max-w-[1200px] gap-y-20 m-auto px-2.5">
      <Header />
      <Service />
    </div>
  )
}

export default App
