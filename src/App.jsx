import Car from "./Car";

const App = () => {
  return (
    <div>
      <Car make="Toyota" model="Camry" year={2022} color="Silver" price="$25,000" />
      <Car make="Honda" model="Civic" year={2023} color="Blue" price="$23,000" />
    </div>
  );
};

export default App;
