import { IHouse } from '../../interfaces/iHouse';
import { Claude } from '../characters/claude';
import { Ignatz } from '../characters/ignatz';
import { Hilda } from '../characters/hilda';
import { Marianne } from '../characters/marianne';
import { Raphael } from '../characters/raphael';
import { Lysithea } from '../characters/lysithea';
import { Lorenz } from '../characters/lorenz';
import { Leonie } from '../characters/leonie';
import GoldenDeerBanner from './goldenDeerBanner.png';

export const GoldenDeer: IHouse = {
  name: 'Golden Deer',
  stub: 'goldenDeer',
  leader: Claude,
  color: 'yellow',
  students: [Claude, Ignatz, Hilda, Marianne, Raphael, Lysithea, Lorenz, Leonie],
  banner: GoldenDeerBanner,
  motto: 'Leicester Alliance'
};
