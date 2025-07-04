export const Button = ({
    disabled,
    children,
    onClick
}) => {
    return(
        <span onClick = {onClick} className = {` px-35 py-2 ml-7 rounded-2xl text-xl cursor-pointer text-white ${disabled ? "bg-[#7f95ac]" : "bg-[#3edfcf]"}`}>
            {children}
        </span>
    )
}