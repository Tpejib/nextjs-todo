export const Button = ({children, className,  ...props}) => (
    <button 
        type="button"
        className={`btn mt-3 ${className}`}
        {...props}
    >
        {children}
    </button>
)