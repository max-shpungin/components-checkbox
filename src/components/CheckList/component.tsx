import { useState } from "react";
import CheckboxItem, { CheckboxItemProps } from "../CheckboxItem/component";

type CheckListProps = {
    defaultItems: CheckboxItemProps[];
};



function CheckList({ defaultItems }: CheckListProps) {
    const [items, setItems] = useState(defaultItems);

    const handleCheckboxChange = (value: string, checked: boolean) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.value === value ? { ...item, checked: checked } : item
            )
        );
    };

    return (
        <div className="CheckList">
            <ul>
                {items.map((item: CheckboxItemProps) => (
                    <CheckboxItem
                        key={item.name}
                        name={item.name}
                        value={item.value}
                        checked={item.checked}
                        onChange={handleCheckboxChange}
                    />
                ))}
            </ul>
        </div>
    );
}

export default CheckList;
export type { CheckboxItemProps };
