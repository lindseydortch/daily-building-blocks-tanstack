import { createServerFn } from '@tanstack/react-start';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

export const fetchBlocks = createServerFn().handler(async () => {
  console.info('🏃‍♀️ Fetching blocks...');

  // const res = await fetch('/data/ddb-mock.json');

  // if (!res.ok) {
  //   throw new Error('❌ Failed to fetch blocks');
  // }

  const filePath = path.join(process.cwd(), 'public/data/ddb-mock.json');
  const file = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(file);

  // const blocks = await res.json();

  return data.blocks;
});
