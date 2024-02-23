import { useState } from "react";

function List({contacts}) {
    const [filteredText, setFilteredText] = useState([]);

    const filter = contacts.filter((item) => {
        return Object.keys(item).some((key) => 
         item[key].toString().toLowerCase().includes(filteredText)
        )
    })

    return(
        <div className="listDiv">
            <input
             className="filterInput"
             placeholder="Filter"
             value={filteredText}
             onChange={(e) => setFilteredText(e.target.value)}
            />  
            <ul>
                {
                    filter.map((contact, index) => (
                        <li key={index}>{contact.fullname} {contact.phone_number}</li>
                    ))
                }
            </ul>
            <p>Number of contacts ({filter.length})</p>
        </div>
    )
}

export default List