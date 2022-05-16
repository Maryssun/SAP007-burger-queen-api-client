export const Inputs = ({
  type,
  className,
  value,
  placeholder,
  onChange,
  label,
  classNameLabel,
  ...props
}) => { 
  return (
      <div>
        <label className={classNameLabel}>{label}</label>
        <input
          type={type}
          className={className}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          {...props}
          />
      </div>
  );
}
