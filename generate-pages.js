const fs = require("fs");
const path = require("path");

const states = {
  Alabama: "alabama",
  Alaska: "alaska",
  Arizona: "arizona",
  Arkansas: "arkansas",
  California: "california",
  Colorado: "colorado",
  Connecticut: "connecticut",
  Delaware: "delaware",
  Florida: "florida",
  Georgia: "georgia",
  Hawaii: "hawaii",
  Idaho: "idaho",
  Illinois: "illinois",
  Indiana: "indiana",
  Iowa: "iowa",
  Kansas: "kansas",
  Kentucky: "kentucky",
  Louisiana: "louisiana",
  Maine: "maine",
  Maryland: "maryland",
  Massachusetts: "massachusetts",
  Michigan: "michigan",
  Minnesota: "minnesota",
  Mississippi: "mississippi",
  Missouri: "missouri",
  Montana: "montana",
  Nebraska: "nebraska",
  Nevada: "nevada",
  New_Hampshire: "new-hampshire",
  New_Jersey: "new-jersey",
  New_Mexico: "new-mexico",
  New_York: "new-york",
  North_Carolina: "north-carolina",
  North_Dakota: "north-dakota",
  Ohio: "ohio",
  Oklahoma: "oklahoma",
  Oregon: "oregon",
  Pennsylvania: "pennsylvania",
  Rhode_Island: "rhode-island",
  South_Carolina: "south-carolina",
  South_Dakota: "south-dakota",
  Tennessee: "tennessee",
  Texas: "texas",
  Utah: "utah",
  Vermont: "vermont",
  Virginia: "virginia",
  Washington: "washington",
  West_Virginia: "west-virginia",
  Wisconsin: "wisconsin",
  Wyoming: "wyoming"
};

const template = (stateName, slug, key) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>${stateName} Salary Calculator 2026 | Take-Home Pay</title>

    <meta name="description" content="Calculate your estimated 2026 ${stateName} take-home pay, federal tax, state tax, Social Security and Medicare taxes based on salary and filing status.">

    <meta name="keywords" content="${stateName} salary calculator, ${stateName} paycheck calculator, ${stateName} take home pay calculator, ${stateName} tax calculator, 2026 salary calculator">

    <meta name="robots" content="index, follow">

    <link rel="canonical" href="https://neupanesisir2-bit.github.io/us-salary-calculator/${slug}-salary-calculator/">

    <meta property="og:title" content="${stateName} Salary Calculator 2026 | Take-Home Pay">
    <meta property="og:description" content="Estimate your 2026 ${stateName} take-home pay and payroll taxes.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://neupanesisir2-bit.github.io/us-salary-calculator/${slug}-salary-calculator/">

    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "${stateName} Salary Calculator 2026",
        "url": "https://neupanesisir2-bit.github.io/us-salary-calculator/${slug}-salary-calculator/",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Web",
        "description": "Estimate ${stateName} take-home pay and payroll taxes."
    }
    </script>

    <style>
        * { box-sizing: border-box; }

        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #f4f7fb;
            color: #1f2937;
            line-height: 1.6;
        }

        .container {
            width: 92%;
            max-width: 900px;
            margin: auto;
        }

        header {
            background: #111827;
            color: white;
            padding: 28px 0;
            text-align: center;
        }

        header h1 {
            margin: 0 0 8px;
            font-size: 32px;
        }

        header p {
            margin: 0;
            color: #d1d5db;
        }

        .calculator,
        .content {
            background: white;
            margin: 30px auto;
            padding: 25px;
            border-radius: 14px;
            box-shadow: 0 5px 20px rgba(0,0,0,.07);
        }

        label {
            display: block;
            margin-top: 15px;
            margin-bottom: 6px;
            font-weight: bold;
        }

        input,
        select,
        button {
            width: 100%;
            padding: 13px;
            border-radius: 8px;
            border: 1px solid #d1d5db;
            font-size: 16px;
        }

        button {
            margin-top: 20px;
            background: #2563eb;
            color: white;
            border: none;
            cursor: pointer;
            font-weight: bold;
        }

        button:hover {
            background: #1d4ed8;
        }

        .results {
            margin-top: 25px;
            padding: 20px;
            background: #f3f4f6;
            border-radius: 10px;
        }

        .result-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #ddd;
        }

        .result-row:last-child {
            border-bottom: none;
        }

        footer {
            text-align: center;
            padding: 30px;
            color: #6b7280;
            font-size: 14px;
        }

        @media (max-width: 600px) {
            header h1 { font-size: 25px; }
            .calculator, .content { padding: 20px; }
        }
    </style>
</head>

<body>

