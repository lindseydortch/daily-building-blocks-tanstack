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
      <div className={styles.body}>
        <div className={styles.blocks}>
          {blocks?.map((block) => (
            <Block block={block} labels={labels} key={block.id} />
          ))}
        </div>
        <div className={styles.showMore}>
          <p>Show 9 more...</p>
        </div>
      </div>
    </div>
  );
}
