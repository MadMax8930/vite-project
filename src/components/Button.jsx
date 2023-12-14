/* eslint-disable react/prop-types */
const Button = ({title, action}) => {
   return (
     <button type="button" className="custom-btn" onClick={action}>
       <span className="flex-1">
          {title}
       </span>
     </button>
   )
}
 
export default Button