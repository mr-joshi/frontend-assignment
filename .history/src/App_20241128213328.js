import { useApiCall } from './hooks/useApicall';
import Loading from './compoents/Loading/Loading';
import Table from './compoents/Table/Table';
import './App.css';

function App() {
  const url="https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";
  const {data,isLoading,error}=useApiCall(url);

  return (
    <div className="App">
     {
      isLoading?
      <Loading/>:
      <Table/>
     }
    </div>
  );
}

export default App;
