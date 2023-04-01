import GameCard from './components/GameCard'
import Header from './components/Header'
import games from './mocks/games.json'
function App () {
  return (
    <main className='flex flex-col min-h-screen bg-waves bg-bottom bg-no-repeat bg-fixed text-lg gap-16 pt-16'>
      <div className='mx-auto max-w-fit'>
        <Header />
        <GameCard games={games} />
      </div>
    </main>
  )
}

export default App
