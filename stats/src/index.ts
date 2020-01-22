import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Stats } from './Stats';
import { HtmlReport } from './reporters/HtmlReport';

const matchReader = new MatchReader(new CsvFileReader('./football.csv'));
matchReader.load();

const stats = new Stats(
  new WinsAnalysis('Man United'),
  new HtmlReport('./report.html')
);

stats.buildAndReport(matchReader.matches);