import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="grid grid-flow-col">
        <Sidebar />
        <MainContainer />
      </div>
    </>
  );
}

export default App;
