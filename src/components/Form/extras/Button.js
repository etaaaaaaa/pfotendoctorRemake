const Button = ({ text, infoPiece, set }) => {
    return (<button className='form_btn' type="button" value={infoPiece} onClick={() => set(text)}>{text}</button>)
}

export default Button
