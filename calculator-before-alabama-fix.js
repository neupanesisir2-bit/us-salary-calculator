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
        singleBrackets: [[0, 0.02], [500, 0.04], [3000, 0.05]],
        marriedBrackets: [[0, 0.02], [1000, 0.04], [6000, 0.05]],
        singleDeduction: 3000,
        marriedDeduction: 8500
    },

    alaska: {
        singleBrackets: [],
        marriedBrackets: [],
        singleDeduction: 0,
        marriedDeduction: 0
    },

    arizona: {
        singleBrackets: [[Infinity, 0.025]],
        marriedBrackets: [[Infinity, 0.025]],
        singleDeduction: 8350,
        marriedDeduction: 16700
    },

    arkansas: {
        singleBrackets: [[0, 0.02], [4600, 0.039]],
        marriedBrackets: [[0, 0.02], [4600, 0.039]],
        singleDeduction: 2470,
        marriedDeduction: 4940
    },

    california: {
        singleBrackets: [
            [0, 0.01], [11079, 0.02], [26264, 0.04],
            [41452, 0.06], [57542, 0.08], [72724, 0.093],
            [371479, 0.103], [445771, 0.113],
            [742953, 0.123], [1000000, 0.133]
        ],
        marriedBrackets: [
            [0, 0.01], [22158, 0.02], [52528, 0.04],
            [82904, 0.06], [115084, 0.08], [145448, 0.093],
            [742958, 0.103], [891542, 0.113],
            [1485906, 0.123], [Infinity, 0.133]
        ],
        singleDeduction: 5540,
        marriedDeduction: 11080
    },

    colorado: {
        singleBrackets: [[Infinity, 0.044]],
        marriedBrackets: [[Infinity, 0.044]],
        singleDeduction: 16100,
        marriedDeduction: 32200
    },

    connecticut: {
        singleBrackets: [
            [0, 0.02], [10000, 0.045], [50000, 0.055],
            [100000, 0.06], [200000, 0.065],
            [250000, 0.069], [500000, 0.0699]
        ],
        marriedBrackets: [
            [0, 0.02], [20000, 0.045], [100000, 0.055],
            [200000, 0.06], [400000, 0.065],
            [500000, 0.069], [1000000, 0.0699]
        ],
        singleDeduction: 0,
        marriedDeduction: 0
    },

    delaware: {
        singleBrackets: [
            [2000, 0.022], [5000, 0.039], [10000, 0.048],
            [20000, 0.052], [25000, 0.0555], [60000, 0.066]
        ],
        marriedBrackets: [
            [2000, 0.022], [5000, 0.039], [10000, 0.048],
            [20000, 0.052], [25000, 0.0555], [60000, 0.066]
        ],
        singleDeduction: 3250,
        marriedDeduction: 6500
    },

    florida: {
        singleBrackets: [],
        marriedBrackets: [],
        singleDeduction: 0,
        marriedDeduction: 0
    },

    georgia: {
        singleBrackets: [[Infinity, 0.0519]],
        marriedBrackets: [[Infinity, 0.0519]],
        singleDeduction: 12000,
        marriedDeduction: 24000
    },

    hawaii: {
        singleBrackets: [
            [0, 0.014], [9600, 0.032], [14400, 0.055],
            [19200, 0.064], [24000, 0.068], [36000, 0.072],
            [48000, 0.076], [125000, 0.079],
            [175000, 0.0825], [225000, 0.09],
            [275000, 0.10], [325000, 0.11]
        ],
        marriedBrackets: [
            [0, 0.014], [19200, 0.032], [28800, 0.055],
            [38400, 0.064], [48000, 0.068], [72000, 0.072],
            [96000, 0.076], [250000, 0.079],
            [350000, 0.0825], [450000, 0.09],
            [550000, 0.10], [650000, 0.11]
        ],
        singleDeduction: 4400,
        marriedDeduction: 8800
    },

    idaho: {
        singleBrackets: [[4811, 0.053]],
        marriedBrackets: [[9622, 0.053]],
        singleDeduction: 16100,
        marriedDeduction: 32200
    },

    illinois: {
        singleBrackets: [[Infinity, 0.0495]],
        marriedBrackets: [[Infinity, 0.0495]],
        singleDeduction: 0,
        marriedDeduction: 0
    },

    indiana: {
        singleBrackets: [[Infinity, 0.0295]],
        marriedBrackets: [[Infinity, 0.0295]],
        singleDeduction: 0,
        marriedDeduction: 0
    },

    iowa: {
        singleBrackets: [[Infinity, 0.038]],
        marriedBrackets: [[Infinity, 0.038]],
        singleDeduction: 16100,
        marriedDeduction: 32200
    },

    kansas: {
        singleBrackets: [[23000, 0.052], [Infinity, 0.0558]],
        marriedBrackets: [[46000, 0.052], [Infinity, 0.0558]],
        singleDeduction: 3605,
        marriedDeduction: 8240
    },

    kentucky: {
        singleBrackets: [[Infinity, 0.035]],
        marriedBrackets: [[Infinity, 0.035]],
        singleDeduction: 3360,
        marriedDeduction: 3360
    },

    louisiana: {
        singleBrackets: [[Infinity, 0.03]],
        marriedBrackets: [[Infinity, 0.03]],
        singleDeduction: 12875,
        marriedDeduction: 25750
    },

    maine: {
        singleBrackets: [[27399, 0.058], [64849, 0.0675], [Infinity, 0.0715]],
        marriedBrackets: [[54849, 0.058], [129749, 0.0675], [Infinity, 0.0715]],
        singleDeduction: 8350,
        marriedDeduction: 16700
    },

    maryland: {
        singleBrackets: [
            [1000, 0.02], [2000, 0.03], [3000, 0.0475],
            [100000, 0.05], [125000, 0.0525],
            [150000, 0.055], [250000, 0.0575],
            [500000, 0.0625], [1000000, 0.065]
        ],
        marriedBrackets: [
            [1000, 0.02], [2000, 0.03], [3000, 0.0475],
            [150000, 0.05], [175000, 0.0525],
            [225000, 0.055], [300000, 0.0575],
            [600000, 0.0625], [1200000, 0.065]
        ],
        singleDeduction: 3350,
        marriedDeduction: 6700
    },

    massachusetts: {
        singleBrackets: [[1083150, 0.05], [Infinity, 0.09]],
        marriedBrackets: [[1083150, 0.05], [Infinity, 0.09]],
        singleDeduction: 0,
        marriedDeduction: 0
    },

    michigan: {
        singleBrackets: [[Infinity, 0.0425]],
        marriedBrackets: [[Infinity, 0.0425]],
        singleDeduction: 0,
        marriedDeduction: 0
    },

    minnesota: {
        singleBrackets: [
            [33310, 0.0535], [109430, 0.068],
            [203150, 0.0785], [Infinity, 0.0985]
        ],
        marriedBrackets: [
            [48700, 0.0535], [193480, 0.068],
            [337930, 0.0785], [Infinity, 0.0985]
        ],
        singleDeduction: 15300,
        marriedDeduction: 30600
    },

    mississippi: {
        singleBrackets: [[10000, 0], [Infinity, 0.04]],
        marriedBrackets: [[10000, 0], [Infinity, 0.04]],
        singleDeduction: 2300,
        marriedDeduction: 4600
    },

    missouri: {
        singleBrackets: [
            [1348, 0.02], [2696, 0.025], [4044, 0.03],
            [5392, 0.035], [6740, 0.04],
            [8088, 0.045], [9436, 0.047]
        ],
        marriedBrackets: [
            [1348, 0.02], [2696, 0.025], [4044, 0.03],
            [5392, 0.035], [6740, 0.04],
            [8088, 0.045], [9436, 0.047]
        ],
        singleDeduction: 16100,
        marriedDeduction: 32200
    },

    montana: {
        singleBrackets: [[47500, 0.047], [Infinity, 0.0565]],
        marriedBrackets: [[95000, 0.047], [Infinity, 0.0565]],
        singleDeduction: 16100,
        marriedDeduction: 32200
    },

    nebraska: {
        singleBrackets: [[4130, 0.0351], [24760, 0.0455]],
        marriedBrackets: [[8250, 0.0351], [49530, 0.0455]],
        singleDeduction: 8850,
        marriedDeduction: 17700
    },

    nevada: {
        singleBrackets: [],
        marriedBrackets: [],
        singleDeduction: 0,
        marriedDeduction: 0
    },

    "new-hampshire": {
        singleBrackets: [],
        marriedBrackets: [],
        singleDeduction: 0,
        marriedDeduction: 0
    },

    "new-jersey": {
        singleBrackets: [
            [20000, 0.014], [35000, 0.0175], [40000, 0.035],
            [75000, 0.0553], [500000, 0.0637],
            [1000000, 0.0897], [Infinity, 0.1075]
        ],
        marriedBrackets: [
            [20000, 0.014], [50000, 0.0245], [70000, 0.035],
            [80000, 0.0553], [150000, 0.0637],
            [500000, 0.0897], [1000000, 0.1075]
        ],
        singleDeduction: 0,
        marriedDeduction: 0
    },

    "new-mexico": {
        singleBrackets: [
            [5500, 0.032], [16500, 0.043],
            [33500, 0.047], [66500, 0.049],
            [210000, 0.059]
        ],
        marriedBrackets: [
            [8000, 0.032], [25000, 0.043],
            [50000, 0.047], [100000, 0.049],
            [315000, 0.059]
        ],
        singleDeduction: 16100,
        marriedDeduction: 32200
    },

    "new-york": {
        singleBrackets: [
            [8500, 0.039], [11700, 0.044],
            [13900, 0.0515], [80650, 0.054],
            [215400, 0.059], [1077550, 0.0685],
            [5000000, 0.0965], [25000000, 0.103],
            [Infinity, 0.109]
        ],
        marriedBrackets: [
            [17150, 0.039], [23600, 0.044],
            [27900, 0.0515], [161550, 0.054],
            [323200, 0.059], [2155350, 0.0685],
            [5000000, 0.0965], [25000000, 0.103],
            [Infinity, 0.109]
        ],
        singleDeduction: 8000,
        marriedDeduction: 16050
    },

    "north-carolina": {
        singleBrackets: [[Infinity, 0.0399]],
        marriedBrackets: [[Infinity, 0.0399]],
        singleDeduction: 12750,
        marriedDeduction: 25500
    },

    "north-dakota": {
        singleBrackets: [[48475, 0.0195], [244825, 0.025]],
        marriedBrackets: [[80975, 0.0195], [298075, 0.025]],
        singleDeduction: 16100,
        marriedDeduction: 32200
    },

    ohio: {
        singleBrackets: [[26050, 0], [Infinity, 0.0275]],
        marriedBrackets: [[26050, 0], [Infinity, 0.0275]],
        singleDeduction: 0,
        marriedDeduction: 0
    },

    oklahoma: {
        singleBrackets: [[3750, 0.025], [4900, 0.035], [7200, 0.045]],
        marriedBrackets: [[7500, 0.025], [9800, 0.035], [14400, 0.045]],
        singleDeduction: 6350,
        marriedDeduction: 12700
    },

    oregon: {
        singleBrackets: [
            [4550, 0.0475], [11400, 0.0675],
            [125000, 0.0875], [Infinity, 0.099]
        ],
        marriedBrackets: [
            [9100, 0.0475], [22800, 0.0675],
            [250000, 0.0875], [Infinity, 0.099]
        ],
        singleDeduction: 2910,
        marriedDeduction: 5820
    },

    pennsylvania: {
        singleBrackets: [[Infinity, 0.0307]],
        marriedBrackets: [[Infinity, 0.0307]],
        singleDeduction: 0,
        marriedDeduction: 0
    },

    "rhode-island": {
        singleBrackets: [
            [82050, 0.0375], [186450, 0.0475], [Infinity, 0.0599]
        ],
        marriedBrackets: [
            [82050, 0.0375], [186450, 0.0475], [Infinity, 0.0599]
        ],
        singleDeduction: 11200,
        marriedDeduction: 22400
    },

    "south-carolina": {
        singleBrackets: [
            [3640, 0], [18230, 0.03], [Infinity, 0.06]
        ],
        marriedBrackets: [
            [3640, 0], [18230, 0.03], [Infinity, 0.06]
        ],
        singleDeduction: 8350,
        marriedDeduction: 16700
    },

    "south-dakota": {
        singleBrackets: [],
        marriedBrackets: [],
        singleDeduction: 0,
        marriedDeduction: 0
    },

    tennessee: {
        singleBrackets: [],
        marriedBrackets: [],
        singleDeduction: 0,
        marriedDeduction: 0
    },

    texas: {
        singleBrackets: [],
        marriedBrackets: [],
        singleDeduction: 0,
        marriedDeduction: 0
    },

    utah: {
        singleBrackets: [[Infinity, 0.045]],
        marriedBrackets: [[Infinity, 0.045]],
        singleDeduction: 0,
        marriedDeduction: 0
    },

    vermont: {
        singleBrackets: [
            [49400, 0.0335], [119700, 0.066],
            [249700, 0.076], [Infinity, 0.0875]
        ],
        marriedBrackets: [
            [82500, 0.0335], [199450, 0.066],
            [304000, 0.076], [Infinity, 0.0875]
        ],
        singleDeduction: 7650,
        marriedDeduction: 15300
    },

    virginia: {
        singleBrackets: [
            [3000, 0.02], [5000, 0.03],
            [17000, 0.05], [Infinity, 0.0575]
        ],
        marriedBrackets: [
            [3000, 0.02], [5000, 0.03],
            [17000, 0.05], [Infinity, 0.0575]
        ],
        singleDeduction: 8750,
        marriedDeduction: 17500
    },

    washington: {
        singleBrackets: [],
        marriedBrackets: [],
        singleDeduction: 0,
        marriedDeduction: 0
    },

    "west-virginia": {
        singleBrackets: [
            [10000, 0.0222], [25000, 0.0296],
            [40000, 0.0333], [60000, 0.0444],
            [Infinity, 0.0482]
        ],
        marriedBrackets: [
            [10000, 0.0222], [25000, 0.0296],
            [40000, 0.0333], [60000, 0.0444],
            [Infinity, 0.0482]
        ],
        singleDeduction: 0,
        marriedDeduction: 0
    },

    wisconsin: {
        singleBrackets: [
            [15110, 0.035], [51950, 0.044],
            [332720, 0.0765], [Infinity, 0.0765]
        ],
        marriedBrackets: [
            [20150, 0.035], [69260, 0.044],
            [443630, 0.0765], [Infinity, 0.0765]
        ],
        singleDeduction: 13960,
        marriedDeduction: 25840
    },

    wyoming: {
        singleBrackets: [],
        marriedBrackets: [],
        singleDeduction: 0,
        marriedDeduction: 0
    }
};

function calculateStateTax(income, state, filing) {

    const data = STATES[state];

    if (!data) {
        return 0;
    }

    const brackets =
        filing === "married"
            ? data.marriedBrackets
            : data.singleBrackets;

    const deduction =
        filing === "married"
            ? data.marriedDeduction
            : data.singleDeduction;

    const taxableIncome =
        Math.max(0, income - deduction);

    return progressiveTax(
        taxableIncome,
        brackets
    );
}



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

function setResult(ids, value) {
    const element = ids
        .map(id => document.getElementById(id))
        .find(Boolean);

    if (element) {
        element.textContent = money(value);
    }
}

setResult(["annual", "grossSalary"], salary);
setResult(["federal", "federalTax"], federalTax);
setResult(["stateTax"], stateTax);
setResult(["social", "socialSecurity"], socialSecurity);
setResult(["medicare"], medicare);
setResult(["additionalMedicare"], additionalMedicare);
setResult(["totalTax"], totalTax);
setResult(["takeHome"], takeHome);
setResult(["monthly"], monthly);
setResult(["biweekly"], biweekly);
setResult(["weekly"], weekly);
setResult(["hourly"], hourly);


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
