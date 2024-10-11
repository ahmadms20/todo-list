const Button = ({children, color, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="text-white text-sm py-2 px-4 rounded-full"
            style={{ backgroundColor: color }}
        >
            {children}
        </button>
    )
};

export default Button;