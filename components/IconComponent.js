const IconComponent=({icon,text})=>{
    return( 
         <div className="dispatch-icon group ">
             {icon}
            <span className='span-text'>{text}</span>
           
         
         </div>
    )
 }


 export default IconComponent;