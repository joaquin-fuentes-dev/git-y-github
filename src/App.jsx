import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import SeccionPrincipal from "./components/SeccionPrincipal.jsx";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-fill">
        <SeccionPrincipal />
      </main>
      <Footer />
    </div>
  );
}
