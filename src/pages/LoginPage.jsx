import { Link } from "react-router-dom";
import Logo from '../assets/images/SFMonoLight.svg';

function LoginPage() {
  return (
    <div className="flex h-screen">
        <Link to="/"><button className="absolute top-0 ml-10 mt-10 py-2 px-1 w-20 rounded-lg bg-[#293F2A] text-white font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg">Home</button></Link>
      <div className="h-full justify-center flex flex-col w-3/5 items-center overflow-y-auto scrollbar-hide" id="kiri">
        <div className="relative flex items-center justify-center w-full max-w-xl mb-20">
          <h3 className="text-4xl font-special-gothic-expanded-one">Log In</h3>
        </div>

        <form action="" className="w-lg flex flex-col justify-center space-y-3">

          <div id="username" className="flex flex-col" >
            <label htmlFor="">Username / Email</label>
            <input type="text" className="border border-black px-2 py-1 rounded-lg shadow-md" />
          </div>
          <div id="password" className="flex flex-col">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="6 characters minimum" className="border border-black px-2 py-1 rounded-lg shadow-md" />
          </div>

            <div className="flex justify-center">
              <button className="mt-4 py-2 px-1 w-40 rounded-lg bg-[#293F2A] text-white font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg">
                Log In
              </button>
            </div>
        </form>
      </div>
      
      <div className="w-2/5 overflow-hidden flex flex-col h-full bg-cover bg-center relative justify-center items-center text-center text-white " style={{ backgroundImage: "url('/images/signup-background.png')" }} id="kanan">

        <div className="absolute inset-0 bg-green-700/60 backdrop-blur-xs" />

        <div className="relative z-10 h-full flex flex-col items-center justify-between py-10 px-8 text-white text-center">
          <div>
            <h2 className="text-5xl font-special-gothic-expanded-one">SmartFit</h2>
            <h6 className="font-montserrat">Your Personal Digital Health Coach.</h6>
          </div>
          <div>
            <img src={Logo} alt="SmartFit Logo" className="w-80 h-80" />   
          </div>
          <div>
            <p >Don’t have an account yet? <Link to={"/signup"} className="text-yellow-400 font-semibold cursor-pointer hover:underline">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;