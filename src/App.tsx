import "./App.css";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Body from "./sections/body";
function App() {
  return (
    <section className="h-screen bg-bg text-fg">
      <Header />
      <Body />
      <Footer />
    </section>
  );
}

export default App;
