import { Provider } from "react-redux";
import store from "./store";

import Home from "./Home";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Sidebar />
      <Home />
      <Footer />
    </Provider>
  );
}

export default App;
