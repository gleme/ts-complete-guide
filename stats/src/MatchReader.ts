import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { DataReader } from './DataReader';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

export class MatchReader {

  public matches: MatchData[] = [];

  constructor(
    public reader: DataReader
  ) { }

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6]
      ];
    });
  }

  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

}
