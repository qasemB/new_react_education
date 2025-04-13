const ChildComponent = ({ text, children }) => {
  return (
    <div>
      <h1>Child Component</h1>
      <div>{text}</div>
      {children}
    </div>
  );
};

export default ChildComponent;
