import { SelectOptionsType } from "@/app/lib/types";
const Select = ({
    options,
    defaultValue,
    onChange,
    isDisabled = false
}: {
    options: SelectOptionsType[];
    defaultValue: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    isDisabled?: boolean;
}) => {
    return (
        <div className="inline-block relative w-48" >
            <select
                className="w-full h-10 px-2 rounded-lg cursor-pointer bg-gray-700 custom-select"
                defaultValue={defaultValue}
                onChange={onChange}
                disabled={isDisabled}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select >
        </div>
    )
}

export default Select