import styles from '#/components/labels/label.module.scss';

export default function Label({ label }) {
  return (
    <div className={styles.label} key={label.id}>
      <div
        className={styles.labelColor}
        style={{ backgroundColor: `${label.hex}` }}
      >
        &nbsp;
      </div>
      <p>{label.name}</p>
    </div>
  );
}
