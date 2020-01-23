import { MatchReader } from './MatchReader';
import { Stats } from './Stats';

const matchReader = MatchReader.fromCsv('./football.csv');
const stats = Stats.winsAnalysisWithHtmlReport('Man United', './report.html');
matchReader.load();
stats.buildAndReport(matchReader.matches);