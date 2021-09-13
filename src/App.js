const api = {
  key: "2a680c7a58c281fbfcd8d9a2a5dcb921",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app warm">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
