import styles from '#/components/card/card.module.scss';
import Block from '../block/Block';
import Label from '../labels/Label';
import CardHeader from './CardHeader';

export default function Card({ labels, blocks }) {
  return (
    <div className={styles.card}>
      <CardHeader />
      <div className={styles.labels}>
        {labels?.map((label) => (
          <Label label={label} key={label.id} />
        ))}
      </div>
      <div className="body">
        <div className="blocks">
          {blocks?.map((block) => (
            <Block block={block} key={block.id} />
          ))}
        </div>
        <div className="show-more">
          <p>Show 9 more...</p>
        </div>
      </div>
    </div>
  );
}
