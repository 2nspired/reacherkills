import { IoMdRefresh } from "react-icons/io";

export default function ReacherSays() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-6 bg-cover bg-top">
      <div className="w-full text-center font-bebas text-2xl tracking-wider md:text-3xl lg:text-5xl">
        “Every action has its consequence, and I make sure they’re just.”
      </div>
      <button className="group flex items-center rounded-full p-2 font-bold text-white">
        <IoMdRefresh
          size={26}
          className="transition-transform duration-300 ease-in-out group-hover:rotate-180"
        />
      </button>
    </div>
  );
}
