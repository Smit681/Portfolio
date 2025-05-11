const LoadingScreen = () => {
  setTimeout(() => {
    const loader = document.querySelector(".backgroundImg");
    if (loader) {
      loader.classList.add("shutter");
    }
  }, 1000);
  return (
    <div className="animate-fadeIn fixed inset-0 bg-white flex items-center justify-center z-50">
      <img
        src="/assets/backgroud.jpg"
        alt="Background Image"
        className="backgroundImg"
      />
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
      <div className="mt-auto mr-auto p-10 md:p-20 text-white ">
        <h1 className="text-3xl tracking-wider">Welcome</h1>
        <h1 className="text-6xl font-bold tracking-wider">Loading...</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
