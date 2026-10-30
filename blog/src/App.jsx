import "./App.css";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <>
      <p className="text-center text-3xl">hello world</p>
    </>
  );
}

export default App;
