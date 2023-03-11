import InputLabel from "../atoms/InputLabel"
import InputField from "../atoms/InputField"
import CustomErrorMsg from "../atoms/CustomErrorMsg"
const InputBox = (props) => {
const { label,forHtml, type, placeholder, id, name, inputClass } = props
    return (
        <div className="form-group">
            <InputLabel htmlFor={forHtml} label={label} />
            <InputField type={type} 
                placeholder={placeholder}
                id={id}  
                name={name}
                inputClass={inputClass}
            />
            <CustomErrorMsg name={name} />
        </div>
    )
}
export default  InputBox