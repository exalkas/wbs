function ShowHeader(props) {
    return (
        <div className = "header">
            <p>{props.paragraph}</p>
            {props.text}
        </div>
    )
}

// For Components Naming use Pascal Casing = WordWord
// camel casing = wordWord
export default ShowHeader;