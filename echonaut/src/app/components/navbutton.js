import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navbutton = ({graphic, label, onClick, linkTo}) => {
    return(
        <a href={linkTo} className="flex justify-center xl:justify-start m-1 p-3 h-[50px] w-[90%] hover:brightness-90 hover:cursor-pointer hover:backdrop-brightness-75 rounded-2xl transition-all duration-150 ease-in hover:text-pink-600">
            <div className="flex xl:ml-0 2xl:ml-3">
                <FontAwesomeIcon icon={graphic} className="scale-[150%] mx-5 mt-[3px]" />
                <div className="hidden xl:block text-lg tracking-wide">
                    {label}
                </div>
            </div>
        </a>
    )
}

// export const Button = ({children, type, onClick, buttonStyle, buttonSize, linkTo}) => {
//     const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
//     const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
//     return(
//         <a href={linkTo} className="btn-mobile">
//             <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//             onClick={onClick}
//             type={type}>
//                 {children}
//             </button>
//         </a>
//     )
// };