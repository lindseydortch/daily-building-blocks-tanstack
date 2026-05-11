import styles from '#/components/card/card.module.scss';
import Block from '../block/Block';

export default function Card({ labels, blocks }) {
  console.log('Card components');
  console.log(labels);
  return (
    <div className={styles.section}>
      <div className="header">
        <div className="day">Monday • May 11</div>
        <div className="heading">Today's blocks</div>
        <div className="info">
          <div className="stacked">6 of 16 stacked</div>
          <div className="time-completed">90 min in stack bank</div>
        </div>
      </div>
      <div className="labels">
        {labels?.map((label) => (
          <div className="label" key={label.id}>
            <div
              className="label-color"
              style={{ backgroundColor: `${label.hex}` }}
            >
              &nbsp;
            </div>
            <p>{label.name}</p>
          </div>
        ))}
      </div>
      <div className="body">
        {blocks?.map((block) => (
          <Block block={block} key={block.id} />
        ))}
      </div>
    </div>
  );
}
