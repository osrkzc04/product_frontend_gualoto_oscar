function ButtonComponent({ type, text,onClick, disabled,buttonType="button"}) {

    return (
        <button 
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${typeClasses[type]}`}
            type={buttonType}
        >
            {text}
        </button>
    );
}

export default ButtonComponent;

  const baseClasses = "px-4 py-2 font-medium rounded transition-colors mr-1";
  const typeClasses = {  
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-800",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    warming: "bg-yellow-400 text-white hover:bg-yellow-500",
  };
