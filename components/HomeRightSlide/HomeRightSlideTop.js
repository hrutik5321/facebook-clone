import Image from "next/image";

function HomeRightSlideTop() {
  return (
    <>
      <p className="text-base font-semibold text-gray-600 mt-3 mb-3">
        Sponsered
      </p>
      <div className=" flex items-center rounded-lg cursor-pointer  p-2 hover:bg-gray-200">
        <div className="h-24 w-24 relative">
          <Image
            layout="fill"
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1520256788229-d4640c632e4b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFkdmVydGlzbWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">Signup For Free Now</p>
          <p className="text-xs text-gray-500">framer.com</p>
        </div>
      </div>
      <div className=" flex items-center rounded-lg cursor-pointer p-2 hover:bg-gray-200">
        <div className="h-24 w-24 relative">
          <Image
            layout="fill"
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1604727199378-bf5dd08726ad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFkdmVydGlzbWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">Buy New Phone</p>
          <p className="text-xs text-gray-500">apple.com</p>
        </div>
      </div>
    </>
  );
}

export default HomeRightSlideTop;
