import { ArrowCircleRightIcon } from "@heroicons/react/outline";

function Comment(props) {
  return (
    <div className="px-4 py-2">
      {/* comment input */}
      <div className="flex items-center">
        <img
          src="https://lh3.googleusercontent.com/xP7g66zcNJDaGjStAlmvg52W4tZAFGay0WSw7g73amk62BwFMBo8Rdi8llpmk36B9EqoyHoXDWrtaHDRn8obMkAEzQUjmy8dq4SkK1Mg_llJ5WACduWhII0SZS7YKGMflaW_kZZT5xXf1oCFj0sHLiybl9TtLRk2flHQ_jJbsRq9lcQqeFhQL6fYrmk1dB8EBFefZ2REgURLPejZO5x5WwQw6X4q_-Y5NYj6luLJkPNBQLM_7wt6hfYrkkPXHtmRJxEsIy-qGEF5To39i8mymx75WTsTdmsJDxwuhw_HkSlV-C4GJYcy-wyN_Zwa5o8vkXj3-vlAVM31fYCkY7ii_jkaS8BD7VYddshxEM0FM4b82p9pIb40AgVSSkP7tESXRd91W2YHMlvQvh64Vx0VUUAWb9K2Iidqbt-XgGIHTSE_rajUjXD5WF1ZSuIZlbUS4NmsaH3deKvSEWVcickKqzvacr1B5P8COglZN7gOBlLA6SeYaFx1NMYBjNfBi9TR8e_CWgkZzPszE0tK90JErpFNO80zTjqIYPujEsStIdTp77xhNAME-IXBKMj6g2tyzWi0Ev6Fh02T7orBUmA2IjWxAXXWvk7UZjCL2Z9HvFOo8Deqd8INgb4rdfANwNKcIKLqBw-augdVTaGyQBLcFCD0YYLu3mK1z0CWZdy2MCuXqiOr0hIlsB5uHBsEKX-wF9OiyBIEzYdGJrDDxcySV3HZ=w662-h882-no?authuser=0"
          alt="profile Photo"
          className="w-8 h-8 rounded-full"
        />
        <input
          type="text"
          placeholder="Write a comment...."
          className=" flex-1 rounded-2xl ml-2 mr-3 px-4 py-1.5 bg-gray-100 outline-none"
        />
        <button className="p-2 hover:bg-gray-200 rounded-full">
          <ArrowCircleRightIcon width={16} height={16} />
        </button>
      </div>
      {/* comment input end */}

      <div className="mt-4 flex">
        <img
          src="https://lh3.googleusercontent.com/xP7g66zcNJDaGjStAlmvg52W4tZAFGay0WSw7g73amk62BwFMBo8Rdi8llpmk36B9EqoyHoXDWrtaHDRn8obMkAEzQUjmy8dq4SkK1Mg_llJ5WACduWhII0SZS7YKGMflaW_kZZT5xXf1oCFj0sHLiybl9TtLRk2flHQ_jJbsRq9lcQqeFhQL6fYrmk1dB8EBFefZ2REgURLPejZO5x5WwQw6X4q_-Y5NYj6luLJkPNBQLM_7wt6hfYrkkPXHtmRJxEsIy-qGEF5To39i8mymx75WTsTdmsJDxwuhw_HkSlV-C4GJYcy-wyN_Zwa5o8vkXj3-vlAVM31fYCkY7ii_jkaS8BD7VYddshxEM0FM4b82p9pIb40AgVSSkP7tESXRd91W2YHMlvQvh64Vx0VUUAWb9K2Iidqbt-XgGIHTSE_rajUjXD5WF1ZSuIZlbUS4NmsaH3deKvSEWVcickKqzvacr1B5P8COglZN7gOBlLA6SeYaFx1NMYBjNfBi9TR8e_CWgkZzPszE0tK90JErpFNO80zTjqIYPujEsStIdTp77xhNAME-IXBKMj6g2tyzWi0Ev6Fh02T7orBUmA2IjWxAXXWvk7UZjCL2Z9HvFOo8Deqd8INgb4rdfANwNKcIKLqBw-augdVTaGyQBLcFCD0YYLu3mK1z0CWZdy2MCuXqiOr0hIlsB5uHBsEKX-wF9OiyBIEzYdGJrDDxcySV3HZ=w662-h882-no?authuser=0"
          alt="profile Photo"
          className="w-8 h-8 rounded-full flex-none"
        />
        <div className="py-1 rounded-md ml-2 px-2 bg-gray-200">
          <p className="text-xs  font-semibold">Hrutik Dhumal</p>
          <p className="text-sm flex-1">
            Hellow There The weather is awesome outside hhoh ijdiedi nndin
            jhrfhr hiehfirheifb hfrdhfu nefienifheinf efiejfiheifhi kenfijeifhi
            kieifjiefiehfi
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
