import { Button } from "@/components/ui/button"
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="font-koho font-bold text-6xl">This is a heading</h1>
      <span className="font-koho text-xl">This is a heading</span>
      <p className="font-open-sans font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde qui ab error tempore architecto placeat. Nostrum deserunt quam maiores ipsum laborum. Totam architecto nesciunt iste, sed nam atque vel repellat quas reiciendis at tempora perspiciatis? Quia quisquam adipisci assumenda tempore odio nisi. Iusto rerum voluptatem deserunt deleniti eaque alias obcaecati, expedita provident beatae omnis ipsa. Ad, temporibus? Quo, sapiente distinctio culpa velit aliquam qui provident incidunt neque fugiat vitae sed suscipit fugit autem! Sunt doloremque quibusdam pariatur, totam rem excepturi cumque ut! Necessitatibus quod aut labore explicabo accusamus doloribus. Nisi repellendus, molestiae amet quo excepturi aspernatur corrupti soluta placeat similique vel doloremque, iste ipsum facilis quisquam sint fuga quibusdam nam aliquam sequi perspiciatis sed. Pariatur dolorem provident ut dolor aliquam minus, facilis voluptatum consequuntur nulla? Atque at incidunt quae beatae recusandae, dolores sequi corporis unde alias ducimus expedita ipsam iste dolorem iure autem laudantium. Maiores nihil odit quo obcaecati dolorem nemo? Assumenda quis laudantium quidem est, amet praesentium esse eveniet? Quia ullam fugit blanditiis, dolores excepturi accusamus sequi iure facilis harum. Soluta nemo placeat voluptas aperiam dicta! Cupiditate impedit accusamus totam et eaque commodi mollitia dolorem debitis facilis numquam alias at quaerat optio non fugit quia, aliquam magnam architecto.</p>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <Button>Click me</Button>
    </>
  )
}

export default App
