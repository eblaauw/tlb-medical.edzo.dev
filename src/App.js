import logo from './logo.svg';
import './App.css';
import Providers from './components/Providers'
function App() {
  return (
    <div className="App">
       <div className="container mx-auto px-4 md:px-0 font-sans lg:w-3/4 mt-8 md:mt-16">
          <h1 className="text-4xl md:text-5xl font-bold relative font-title">talabat insurance checkerr</h1>

          <div className="w-full">
            <div className="mt-8 md:mt-8 mb-8 ">
                <div className="shadow p-5 rounded-md bg-yellow-500	text-white">
                    Check if your medical provider is covered under your network as a talabat UAE employee.
                </div>
            </div>
            <div className="w-full">
            <div className="mt-8 md:mt-8 mb-8 ">
              <Providers />
              </div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
