const InputForm = (props) => {
    return (
        <div className='row'>
            <label>{props.title}</label>
            <input
                type={props.type}
                placeholder={props.placeholder}
                id={props.id}
                autoComplete={props.autoComplete}
                required={props.required}
            />
        </div>
    )
}

export default InputForm