import styles from '#/components/block/block.module.scss';
import { FaPlus } from 'react-icons/fa6';

export default function Block({ block, labels }) {
  return (
    <div className={styles.block}>
      {/* TODO: add in functionality for checkmark show and change color on complete */}
      <div className={styles.statusBubble}>&nbsp;</div>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h3>{block.name}</h3>
          {/* TODO: functionality to display label based on the assigned label data */}
          <div className={styles.labels}>
            <div className={styles.label}>&nbsp;</div>
            <div className={styles.label}>&nbsp;</div>
          </div>
        </div>
        <p>
          {block.loggedMinutes} min / {block.goalMinutes} min
        </p>
      </div>
      <div className={styles.addTime}>
        <FaPlus />
      </div>
      <div className={styles.progressBar}>&nbsp;</div>
    </div>
  );
}
