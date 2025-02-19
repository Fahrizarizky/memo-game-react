import Header from "./components/Header";
import Footer from "./components/Footer";
import MemoryGame from "./MemoryGame";

function App() {

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <MemoryGame />
      <Footer />
    </div>
  );
}

export default App;
