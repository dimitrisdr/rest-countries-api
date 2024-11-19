export default function DataTable({data}) {
    return (
        <div className="country-info__table grid-item">
                {data.map(row => 
                    <div key={[Object.keys(row)[0]]} className="table-row flex-item">
                        <span className="table-cell fw-600">{Object.keys(row)}: </span>
                        <span className="table-cell table-cell-info text-ellipsis">{Object.values(row)}</span>
                    </div>
                )}
        </div>
    )
};
