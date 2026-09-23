const FEDERAL = {
    single: {
        deduction: 16100,
        brackets: [
            [12400, 0.10],
            [50400, 0.12],
            [105700, 0.22],
            [201775, 0.24],
            [256225, 0.32],
            [640600, 0.35],
            [Infinity, 0.37]
        ]
    },

    married: {
        deduction: 32200,
        brackets: [
            [24800, 0.10],
            [100800, 0.12],
            [211400, 0.22],
            [403550, 0.24],
            [512450, 0.32],
            [768700, 0.35],
            [Infinity, 0.37]
        ]
    },

    hoh: {
        deduction: 24150,
        brackets: [
            [17700, 0.10],
            [67450, 0.12],
            [105700, 0.22],
            [201750, 0.24],
            [256200, 0.32],
            [640600, 0.35],
            [Infinity, 0.37]
        ]
    }
};


/*
    IMPORTANT:

    State tax data below is intentionally treated as an
    ESTIMATE rather than an exact payroll/tax-return engine.

    State tax systems can involve:
    - different deductions
    - exemptions
    - credits
    - local taxes
    - special rules
    - different filing-status treatment

    Verify state-specific rules before presenting results
    as exact tax calculations.
*/

const STATES = {

    alabama: {
        brackets: [[500, 0.02], [3000, 0.04], [Infinity, 0.05]],
        deduction: 3000
    },

    alaska: {
        brackets: [],
        deduction: 0
    },

    arizona: {
        brackets: [[Infinity, 0.025]],
        deduction: 8350
    },

    arkansas: {
        brackets: [[4600, 0.02], [Infinity, 0.039]],
        deduction: 2470
    },

    california: {
        brackets: [
            [11079, 0.01],
            [26264, 0.02],
            [41452, 0.04],
            [57542, 0.06],
            [72724, 0.08],
            [371479, 0.093],
            [445771, 0.103],
            [742953, 0.113],
            [1000000, 0.123],
            [Infinity, 0.133]
        ],
        deduction: 5540
    },

    colorado: {
        brackets: [[Infinity, 0.044]],
        deduction: 16100
    },

    connecticut: {
        brackets: [
            [10000, 0.02],
            [50000, 0.045],
            [100000, 0.055],
            [200000, 0.06],
            [250000, 0.065],
            [500000, 0.069],
            [Infinity, 0.0699]
        ],
        deduction: 0
    },

    delaware: {
        brackets: [
            [2000, 0.022],
            [5000, 0.039],
            [10000, 0.048],
            [20000, 0.052],
            [25000, 0.0555],
            [60000, 0.066],
            [Infinity, 0.066]
        ],
        deduction: 3250
    },

    florida: {
        brackets: [],
        deduction: 0
    },

    georgia: {
        brackets: [[Infinity, 0.0519]],
        deduction: 12000
    },

    hawaii: {
        brackets: [
            [9600, 0.014],
            [14400, 0.032],
            [19200, 0.055],
            [24000, 0.064],
            [36000, 0.068],
            [48000, 0.072],
            [125000, 0.076],
            [175000, 0.079],
            [225000, 0.09],
            [275000, 0.10],
            [325000, 0.11],
            [Infinity, 0.11]
        ],
        deduction: 4400
    },

    idaho: {
        brackets: [[Infinity, 0.053]],
        deduction: 16100
    },

    illinois: {
        brackets: [[Infinity, 0.0495]],
        deduction: 0
    },

    indiana: {
        brackets: [[Infinity, 0.0295]],
        deduction: 0
    },

    iowa: {
        brackets: [[Infinity, 0.038]],
        deduction: 16100
    },

    kansas: {
        brackets: [[23000, 0.052], [Infinity, 0.0558]],
        deduction: 3605
    },

    kentucky: {
        brackets: [[Infinity, 0.035]],
        deduction: 3360
    },

    louisiana: {
        brackets: [[Infinity, 0.03]],
        deduction: 12500
    },

    maine: {
        brackets: [
            [25600, 0.058],
            [51000, 0.0675],
            [Infinity, 0.0715]
        ],
        deduction: 8350
    },

    maryland: {
        brackets: [
            [1000, 0.02],
            [2000, 0.03],
            [3000, 0.04],
            [100000, 0.0475],
            [125000, 0.05],
            [150000, 0.0525],
            [250000, 0.055],
            [Infinity, 0.0575]
        ],
        deduction: 3350
    },

    massachusetts: {
        brackets: [
            [1000000, 0.05],
            [Infinity, 0.09]
        ],
        deduction: 0
    },

    michigan: {
        brackets: [[Infinity, 0.0425]],
        deduction: 0
    },

    minnesota: {
        brackets: [
            [32200, 0.0535],
            [105700, 0.068],
            [193240, 0.0785],
            [Infinity, 0.0985]
        ],
        deduction: 15000
    },

    mississippi: {
        brackets: [[Infinity, 0.04]],
        deduction: 2300
    },

    missouri: {
        brackets: [
            [1273, 0.02],
            [2546, 0.025],
            [3819, 0.03],
            [5092, 0.035],
            [6365, 0.04],
            [7638, 0.045],
            [Infinity, 0.047]
        ],
        deduction: 16100
    },

    montana: {
        brackets: [
            [42000, 0.047],
            [Infinity, 0.0565]
        ],
        deduction: 16100
    },

    nebraska: {
        brackets: [
            [39810, 0.0246],
            [40770, 0.0351],
            [43960, 0.0501],
            [Infinity, 0.0455]
        ],
        deduction: 8850
    },

    nevada: {
        brackets: [],
        deduction: 0
    },

    "new-hampshire": {
        brackets: [],
        deduction: 0
    },

    "new-jersey": {
        brackets: [
            [20000, 0.014],
            [35000, 0.0175],
            [40000, 0.035],
            [75000, 0.05525],
            [500000, 0.0637],
            [1000000, 0.0897],
            [Infinity, 0.1075]
        ],
        deduction: 0
    },

    "new-mexico": {
        brackets: [
            [5500, 0.017],
            [11000, 0.032],
            [16000, 0.047],
            [210000, 0.049],
            [Infinity, 0.059]
        ],
        deduction: 0
    },

    "new-york": {
        brackets: [
            [8500, 0.04],
            [11700, 0.045],
            [13900, 0.0525],
            [80650, 0.055],
            [215400, 0.06],
            [1077550, 0.0685],
            [5000000, 0.0965],
            [25000000, 0.103],
            [Infinity, 0.109]
        ],
        deduction: 8000
    },

    "north-carolina": {
        brackets: [[Infinity, 0.0399]],
        deduction: 12750
    },

    "north-dakota": {
        brackets: [
            [48475, 0.0195],
            [244825, 0.025]
        ],
        deduction: 16100
    },

    ohio: {
        brackets: [[26050, 0.0275]],
        deduction: 0
    },

    oklahoma: {
        brackets: [
            [3750, 0.025],
            [4900, 0.035],
            [7200, 0.045],
            [Infinity, 0.045]
        ],
        deduction: 6350
    },

    oregon: {
        brackets: [
            [4550, 0.0475],
            [11400, 0.0675],
            [125000, 0.0875],
            [Infinity, 0.099]
        ],
        deduction: 2910
    },

    pennsylvania: {
        brackets: [[Infinity, 0.0307]],
        deduction: 0
    },

    "rhode-island": {
        brackets: [
            [82050, 0.0375],
            [186450, 0.0475],
            [Infinity, 0.0599]
        ],
        deduction: 11200
    },

    "south-carolina": {
        brackets: [
            [3640, 0.03],
            [18230, 0.06],
            [Infinity, 0.06]
        ],
        deduction: 8350
    },

    "south-dakota": {
        brackets: [],
        deduction: 0
    },

    tennessee: {
        brackets: [],
        deduction: 0
    },

    texas: {
        brackets: [],
        deduction: 0
    },

    utah: {
        brackets: [[Infinity, 0.045]],
        deduction: 0
    },

    vermont: {
        brackets: [
            [49400, 0.0335],
            [119700, 0.066],
            [249700, 0.076],
            [Infinity, 0.0875]
        ],
        deduction: 7650
    },

    virginia: {
        brackets: [
            [3000, 0.02],
            [5000, 0.03],
            [17000, 0.05],
            [Infinity, 0.0575]
        ],
        deduction: 8750
    },

    washington: {
        brackets: [],
        deduction: 0
    },

    "west-virginia": {
        brackets: [
            [10000, 0.0222],
            [25000, 0.0296],
            [40000, 0.0333],
            [60000, 0.0444],
            [Infinity, 0.0482]
        ],
        deduction: 0
    },

    wisconsin: {
        brackets: [
            [14320, 0.035],
            [28640, 0.044],
            [315950, 0.0765],
            [Infinity, 0.0765]
        ],
        deduction: 13960
    },

    wyoming: {
        brackets: [],
        deduction: 0
    }
};


