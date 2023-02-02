import { signIn, useSession } from "./auth";

function App() {
  const session = useSession();

  return (
    <div className="max-w-2xl mx-auto py-16 text-center">
      <div className="flex gap-8 justify-center p-8">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="h-16" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src="/react.svg" className="h-16" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold">Vite + React</h1>
      <div className="card">
        {session?.token ? (
          <div>
            <h2 className="text-2xl font-bold">Welcome {session?.token}</h2>
          </div>
        ) : (
          <button onClick={() => signIn()}>Sign In</button>
        )}
      </div>
    </div>
  );
}

export default App;
