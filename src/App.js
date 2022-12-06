import Navbar from "./components/Navbar";
import RouterManager from "./RouterManager";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Navbar />
        <RouterManager />
      </RecoilRoot>
    </div>
  );
}

export default App;
