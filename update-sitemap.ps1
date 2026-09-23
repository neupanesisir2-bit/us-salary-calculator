$baseUrl = "https://neupanesisir2-bit.github.io/us-salary-calculator"

$urls = @()

# Homepage
$urls += @"
<url>
<loc>$baseUrl/</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
"@

# All state calculator pages
$stateFolders = Get-ChildItem -Directory -Filter "*-salary-calculator" |
    Sort-Object Name

foreach ($folder in $stateFolders) {
    $slug = $folder.Name

    $urls += @"
<url>
<loc>$baseUrl/$slug/</loc>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>
"@
}

# Important website pages
$specialPages = @(
    "privacy-policy",
    "terms",
    "disclaimer",
    "about",
    "contact"
)

foreach ($page in $specialPages) {
    $urls += @"
<url>
<loc>$baseUrl/$page/</loc>
<changefreq>yearly</changefreq>
<priority>0.5</priority>
</url>
"@
}

$sitemap = @"
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
$($urls -join "`n")
</urlset>
"@

Set-Content sitemap.xml $sitemap -Encoding UTF8

Write-Host ""
Write-Host "Sitemap generated successfully!"
Write-Host "Total URLs: $($urls.Count)"