const FunctionalComponent = () => {
  const value = prompt("1 or 2");
  return (
    <div>
      سلام دوستان
      {value === "1" ? <h1>خوش اومدی!</h1> : null}
    </div>
  );
};

export default FunctionalComponent;
