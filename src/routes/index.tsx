import Card from '#/components/card/Card';
import { fetchBlocks } from '#/utils/blocks';
import { fetchLabels } from '#/utils/labels';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  loader: async () => {
    const labels = await fetchLabels();
    const blocks = await fetchBlocks();

    return { labels, blocks };
  },
  component: Home,
});

function Home() {
  const { labels, blocks } = Route.useLoaderData();

  // console.log(labels);

  return (
    <section className="">
      <Card labels={labels} blocks={blocks} />
    </section>
  );
}
