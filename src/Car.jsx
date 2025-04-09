const Car = ({ make, model, year, color, price }) => {
  return (
    <div className="car-details">
      <h2>Car Information</h2>
      <ul>
        <li>
          <strong>Make:</strong> {make}
        </li>
        <li>
          <strong>Model:</strong> {model}
        </li>
        <li>
          <strong>Year:</strong> {year}
        </li>
        <li>
          <strong>Color:</strong> {color}
        </li>
        <li>
          <strong>Price:</strong> {price}
        </li>
      </ul>
    </div>
  );
};

export default Car;
