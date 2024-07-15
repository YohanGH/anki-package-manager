import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <my>App</my>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
