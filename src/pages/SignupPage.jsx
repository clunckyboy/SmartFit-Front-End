import { Link } from "react-router-dom";
import Logo from '../assets/images/SFMonoLight.svg';

function SignupPage() {
  return (
    <div className="flex h-screen">
        <Link to="/"><button className="absolute top-0 ml-10 mt-10 py-2 px-1 w-20 rounded-lg bg-[#293F2A] text-white font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg">Home</button></Link>
      <div className="h-full flex flex-col w-3/5 items-center py-15 overflow-y-auto scrollbar-hide" id="kiri">
        <div className="relative flex items-center justify-center w-full max-w-xl mb-20">
          <h3 className="text-4xl font-special-gothic-expanded-one">Create Account</h3>
        </div>

        <form action="" className="w-lg flex flex-col justify-center space-y-3">
          <h6 className="text-xl font-montserrat font-bold mb-5">Credentials</h6>
          <div id="nama" className="flex gap-4 w-full">
            <div id="nama depan" className="flex flex-col flex-1">
              <label htmlFor="">First Name</label>
              <input type="text" className="border border-black px-2 py-1 rounded-lg shadow-md" />
            </div>
            <div id="nama belakang" className="flex flex-col flex-1">
              <label htmlFor="">Last Name</label>
              <input type="text" className="border border-black px-2 py-1 rounded-lg shadow-md" />
            </div>
          </div>
          <div id="username" className="flex flex-col" >
            <label htmlFor="">Username</label>
            <input type="text" className="border border-black px-2 py-1 rounded-lg shadow-md" />
          </div>
          <div id="email" className="flex flex-col">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="example@gmail.com" className="border border-black px-2 py-1 rounded-lg shadow-md" />
          </div>
          <div id="password" className="flex flex-col">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="6 characters minimum" className="border border-black px-2 py-1 rounded-lg shadow-md" />
          </div>
          <div id="sex" className="flex flex-col">
            <label htmlFor="">Sex</label>
            <select name="" id="" className="border border-black px-2 py-1 rounded-lg shadow-md">
              <option value="" disabled >Select a gender</option>
              <option value="Male">Male</option>
              <option value="female">female</option>
            </select>
          </div>
          
          <h6 className="text-xl font-montserrat font-bold mb-5 mt-6">Health Info</h6>
          <div id="fisik" className="flex gap-4 w-full">
            <div id="berat" className="flex flex-col flex-1">
              <label htmlFor="">Weight</label>
              <input type="number" placeholder="in kilograms" className="border border-black px-2 py-1 rounded-lg shadow-md" />
            </div>
            <div id="tinggi" className="flex flex-col flex-1">
              <label htmlFor="">Height</label>
              <input type="number" placeholder="in centimeters" className="border border-black px-2 py-1 rounded-lg shadow-md" />
            </div>
          </div>
          <div id="goal" className="flex flex-col">
            <label htmlFor="">Goal</label>
              <select name="" id="" className="border border-black px-2 py-1 rounded-lg shadow-md">
                <option value="" disabled >Select a goal</option>
                <option value="lose weight">Lose Weight</option>
                <option value="gain weight">Gain Weight</option>
              </select>
            </div>

            <div className="flex justify-center">
              <button className="mt-4 py-2 px-1 w-40 rounded-lg bg-[#293F2A] text-white font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg">
                Sign Up
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
            <p >Already have an account? <Link to={"/login"} className="text-yellow-400 font-semibold cursor-pointer hover:underline">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage;