export const Card = ({children, className, title, body, ...props}) => (
    <div 
        className={`card ${className}`}
        {...props}
    >
        <div className="card-body">
            <div className="card-title">{title}</div>
            <div className="card-text">{body}</div>
            {children}
        </div>
    </div>
)