import './App.css';
import { SignupForm } from './components/ui-implementation/signup-form'

function App() {
  return (
    <div className="App flex flex-row	justify-center items-center min-h-screen font-sans subpixel-antialiased text-white">
      <div className="min-w-96">
        <h1 className="text-4xl font-bold pl-52">
          Welcome<br />
          to your<br />
          travel diary
        </h1>
      </div>
      <>
      <SignupForm/>
      </>
    </div>
  );
}

export default App;
