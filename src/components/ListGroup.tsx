import { useState } from "react";

function ListGroup() {
    const items = ["New York", "San Francisco", "Tokyo", "London"];
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={`list-group-item ${
                            selectedIndex === index ? "active" : ""
                        }`}
                        key={item}
                        onClick={() => handleClick(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;