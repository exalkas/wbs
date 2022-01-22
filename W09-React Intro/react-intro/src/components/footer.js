export const Footer = props => <div style={
    {width: '100%', backgroundColor: 'black', height: '200px', color: ' white'}}>
        {props.text}
        {props.children}
    </div>