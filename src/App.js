import './App.css';
import Form from './Components/Form/Form.jsx';
import { FaMapMarkedAlt } from "react-icons/fa";
import consumirApi from  './Components/API/Api.js';



function App() {
  return (
    <div>
      <h1 className='title'>ENDEREÇO <FaMapMarkedAlt className='black'/></h1>
      <Form api = {consumirApi}/>
    </div>
  );
}

export default App;
