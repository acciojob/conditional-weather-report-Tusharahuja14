
import React from "react";
import './../styles/App.css';

function App() {
  const [weather] = useState({
    temperature: 25,
    conditions: 'Sunny',
  });

  return (
    <div>
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App
