import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('./football.csv');
reader.read();

const teamName = 'Man United';
let manUnitedWins = 0;

for (const match of reader.data) {
  if (match[1] === teamName && match[5] === MatchResult.HOME_WON) {
    manUnitedWins++;
  } else if (match[2] === teamName && match[5] === MatchResult.AWAY_WON) {
    manUnitedWins++;
  }
}


console.log(`${teamName} won ${manUnitedWins} games`);