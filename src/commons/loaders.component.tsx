
export const LoadingMap = () => {
    return(
      <div className="flex items-center justify-center w-full h-[510px] bg-gray-800 text-white rounded shadow-lg p-4 mb-5 animate-pulse"/>
    )
  }
  
 export const LoadingTable = () => {
    return(
      <>
        <div className="h-12 rounded-md bg-gray-800 bg-gray-700 mb-2.5 animate-pulse"></div>
        <div className="h-12 rounded-md bg-gray-800 bg-gray-700 mb-2.5 animate-pulse"></div>
        <div className="h-12 rounded-md bg-gray-800 bg-gray-700 mb-2.5 animate-pulse"></div>
        <div className="h-12 rounded-md bg-gray-800 bg-gray-700 animate-pulse"></div>
      </>
    )
  }