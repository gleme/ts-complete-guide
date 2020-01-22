import fs from 'fs';
import { OutputTarget } from '../OutputTarget';

export class HtmlReport implements OutputTarget {
  
  constructor(
    public outputPath: string
  ) { }


  private buildHtml(info: string): string {
    return `
      <div>
        <h1>Analysis Output:</h1>
        <div>${info}</div>
      </div>
    `;
  }

  print(report: string): void {
    fs.writeFileSync(this.outputPath, this.buildHtml(report));
  }

}