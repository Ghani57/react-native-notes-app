import NotesApp from './src/NotesApp';
import { store } from './src/app/store';
import { Provider } from 'react-redux';



export default function App() {
  return (
  <Provider store={store}>
    <NotesApp />
  </Provider> 
  )
}
