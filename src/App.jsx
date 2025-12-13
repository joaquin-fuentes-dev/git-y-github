import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import SeccionPrincipal from "./components/SeccionPrincipal.jsx";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-fill bg-warning">
        <SeccionPrincipal />
      </main>
      <Footer />
    </div>
  );
}
