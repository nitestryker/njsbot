const { exec } = require("child_process");
const fs = require("fs");

const VERSION = "V2"; // Change this as needed
const OUTPUT_FILE = `CHANGELOG_${VERSION}.md`;

console.log(`🔄 Generating ${OUTPUT_FILE} from Git commit history...`);

exec(
  `git log --pretty=format:"%h - %s (%ad)" --date=short`,
  (error, stdout) => {
    if (error) {
      console.error("❌ Error fetching Git log:", error);
      return;
    }

    // Format commit history
    let formattedLog = stdout
      .split("\n")
      .map(line => `- ${line}`)
      .join("\n");

    let changelogContent = `# 📜 Changelog ${VERSION}\n\n## 🔥 Recent Changes\n${formattedLog}\n`;

    fs.writeFileSync(OUTPUT_FILE, changelogContent, "utf8");
    console.log(`✅ Changelog successfully generated: ${OUTPUT_FILE}`);
  }
);
