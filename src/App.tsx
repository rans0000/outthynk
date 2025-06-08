import './App.css'
import AboutUs from './components/widgets/about-us'
import Contact from './components/widgets/contact'
import Footer from './components/widgets/footer'
import Header from './components/widgets/header'
import Service from './components/widgets/service'

function App() {

  return (
    <main className="wrapper flex flex-col max-w-[1200px] gap-y-20 m-auto text-appdark">
      {/* <Hero /> */}
      <Header />
      <Service />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
