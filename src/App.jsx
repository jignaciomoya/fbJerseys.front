import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <header className="header">
        <Link to="/">
          <h1>Tienda de Camisetas de Fútbol</h1>
        </Link>
      </header>
      <main>
        {/* Aquí irá el contenido de la tienda, como la lista de camisetas */}
        <div className="products">
          {/* Ejemplo de un producto */}
          <div className="product">
            <img src="camiseta1.jpg" alt="Camiseta 1" />
            <h3>Camiseta 1</h3>
            <p>$20.00</p>
          </div>
          {/* Aquí puedes agregar más productos */}
        </div>
      </main>
      <footer className="footer">
        <p>Todos los derechos reservados &copy; 2024 Tienda de Camisetas de Fútbol</p>
      </footer>
    </div>
  );
}

export default App;
