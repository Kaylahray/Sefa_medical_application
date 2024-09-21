// import { CheckIcon } from '@heroicons/react/20/solid'





export default function TimelineItem({number, title , result, result2}) {
  return (
    <> 
  <div className="group relative flex items-start">
    <span className="flex h-9 items-center">
      <span className="relative z-10 flex h-8 w-8 text-white items-center justify-center rounded-full bg-[#516563] group-hover:bg-gray-800">
       {number}
      </span>
    </span>
    <span className="ml-4 flex min-w-0 flex-col gap-4">
      <span className="text-sm font-medium">{title}</span>
      <span className="text-sm text-gray-500">Result : {result}</span>
      <span className="text-sm text-gray-500 ml-10">{result2}</span>

    </span>
  </div>
</>
  )
}




















































// const TimelineItem = ({ number, title, result }) => (
//   <div className="bg-gray-200 p-4 rounded-lg">
//     <div className="flex items-center space-x-2">
//       <div className="w-6 h-6 bg-green-600 text-white flex justify-center items-center rounded-full">
//         {number}
//       </div>
//       <div className="flex-grow">
//         <h4 className="font-bold">{title}</h4>
//         <p>{`Result: ${result}`}</p>
//       </div>
//     </div>
//   </div>
// );

// export default TimelineItem;
