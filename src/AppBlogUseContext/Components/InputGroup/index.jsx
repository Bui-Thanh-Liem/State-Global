import "./InputGroup.css";

function InputGoup(prop) {
    const {label, type, value, setValue} = prop;
    
    return (
        <>
            <div className="inputGroup-container">
                <label>{label}</label>
                {type  === "textarea" ? 
                    <textarea 
                        onChange={(e) => setValue(e.target.value)} 
                        placeholder={value + "..."}
                    >
                    </textarea> :
                    <input 
                        type="text" 
                        onChange={(e) => setValue(e.target.value)} 
                        placeholder={value + "..."} 
                    />
                }

            </div>
        </>
    )
}

export default InputGoup;