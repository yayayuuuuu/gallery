 const WorkCard=()=>{
  return(
        <div className="card w-60 bg-[#FFFBF3] shadow-md p-3 flex-shrink-0 hover:scale-105 transition-transform duration-200">
        <figure className="w-full h-32 m-0 p-0 bg-gray-200">
        <img
            src={item.categoryphoto}
            alt={`Image of ${item.categoryname}`}
            className="w-full h-full object-cover opacity-50 hover:opacity-80 transition-opacity duration-200"
        />
        </figure>
        <div className="mt-2">
            <h3 className="font-bold text-sm text-gray-600 sm:text-[16px] md:text-[18px]">{item.categoryname}</h3>
            <p className="text-xs text-gray-600">
            {item.categorydetail?.replace(/\n/g, '').slice(0, 50)}...
            </p>
        </div>
    </div>
  )
 };
 
 export default WorkCard;