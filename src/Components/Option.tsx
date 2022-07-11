// Option Component

interface optionprop {
    value: string
}

function Option({ value }: optionprop) {
    return <option className="hover:bg-blue-700" value={value}>{value}</option>
}

export default Option