import {useEffect, useState} from "react";
import './index.css';

//fields
const initialFormValues = {fullname: "", phone_number:""}

function Form({addContact, contacts}) {
    const [form, setForm] = useState(initialFormValues)

    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts])

    const OnChangeInput = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const OnSubmitInput = (event) => {
        event.preventDefault();

        if(form.fullname === '' || form.phone_number === ''){
            return false;
        }

        addContact([...contacts, form])
    }

    return(
        <div className="formParent">

            <form onSubmit={OnSubmitInput}>
                <div className="input">
                    <input
                     name="fullname"
                     value={form.fullname}                     
                     placeholder="Full Name"
                     onChange={OnChangeInput}
                     //value={form.firstName}
                    />
                </div>
                <div className="input">
                    <input 
                     name="phone_number"
                     value={form.phone_number} 
                     placeholder="Phone Number"
                     onChange={OnChangeInput}
                     //value={form.lastName}
                    />
                </div>
                <div className="button">
                    <button>Add</button>
                </div>
            </form>  

        </div>  
    )
}

export default Form