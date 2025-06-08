import './App.css'
import AboutUs from './components/widgets/about-us'
import Header from './components/widgets/header'
import Service from './components/widgets/service'
import Contact from './components/widgets/contact'
import Footer from './components/widgets/footer'

function App() {

  return (
    <main className="wrapper flex flex-col max-w-[1200px] gap-y-20 m-auto px-2.5 text-appdark">
      <Header />
      <Service />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
