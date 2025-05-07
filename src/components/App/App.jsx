import "./App.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import StatisticsDashboard from "../Statistics/StatisticsDashboard";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navigation />
      <div className="statistics-wrapper">
        <StatisticsDashboard />
      </div>
    </div>
  );
}

export default App;
