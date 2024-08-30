import React from "react";

type CheckboxItemProps = {
    name: string;
    value: string;
    checked: boolean;
    onChange: (value: string, checked: boolean) => void;
};

function CheckboxItem({ name, value, checked, onChange}: CheckboxItemProps) {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value, event.target.checked);
    };

    return (
        <div className="CheckboxItem">
            <input
                type="checkbox"
                name={name}
                id={value}
                value={value}
                checked={checked}
                onChange={handleChange}
            />
            <label htmlFor={value}>{value}</label>
        </div>
    );
}

export default CheckboxItem;
export type { CheckboxItemProps };
