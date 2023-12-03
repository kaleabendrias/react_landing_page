import weatherPng from "../assets/w.png"
import mapsPng from "../assets/s.png"
import placesPng from "../assets/p.png"


const Body = () => {
  return (
    <div
      className="text-slate-900 dark:bg-slate-800 dark:text-slate-300"
      id="body"
    >
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-2xl my-4 md:text-4xl">Explore kenya</div>
        <div className="w-3/4 text-xl md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          porro molestiae, consequatur sapiente assumenda facilis, provident
          quaerat, repudiandae obcaecati placeat reiciendis corporis voluptates
          recusandae vel! Sed, quibusdam sit. Eos, commodi! Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Veritatis magni asperiores est
          laboriosam. Architecto vitae aliquid obcaecati laudantium nostrum
          similique doloribus dolor, nam unde ut voluptas deleniti, sunt
          pariatur delectus!
        </div>
      </div>

      <div
        className="mx-auto flex flex-col items-center justify-center text-center my-4 w-[75%] h-screen md:flex-row"
        id="about"
      >
        <div className="border-gray-800 dark:border-gray-500 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
            <img
              src={placesPng}
              className="dark:block w-full h-full"
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
        </div>
        <div className="m-1 text-xl md:m-4 md:text-2xl">
          <div className="text-3xl">Over view of Places</div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          eligendi magni tempore, nam cum porro dolore itaque vitae alias odio
          illum. Reiciendis similique vitae quae, mollitia molestiae eveniet ab
          odio!
        </div>
      </div>

      <div className="mx-auto flex flex-col items-center justify-center text-center my-4 w-[75%] md:flex-row h-screen">
        <div className="border-gray-800 dark:border-gray-500 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
            <img
              src={mapsPng}
              className="dark:block w-full h-full"
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
        </div>
        <div className="mx-1 text-xl md:mx-4 md:text-2xl">
          <div className="text-3xl">Maps</div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          eligendi magni tempore, nam cum porro dolore itaque vitae alias odio
          illum. Reiciendis similique vitae quae, mollitia molestiae eveniet ab
          odio!
        </div>
      </div>

      <div className="mx-auto flex flex-col items-center justify-center text-center mt-4 w-[75%] md:flex-row h-screen">
        <div className="border-gray-800 dark:border-gray-500 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
            <img
              src={weatherPng}
              className="dark:block w-full h-full"
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
        </div>
        <div className="m-1 text-xl md:m-4 md:text-2xl">
          <div className="text-3xl">Weather</div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          eligendi magni tempore, nam cum porro dolore itaque vitae alias odio
          illum. Reiciendis similique vitae quae, mollitia molestiae eveniet ab
          odio!
        </div>
      </div>
    </div>
  );
}

export default Body