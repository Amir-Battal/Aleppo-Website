const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#fefae0] z-[9999] fixed top-0 left-0 right-0 bottom-0">
      <div className="text-center">
        <div className="animate-spin rounded-full border-4 border-t-[#dbad4f] border-gray-200 h-16 w-16 mb-4 mx-auto"></div>
        <p className="text-lg text-[#dbad4f] font-bold">جارٍ التحميل...</p>
      </div>
    </div>
  );
};

export default Loader;
