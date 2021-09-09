import Image from "next/image";

function LogoImage() {
  return (
    <Image
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl46Y59hurxnW500rklrPg_qKP7djl_xyE-w&usqp=CAU"
      width={56}
      height={56}
      className="rounded-full pr-5"
    />
  );
}

export default LogoImage;
