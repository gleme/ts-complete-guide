import { Analyzer } from '../Analyzer';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {

  constructor(
    public teamName: string,
  ) { }

  run(matches: MatchData[]): string {
    let wins = 0
    for (const match of matches) {
      const [, homeTeam, awayTeam, , , matchResult] = match;
      if (homeTeam === this.teamName && matchResult === MatchResult.HOME_WON) {
        wins++;
      } else if (awayTeam === this.teamName && matchResult === MatchResult.AWAY_WON) {
        wins++;
      }
    }

    return `Team ${this.teamName} won ${wins} games`;
  }

}