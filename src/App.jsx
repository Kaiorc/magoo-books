import './App.css'
import Logo from './components/Logo/Logo'
import iconUser from './images/perfil.svg'
import iconBag from './images/sacola.svg'

export default function App() {
  
  const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
  const icons = [iconUser, iconBag]

  return (
    <div className='App'>
      <header className='App-header'>
        <Logo />
        <ul className='options'>
          { textOptions.map ( (text) => (
              <li className='option'><p>{text}</p></li>
          ) ) }
        </ul>
        <ul className='icons'>
            { icons.map( (icon) => (
              <li className='icon'><img src={icon}></img></li>
            )) }
        </ul>
      </header>
    </div>
  )
}