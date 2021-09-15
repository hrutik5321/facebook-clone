import Image from "next/image";

function HomeLeftSlideBottom() {
  return (
    <div className="mt-1 ml-1">
      <h1 className="text-base font-medium text-gray-500">Your Shortcuts</h1>
      <ul className="mt-2">
        <li className="flex cursor-pointer hover:bg-gray-200 items-center h-11 w-full">
          <Image
            src="https://images.unsplash.com/photo-1543928612-0b3a1a5d9223?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8OCUyMGJhbGx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            alt="8 ball pool"
            width={32}
            height={32}
            className="h-8 w-8 rounded"
          />

          <p className="font-medium text-base text-gray-900 ml-2">
            8 Ball Pool
          </p>
        </li>
        <li className="flex cursor-pointer hover:bg-gray-200 items-center h-11 w-full">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9jjkZwMenQGrc7rkVaHd21G2eXq3IK-JFdw&usqp=CAU"
            alt="apple shooter"
            width={32}
            height={32}
            className="h-8 w-8 rounded"
          />

          <p className="font-medium text-base text-gray-900 ml-2">
            Apple Shooter
          </p>
        </li>
        <li className="flex cursor-pointer hover:bg-gray-200 items-center h-11 w-full">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNA-irOYVa8gE0-__q1cqn1lgQKlFvTx7nMoqILJ0fCiAzrwZXGxqmHzvH6s_4FX0O6ic&usqp=CAU"
            alt="crash drive"
            width={32}
            height={32}
            className="h-8 w-8 rounded"
          />

          <p className="font-medium text-base text-gray-900 ml-2">
            Crash Drive 2
          </p>
        </li>
        <li className="flex cursor-pointer hover:bg-gray-200 items-center h-11 w-full">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi2BDgkPIZgwBKtTYQAivyb3Ra4EIMspC2xQ&usqp=CAU"
            alt="angry birds"
            width={32}
            height={32}
            className="h-8 w-8 rounded"
          />

          <p className="font-medium text-base text-gray-900 ml-2">
            Angry Birds
          </p>
        </li>
        <li className="flex cursor-pointer hover:bg-gray-200 items-center h-11 w-full">
          <Image
            src="https://images-eu.ssl-images-amazon.com/images/I/71WbOyzuEuL.png"
            alt="baseball"
            width={32}
            height={32}
            className="h-8 w-8 rounded"
          />

          <p className="font-medium text-base text-gray-900 ml-2">Baseball</p>
        </li>
      </ul>
    </div>
  );
}

export default HomeLeftSlideBottom;
