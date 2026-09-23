$root = Get-Location

$footer = @'
<footer class="site-footer">
    <div class="footer-links">
        <a href="/">Home</a>
        <a href="/us-salary-calculator/privacy-policy/">Privacy Policy</a>
        <a href="/us-salary-calculator/terms/">Terms of Use</a>
        <a href="/us-salary-calculator/disclaimer/">Disclaimer</a>
        <a href="/us-salary-calculator/about/">About</a>
        <a href="/us-salary-calculator/contact/">Contact</a>
    </div>
    <p>© 2026 US Salary Calculator. All rights reserved.</p>
</footer>
'@

$footerStyle = @'
<style>
.site-footer {
    margin-top: 40px;
    padding: 30px 15px;
    text-align: center;
    background: #111827;
    color: #d1d5db;
}

.footer-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 18px;
    margin-bottom: 15px;
}

.footer-links a {
    color: #ffffff;
    text-decoration: none;
}

.footer-links a:hover {
    text-decoration: underline;
}

.site-footer p {
    margin: 0;
    font-size: 14px;
}
</style>
'@

# Homepage
$homepage = Join-Path $root "index.html"

if (Test-Path $homepage) {
    $html = Get-Content $homepage -Raw

    $html = $html -replace '(?s)<footer.*?</footer>', ''

    if ($html -notmatch 'site-footer') {
        $html = $html -replace '</head>', "$footerStyle`n</head>"
        $html = $html -replace '</body>', "$footer`n</body>"
    }

    Set-Content $homepage $html -Encoding UTF8
    Write-Host "Updated homepage"
}

# State pages
$stateFolders = Get-ChildItem -Directory -Filter "*-salary-calculator"

foreach ($folder in $stateFolders) {
    $file = Join-Path $folder.FullName "index.html"

    if (Test-Path $file) {
        $html = Get-Content $file -Raw

        $html = $html -replace '(?s)<footer.*?</footer>', ''

        if ($html -notmatch 'site-footer') {
            $html = $html -replace '</head>', "$footerStyle`n</head>"
            $html = $html -replace '</body>', "$footer`n</body>"
        }

        Set-Content $file $html -Encoding UTF8
        Write-Host "Updated $($folder.Name)"
    }
}

# Legal / information pages
$specialPages = @(
    "privacy-policy",
    "terms",
    "disclaimer",
    "about",
    "contact"
)

foreach ($page in $specialPages) {
    $file = Join-Path $root "$page\index.html"

    if (Test-Path $file) {
        $html = Get-Content $file -Raw

        $html = $html -replace '(?s)<footer.*?</footer>', ''

        if ($html -notmatch 'site-footer') {
            $html = $html -replace '</head>', "$footerStyle`n</head>"
            $html = $html -replace '</body>', "$footer`n</body>"
        }

        Set-Content $file $html -Encoding UTF8
        Write-Host "Updated $page"
    }
}

Write-Host ""
Write-Host "===================================="
Write-Host "Footer update completed!"
Write-Host "===================================="