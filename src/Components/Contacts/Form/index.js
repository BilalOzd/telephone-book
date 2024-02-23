import {useEffect, useState} from "react";

//fields
const initialFormValues = {fullname: "", phone_number:""}

function Form({addContact, contacts}) {
    const [form, setForm] = useState(initialFormValues) //you can set the initial value inside of the useState func. by declaring as parameter

    useEffect(() => {
        //useEffect works as a side effect operation of useState

        //the code we want to execute when useState worked
        setForm(initialFormValues);

        //optional return operation to "clean up"
    }, [contacts]) //dependency array

    const OnChangeInput = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const OnSubmitInput = (event) => {
        //When the form element is interacted with data, it reloads the page
        //We can prevent this with preventDefault()
        event.preventDefault();

        if(form.fullname === '' || form.phone_number === ''){
            return false;
        }

        //gönderdiğimiz fonk. içine önceki verileri ve yeni veriyi koyuyoruz
        addContact([...contacts, form])
    }

    return(
        <div className="formParent">
            <form onSubmit={OnSubmitInput}>
                <div className="formInput">
                    <input
                     name="fullname"
                     value={form.fullname}                     
                     placeholder="Full Name"
                     onChange={OnChangeInput}
                    />
                </div>
                <div className="formInput">
                    <input 
                     name="phone_number"
                     value={form.phone_number} 
                     placeholder="Phone Number"
                     onChange={OnChangeInput}
                    />
                </div>
                <div className="addButton">
                    <button>Add</button>
                </div>
            </form>  
        </div>  
    )
}

export default Form