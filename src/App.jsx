import GameCard from './components/GameCard'
import Header from './components/Header'

function App () {
  return (
    <main className='flex flex-col min-h-screen bg-waves bg-bottom bg-no-repeat bg-fixed text-lg gap-16 pt-16 font-mina'>
      <Header />
      <section className='mx-auto max-w-full'>
        <GameCard />
      </section>
    </main>
  )
}

export default App
