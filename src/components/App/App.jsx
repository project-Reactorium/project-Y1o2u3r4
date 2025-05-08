import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import StatisticsDashboard from "../Statistics/StatisticsDashboard";

function App() {
  const currentPage = 'statistics'; 

  return (
    <div className="app-container">
      <Header />
      <Navigation />
      {currentPage === 'statistics' && <StatisticsDashboard />}
    </div>
  );
}

export default App;