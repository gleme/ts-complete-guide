import { Analyzer } from './Analyzer';
import { OutputTarget } from './OutputTarget';
import { MatchData } from './MatchData';

export class Stats {

  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget,
  ) { }

  buildAndReport(data: MatchData[]): void {
    const result = this.analyzer.run(data);
    this.outputTarget.print(result);
  }

}