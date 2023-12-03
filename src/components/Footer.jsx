const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-slate-900 h-full p-6">
        <p className="text-slate-300 font-bold text-lg mt-6">
          &copy; {new Date().getFullYear()} Copyright: Kaleab Endrias & John Kagunda
        </p>
      </div>
    </>
  );
}

export default Footer