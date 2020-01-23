import { Analyzer } from './Analyzer';
import { OutputTarget } from './OutputTarget';
import { MatchData } from './MatchData';
import { HtmlReport } from './reporters/HtmlReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';

export class Stats {

  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget,
  ) { }

  buildAndReport(data: MatchData[]): void {
    const result = this.analyzer.run(data);
    this.outputTarget.print(result);
  }

  static winsAnalysisWithHtmlReport(teamName: string, path: string): Stats {
    return new Stats(new WinsAnalysis(teamName), new HtmlReport(path));
  }

}