function money(value) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2
    }).format(value);
}


function progressiveTax(income, brackets) {

    if (!brackets || brackets.length === 0) {
        return 0;
    }

    let tax = 0;
    let previous = 0;

    for (const [limit, rate] of brackets) {

        if (income <= previous) {
            break;
        }

        const taxableAmount =
            Math.min(income, limit) - previous;

        tax += Math.max(0, taxableAmount) * rate;

        previous = limit;
    }

    return tax;
}


function calculateFederalTax(income, filing) {

    const data = FEDERAL[filing];

    if (!data) {
        return 0;
    }

    const taxableIncome =
        Math.max(0, income - data.deduction);

    return progressiveTax(
        taxableIncome,
        data.brackets
    );
}


function calculateStateTax(income, state, filing) {

    const data = STATES[state];

    if (!data || data.brackets.length === 0) {
        return 0;
    }

    let deduction = data.deduction;

    if (filing === "married") {
        deduction *= 2;
    }

    const taxableIncome =
        Math.max(0, income - deduction);

    return progressiveTax(
        taxableIncome,
        data.brackets
    );
}


function calculateSalary() {

    const salary =
        Number(document.getElementById("salary").value);

    const state =
        document.getElementById("state").value;

    const filing =
        document.getElementById("filing").value;


    if (!salary || salary <= 0) {

        alert("Please enter a valid annual salary.");

        return;
    }


    if (!state) {

        alert("Please select a state.");

        return;
    }


    /*
        Federal income tax
    */

    const federalTax =
        calculateFederalTax(
            salary,
            filing
        );


    /*
        State income tax
    */

    const stateTax =
        calculateStateTax(
            salary,
            state,
            filing
        );


    /*
        Social Security

        2026 wage base = $184,500
        Employee rate = 6.2%
    */

    const socialSecurity =
        Math.min(
            salary,
            184500
        ) * 0.062;


    /*
        Medicare

        Employee rate = 1.45%
        No wage base limit
    */

    const medicare =
        salary * 0.0145;


    /*
        Additional Medicare Tax

        Simplified employee estimate.
        MFJ threshold = $250,000
        Single / HOH = $200,000
    */

    const additionalMedicareThreshold =
        filing === "married"
            ? 250000
            : 200000;


    let additionalMedicare = 0;

    if (salary > additionalMedicareThreshold) {

        additionalMedicare =
            (
                salary -
                additionalMedicareThreshold
            ) * 0.009;
    }


    /*
        Total estimated tax
    */

    const totalTax =
        federalTax +
        stateTax +
        socialSecurity +
        medicare +
        additionalMedicare;


    /*
        Estimated take-home
    */

    const takeHome =
        Math.max(
            0,
            salary - totalTax
        );


    /*
        Pay periods
    */

    const monthly =
        takeHome / 12;

    const biweekly =
        takeHome / 26;

    const weekly =
        takeHome / 52;

    const hourly =
        takeHome / 2080;


    /*
        Display results
    */

    document.getElementById("annual").textContent =
        money(salary);

    document.getElementById("federal").textContent =
        money(federalTax);

    document.getElementById("stateTax").textContent =
        money(stateTax);

    document.getElementById("social").textContent =
        money(socialSecurity);

    document.getElementById("medicare").textContent =
        money(medicare);

    document.getElementById("additionalMedicare").textContent =
        money(additionalMedicare);

    document.getElementById("totalTax").textContent =
        money(totalTax);

    document.getElementById("takeHome").textContent =
        money(takeHome);

    document.getElementById("monthly").textContent =
        money(monthly);

    document.getElementById("biweekly").textContent =
        money(biweekly);

    document.getElementById("weekly").textContent =
        money(weekly);

    document.getElementById("hourly").textContent =
        money(hourly);


    /*
        Show result section
    */

    document.getElementById("results").style.display =
        "block";


    /*
        Smooth scroll to result
    */

    document.getElementById("results").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/*
    Calculate button
*/

document
    .getElementById("calculateBtn")
    .addEventListener(
        "click",
        calculateSalary
    );


/*
    Enter key support
*/

document
    .getElementById("salary")
    .addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {
                calculateSalary();
            }

        }
    );