import styles from '#/components/block/block.module.scss';
import { FaPlus } from 'react-icons/fa6';

export default function Block({ block }) {
  return (
    <div className={styles.block}>
      {/* TODO: add in functionality for checkmark show and change color on complete */}
      <div className="status-bubble">&nbsp;</div>
      <div className="content">
        <div className="heading">
          <h3>{block.name}</h3>
          {/* TODO: functionality to display label based on the assigned label data */}
          <div className="label">&nbsp;</div>
        </div>
        <p>
          {block.loggedMinutes} min / {block.goalMinutes} min
        </p>
      </div>
      <div className="add-time">
        <FaPlus />
      </div>
      <div className="progress-bar d-none">&nbsp;</div>
    </div>
  );
}
