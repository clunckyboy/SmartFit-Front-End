import LoginButtons from "../components/Button";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div 
      className="w-full h-screen fixed inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/landing-page-background.png')" }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <nav className="absolute top-0 right-0 p-6 flex gap-3 z-10">
        <Link to="/signup">
          <LoginButtons name="Sign up" />
        </Link>
        <Link to="/login">
          <LoginButtons name="Login" />
        </Link>
      </nav>

      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-green-900/60 backdrop-blur-sm py-12 px-12 z-10">
        <h1 className="text-8xl font-black text-white mb-3 transition-all duration-700 opacity-100 translate-y-0" >
          SmartFit
        </h1>
        <h2 className="text-2xl font-bold text-white mb-2 transition-all duration-700 delay-150 opacity-100 translate-y-0">
          Meet SmartFit: Your Personal Digital Health Coach.
        </h2>
        <p className="text-base text-white/75 transition-all duration-700 delay-300 opacity-100 translate-y-0">
        Tailored nutrition and fitness plans powered by AI, designed to adapt as you grow.
        </p>
      </div>
    </div>
  )
}


export default LandingPage;