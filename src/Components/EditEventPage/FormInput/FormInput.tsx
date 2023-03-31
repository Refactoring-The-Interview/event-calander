interface Props {
    value: any;
    setValue(value: any): void;
    title: string;
    type?: string;
    placeholder?: string;
}

export const FormInput = ({
    value,
    setValue,
    title,
    type = "text",
    placeholder = "",
}: Props) => {
    return (
        <label>
            <h6>{title}</h6>
            <input
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={(e) => {
                    const input = e.target.value;
                    setValue(input);
                }}
            />
        </label>
    );
};
