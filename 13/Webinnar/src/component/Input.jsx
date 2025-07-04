export const Input = ({
    type,
    placeholder,
}) => {
    return(
        <span>
            <input type = {type} placeholder = {placeholder} className = "px-5 w-[360px] py-2 text-xl ml-7 bg-[#18406a] rounded-xl outline-none"></input>
        </span>
    )
}