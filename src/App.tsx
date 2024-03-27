import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <MainContainer />
      </div>
    </>
  );
}

export default App;
