import { useApiCall } from './hooks/useApicall';
import Loading from './components/Loading/Loading';
import Table from './components/Table/Table';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  const url="https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";
  const {data,isLoading,error}=useApiCall(url);


if(error){
  return  <div>Something went wrong try again later....</div>

}
  return (
    <div className="App">
      <Navbar/>
     {
      isLoading?
      <Loading/>:
      <Table data={data}/>
     }
     <Footer/>
    </div>
  );
}

export default App;
