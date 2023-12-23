import "./App.css";
import { CreditCard } from "./components/creditCard/CreditCard";
import { CardSelection } from "./components/cardSelection/CardSelection";
import { ImageSelection } from "./components/ImageSelection/ImageSelection";
function App() {
  return (
    <>
      <CardSelection />
      <CreditCard />
      <ImageSelection />
    </>
  );
}

export default App;
