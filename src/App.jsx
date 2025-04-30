import {
  useEffect,
  useLayoutEffect,
  useInsertionEffect,
  useState,
} from "react";

const App = () => {
  const [color, setColor] = useState("white");

  // ✅ تست useEffect
  useEffect(() => {
    console.log("🎯 useEffect اجرا شد");
    setColor("lightgreen");
  }, []);

  // ✅ تست useLayoutEffect
  useLayoutEffect(() => {
    console.log("🛠️ useLayoutEffect اجرا شد");
    setColor("lightblue");
  }, []);

  // ✅ تست useInsertionEffect
  useInsertionEffect(() => {
    console.log("⚡ useInsertionEffect اجرا شد");
    setColor("orange");
  }, []);

  return (
    <div
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: color,
        margin: "30px auto",
        textAlign: "center",
        paddingTop: "30px",
        transition: "all 0.3s",
      }}
    >
      Box Color: {color}
    </div>
  );
};

export default App;
