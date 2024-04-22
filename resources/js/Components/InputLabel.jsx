export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block mb-1 text-sm font-medium text-gray-900`}>
            {value ? value : children}
        </label>
    );
}
