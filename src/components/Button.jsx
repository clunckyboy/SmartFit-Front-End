function LoginButtons({ name }) {
  return (
    <button className="w-30 px-6 py-2 bg-gray-300 hover:bg-white text-black font-semibold rounded-lg transition-all duration-200 cursor-pointer">
          {name}
    </button>
  )
}

export default LoginButtons