<header>
    <div class="container">
        <h1>${stateName} Salary Calculator 2026</h1>
        <p>Estimate your take-home pay based on salary and filing status.</p>
    </div>
</header>

<main class="container">

<section class="calculator">

    <h2>${stateName} Take-Home Pay Calculator</h2>

    <label for="salary">Annual Salary</label>
    <input type="number" id="salary" value="75000" placeholder="Example: 75000">

    <label for="state">State</label>
    <select id="state">
        <option value="${key}" selected>${stateName}</option>
    </select>

    <label for="filing">Filing Status</label>
    <select id="filing">
        <option value="single">Single</option>
        <option value="married">Married Filing Jointly</option>
        <option value="hoh">Head of Household</option>
    </select>

    <button id="calculateBtn">Calculate Take-Home Pay</button>

    <div class="results">

        <div class="result-row">
            <span>Annual Salary</span>
            <strong id="grossSalary">$0</strong>
        </div>

        <div class="result-row">
            <span>Federal Tax</span>
            <strong id="federalTax">$0</strong>
        </div>

        <div class="result-row">
            <span>State Tax</span>
            <strong id="stateTax">$0</strong>
        </div>

        <div class="result-row">
            <span>Social Security</span>
            <strong id="socialSecurity">$0</strong>
        </div>

        <div class="result-row">
            <span>Medicare</span>
            <strong id="medicare">$0</strong>
        </div>

        <div class="result-row">
            <span>Additional Medicare</span>
            <strong id="additionalMedicare">$0</strong>
        </div>

        <div class="result-row">
            <span>Total Tax</span>
            <strong id="totalTax">$0</strong>
        </div>

        <div class="result-row">
            <span>Annual Take-Home Pay</span>
            <strong id="takeHome">$0</strong>
        </div>

        <div class="result-row">
            <span>Monthly Take-Home</span>
            <strong id="monthly">$0</strong>
        </div>

        <div class="result-row">
            <span>Biweekly Take-Home</span>
            <strong id="biweekly">$0</strong>
        </div>

        <div class="result-row">
            <span>Weekly Take-Home</span>
            <strong id="weekly">$0</strong>
        </div>

        <div class="result-row">
            <span>Hourly Take-Home</span>
            <strong id="hourly">$0</strong>
        </div>

    </div>

</section>

<section class="content">

    <h2>${stateName} Salary Calculator 2026</h2>

    <p>
        Use this ${stateName} salary calculator to estimate your take-home pay
        from your annual gross salary. Enter your salary and filing status to
        estimate federal and payroll taxes.
    </p>

    <h3>How to Calculate Take-Home Pay in ${stateName}</h3>

    <p>
        Enter your annual salary, choose your filing status, and select
        calculate. The calculator estimates annual, monthly, biweekly,
        weekly, and hourly take-home pay.
    </p>

    <h3>Important Information</h3>

    <p>
        This calculator provides an estimate for general informational
        purposes. Actual paychecks and tax liabilities can vary because of
        deductions, benefits, retirement contributions, tax credits,
        withholding elections, and other payroll factors.
    </p>

    <h3>Frequently Asked Questions</h3>

    <h4>How much is \$75,000 a year after taxes in ${stateName}?</h4>

    <p>
        Enter \$75,000 above and select your filing status to see an estimated
        take-home amount.
    </p>

    <h4>Can I calculate monthly take-home pay?</h4>

    <p>
        Yes. The calculator displays estimated annual, monthly, biweekly,
        weekly, and hourly take-home pay.
    </p>

    <h4>Is this an official tax calculator?</h4>

    <p>
        No. This tool is an estimate and should not be considered official
        tax or financial advice.
    </p>

</section>

</main>

<footer>
    © 2026 US Salary Calculator. For informational purposes only.
</footer>

<script src="../calculator.js"></script>

</body>
</html>
`;

for (const [stateName, slug] of Object.entries(states)) {
    const key = slug.replace(/-/g, "_");
    const folder = path.join(process.cwd(), `${slug}-salary-calculator`);

    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
    }

    fs.writeFileSync(
        path.join(folder, "index.html"),
        template(stateName.replace(/_/g, " "), slug, key),
        "utf8"
    );
}

const base = "https://neupanesisir2-bit.github.io/us-salary-calculator/";

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    <url>
        <loc>${base}</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
`;

for (const slug of Object.values(states)) {
    sitemap += `
    <url>
        <loc>${base}${slug}-salary-calculator/</loc>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
`;
}

sitemap += `
</urlset>
`;

fs.writeFileSync(
    path.join(process.cwd(), "sitemap.xml"),
    sitemap,
    "utf8"
);

console.log("DONE! 50 state pages + sitemap generated.");

