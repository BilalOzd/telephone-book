import { useState } from "react";


function List({contacts}) {
    const [filteredText, setFilteredText] = useState([]);

    const filter = contacts.filter((item) => {
        return Object.keys(item).some((key) => 
         item[key].toString().toLowerCase().includes(filteredText)
        )
    })

    return(
        <div>
        <div>
            <input
             placeholder="Filter"
             value={filteredText}
             onChange={(e) => setFilteredText(e.target.value)}
            />
        </div>
        <div>
            <ul>
                {
                    filter.map((contact, index) => (
                        <li key={index}>{contact.fullname} {contact.phone_number}</li>
                    ))
                }
            </ul>
        </div>
        </div>
    )
}

export default List