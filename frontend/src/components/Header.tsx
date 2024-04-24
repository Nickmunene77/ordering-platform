import { Link } from 'react-router-dom'
import MobileNvigator from './MobileNavigator'
import MainNavigator from './MainNavigator'

export default function Header() {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500"
        >
          RuvaFoods
        </Link>
        <div className="md:hidden">
          <MobileNvigator />
        </div>
        <div className="hidden md:block">
          <MainNavigator />
        </div>
      </div>
    </div>
  )
}
