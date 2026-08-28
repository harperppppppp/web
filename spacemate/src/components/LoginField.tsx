import styles from './FormComponents.module.css';

interface LoginFieldProps {
  readonly id: string;
  readonly label: string;
  readonly type: "email" | "password" | "text";
  readonly value: string;
  readonly placeholder?: string;
  readonly note?: string;
  readonly onNoteClick?: () => void;
  readonly onChange: (value: string) => void;
}

export function LoginField({
  id,
  label,
  type,
  value,
  placeholder,
  note,
  onNoteClick,
  onChange
}: LoginFieldProps) {
  return (
    <div className={styles.login_field}>
      <div className={styles.login_field_row}>
        <label htmlFor={id}>{label}</label>

        {note === undefined ? null : onNoteClick === undefined ? (
          <span className={styles.field_note}>{note}</span>
        ) : (
          <button
            className={styles.field_note_button}
            type="button"
            onClick={onNoteClick}
          >
            {note}
          </button>
        )}
      </div>

      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={
          type === "email"
            ? "username"
            : type === "password"
              ? "current-password"
              : "name"
        }
        onChange={(event) => {
          onChange(event.currentTarget.value);
        }}
      />
    </div>
  );
}