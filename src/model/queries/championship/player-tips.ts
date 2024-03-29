import { z } from 'zod';
import { Tip } from '~/model/entity/championship/tip';

export const PlayerTips = z.object({
  playerId: z.string(),
  tips: z.record(Tip),
});

export type PlayerTips = z.infer<typeof PlayerTips>;
