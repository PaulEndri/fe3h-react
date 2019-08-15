import { IHouse } from '../../types/ihouse';
import { Dimitri } from '../characters/dimitri';
import { Sylvain } from '../characters/sylvain';
import { Dedue } from '../characters/dedue';
import { Ashe } from '../characters/ashe';
import { Ingrid } from '../characters/ingrid';
import { Annette } from '../characters/annette';
import { Felix } from '../characters/felix';
import { Mercedes } from '../characters/mercedes';
import BlueLionsBanner from './blueLionsBanner.png';

export const BlueLions: IHouse = {
  name: 'Blue Lions',
  stub: 'blueLions',
  color: 'blue',
  leader: Dimitri,
  students: [Dimitri, Sylvain, Dedue, Ashe, Ingrid, Annette, Felix, Mercedes],
  banner: BlueLionsBanner,
  motto: 'Holy Kingdom of Faerghus'
};
