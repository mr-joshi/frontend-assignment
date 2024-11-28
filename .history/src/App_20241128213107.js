import logo from './logo.svg';
import { useApiCall } from './hooks/useApicall';
import './App.css';

function App() {
  const url="https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";
  const {data,isLoading,error}=useApiCall(url);

  return (
    <div className="App">
     {
      isLoading?<Loading/>:
     }
    </div>
  );
}

export default App;