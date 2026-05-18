import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <div className="flex h-screen">
      <div className="h-full flex flex-col w-3/5 items-center py-15 overflow-y-auto scrollbar-hide" id="kiri">
        <div className="relative flex items-center justify-center w-full max-w-xl mb-20">
          <Link to="/"><button className="absolute -left-15 top-1 border py-1 px-4 rounded-md bg-gray-300 cursor-pointer">Home</button></Link>
          <h3 className="text-4xl font-black">Create Account</h3>
        </div>

        <form action="" className="w-lg flex flex-col justify-center space-y-3">
          <h6 className="text-xl font-black mb-5">Credentials</h6>
          <div id="nama" className="flex gap-4 w-full">
            <div id="nama depan" className="flex flex-col flex-1">
              <label htmlFor="">First Name</label>
              <input type="text" className="border border-black px-2 py-1 rounded-lg"/>
            </div>
            <div id="nama belakang" className="flex flex-col flex-1">
              <label htmlFor="">Last Name</label>
              <input type="text" className="border border-black px-2 py-1 rounded-lg" />
            </div>
          </div>
          <div id="username" className="flex flex-col" >
            <label htmlFor="">Username</label>
            <input type="text" className="border border-black px-2 py-1 rounded-lg" />
          </div>
          <div id="email" className="flex flex-col">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="example@gmail.com" className="border border-black px-2 py-1 rounded-lg" />
          </div>
          <div id="password" className="flex flex-col">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="6 characters minimum" className="border border-black px-2 py-1 rounded-lg" />
          </div>
          <div id="sex" className="flex flex-col">
            <label htmlFor="">Sex</label>
            <select name="" id="" className="border border-black px-2 py-1 rounded-lg">
              <option value="" disabled >Select a gender</option>
              <option value="Male">Male</option>
              <option value="female">female</option>
            </select>
          </div>
          
          <h6 className="text-xl font-black mb-5 mt-6">Health Info</h6>
          <div id="fisik" className="flex gap-4 w-full">
            <div id="berat" className="flex flex-col flex-1">
              <label htmlFor="">Weight</label>
              <input type="number" placeholder="in kilograms" className="border border-black px-2 py-1 rounded-lg" />
            </div>
            <div id="tinggi" className="flex flex-col flex-1">
              <label htmlFor="">Height</label>
              <input type="number" placeholder="in centimeters" className="border border-black px-2 py-1 rounded-lg" />
            </div>
          </div>
          <div id="goal" className="flex flex-col">
            <label htmlFor="">Goal</label>
              <select name="" id="" className="border border-black px-2 py-1 rounded-lg">
                <option value="" disabled >Select a goal</option>
                <option value="lose weight">Lose Weight</option>
                <option value="gain weight">Gain Weight</option>
              </select>
            </div>

            <div className="flex justify-center">
              <button className="mt-4 py-2 px-1 border w-40 rounded-md bg-[#293F2A] text-white font-semibold cursor-pointer">
                Sign Up
              </button>
            </div>
        </form>
      </div>
      
      <div className="w-2/5 overflow-hidden flex flex-col h-full bg-cover bg-center relative justify-center items-center text-center text-white " style={{ backgroundImage: "url('/images/signup-background.png')" }} id="kanan">

        <div className="absolute inset-0 bg-green-700/60 backdrop-blur-xs" />

        <div className="relative z-10 h-full flex flex-col items-center justify-between py-10 px-8 text-white text-center">
          <div>
            <h2 className="text-5xl font-black">SmartFit</h2>
            <h6>Your Personal Digital Health Coach.</h6>
          </div>
          <div>
            <p className="text-4xl font-black">LOGO</p>       
          </div>
          <div>
            <p >Already have an account? <Link className="text-yellow-400 font-semibold cursor-pointer">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage;