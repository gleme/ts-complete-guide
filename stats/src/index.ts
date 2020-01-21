import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const matchReader = new MatchReader(new CsvFileReader('./football.csv'));
matchReader.load();

const teamName = 'Man United';
let manUnitedWins = 0;

for (const match of matchReader.matches) {
  if (match[1] === teamName && match[5] === MatchResult.HOME_WON) {
    manUnitedWins++;
  } else if (match[2] === teamName && match[5] === MatchResult.AWAY_WON) {
    manUnitedWins++;
  }
}


console.log(`${teamName} won ${manUnitedWins} games`);