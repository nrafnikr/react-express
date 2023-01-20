import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from './components';
import { Detail, Edit, Home, Tambah } from './pages';

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes >
          <Route path="/" exact element={ <Home />} />
          <Route path="/detail/:id" element={ <Detail />} />
          <Route path="/edit/:id" element={ <Edit />} />
          <Route path="/tambah" element={ <Tambah />} />
        </Routes >
      </Router>
    </div>

  )
}

export default App;