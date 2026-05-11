import styles from '#/components/card/cardHeader.module.scss';

export default function CardHeader() {
  return (
    <div className="header">
      <div className={styles.day}>Monday • May 11</div>
      <h2 className={styles.heading}>Today's Blocks</h2>
      <div className={styles.info}>
        <div className={styles.stacked}>6 of 16 stacked</div>
        <span>|</span>
        <div className={styles.time}>90 min in stack bank</div>
      </div>
    </div>
  );
}
