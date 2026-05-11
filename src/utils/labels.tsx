import { createServerFn } from '@tanstack/react-start';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

export const fetchLabels = createServerFn().handler(async () => {
  console.info('🏃‍♀️ Fetching labels...');

  // const res = await fetch('/data/labels-mock.json');

  // if (!res.ok) {
  //   throw new Error('❌ Failed to fetch labels');
  // }

  const filePath = path.join(process.cwd(), 'public/data/labels-mock.json');
  const file = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(file);

  // const labels = await res.json();

  return data.labels;
});
