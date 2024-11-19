export default function InputItem({name, isOpened, setIsOpened, setIsSelected, setFilterData}) {

    function handleChange(e) {
        setIsOpened(!isOpened)
        setIsSelected(e.target.id)
        setFilterData(e.target.value)
        setFilterData(e.target.value)
    }

    return (
        <li className="options-item flex-item">
            <label htmlFor={name} className="options-item__name">
                <input 
                    type="radio"
                    id={name} 
                    value={name === 'All Regions' ? '': name} 
                    onChange={handleChange} 
                    name="region"
                    className="radio-input" 
                />
                {name}
            </label>
        </li>
    )
};
