import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>GameShop</h3>
      </header>
      <body className="App-body">
            <div className= "Produtosbarra">
              
              <h3>Produtos</h3>
              <div className= "Produtosorganiza">
                
                <form  >
                <span> Organizar por:</span>
                  <select id="orgprodutos" name="cars">
                    <option value="nome">Nome</option>
                    <option value="preço">Preço</option>
                    <option value="score">Score</option>
                  </select>
                  
                </form>
              </div>
            </div>
      </body>
      <footer className="App-footer">
            <h3>Carrinho</h3>
      </footer>
    </div>
  );
}

export default App;
