const IconComponent=({icon,text})=>{
    return( 
         <div className="dispatch-icon group bg-gray-300 hover:bg-gray-400 ">
             {icon}
            <span className='span-text'>{text}</span>
           
         
         </div>
    )
 }


 export default IconComponent;