import skyOfStar from "../images/SkyofStar.jpeg";

const SideBar = ({ setState }) => {
  return (
    <div className="flex flex-col border h-screen overscroll-none">
      <div className="relative">
        <img
          src={skyOfStar}
          className="w-[183px] h-[100px] md:w-[377px] md:h-[207px] rounded-2xl"
          alt="sky of star"
        />
        {/* Make text ODOT over image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white font-bold font-pmarker md:text-6xl">
          ODOT
        </div>
      </div>
      {/* To import an image, you need to import it first, then use it as the src attribute of an img tag. */}
      <div className="flex flex-col text-center">
        <button
          className="text-2xl font-pmarker border-blue-300 h-20 border-4 hover:rounded-lg hover:bg-blue-200 align-middle focus:bg-blue-400"
          onClick={() => setState("all_tasks")}
        >
          All tasks
        </button>
        <button
          className="text-2xl font-pmarker border-slate-300 h-20 border-4 hover:rounded-lg hover:bg-slate-400 align-middle focus:bg-slate-400"
          onClick={() => setState("todo")}
        >
          TODO
        </button>
        {/* <button
          className="text-2xl font-pmarker border-red-300 border-4 h-20 hover:rounded-lg hover:bg-red-400 focus:bg-red-400"
          onClick={() => setState("doing")}
        >
          DOING
        </button> */}
        <button
          className="text-2xl font-pmarker border-green-300 h-20 border-4 hover:rounded-lg hover:bg-green-400 focus:bg-green-400"
          onClick={() => setState("done")}
        >
          DONE
        </button>
        {/* <button
          className="text-2xl font-pmarker border-yellow-200 h-20 border-4 hover:rounded-lg hover:bg-yellow-400 focus:bg-yellow-400"
          onClick={() => setState("cancel")}
        >
          CANCELLED
        </button> */}
      </div>
    </div>
  );
};

export default SideBar;
