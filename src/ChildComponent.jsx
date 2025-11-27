const ChildComponent = ({title , children}) => {
    
    return (
        <div>
            <h1>{title}</h1>
            <br/>
            {children}
            <br/>
            {children}
            <br/>
            {children}
        </div>
    )
}

export default ChildComponent ;