import UserProfile from './components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    uniKey: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'vasu',
    role: 'free lancer',
  },
  {
    uniKey: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Anu',
    role: 'Business Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniKey} />
      ))}
    </ul>
  </div>
)

export default App
