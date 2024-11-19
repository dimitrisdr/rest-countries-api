export default function InputGroup({searchData, setSearchData}) {
    
    function handleChange(e) {
        setSearchData(e.target.value)
    }

    return (
        <div className="input-container flex-item tools-item">
            <input 
            type="text" 
            className="toolsBar-section__input"
             placeholder="Search for a country"
             onChange={handleChange} 
             />
        </div>
    )
};
