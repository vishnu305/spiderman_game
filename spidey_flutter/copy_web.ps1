# copy_web.ps1 - copies the built React app (..\spidey-app\dist) into assets\web
# Usage (from the spidey_flutter folder):
#   powershell -ExecutionPolicy Bypass -File .\copy_web.ps1

$ErrorActionPreference = 'Stop'

$root = $PSScriptRoot
$src  = Join-Path $root '..\spidey-app\dist'
$dst  = Join-Path $root 'assets\web'

if (-not (Test-Path -LiteralPath (Join-Path $src 'index.html'))) {
    Write-Host ''
    Write-Host "ERROR: web build not found at: $src" -ForegroundColor Red
    Write-Host 'Build the React app first:' -ForegroundColor Red
    Write-Host '    cd ..\spidey-app' -ForegroundColor Yellow
    Write-Host '    npm install' -ForegroundColor Yellow
    Write-Host '    npm run build' -ForegroundColor Yellow
    Write-Host 'then run this script again.' -ForegroundColor Red
    exit 1
}

$src = (Resolve-Path -LiteralPath $src).Path
Write-Host "Copying $src  ->  $dst"

if (Test-Path -LiteralPath $dst) {
    Remove-Item -LiteralPath $dst -Recurse -Force
}
New-Item -ItemType Directory -Path $dst -Force | Out-Null

Copy-Item -Path (Join-Path $src '*') -Destination $dst -Recurse -Force

# pubspec.yaml lists these folders, so they must exist (even if empty).
foreach ($sub in @('assets', 'icons', 'img', 'models')) {
    $p = Join-Path $dst $sub
    if (-not (Test-Path -LiteralPath $p)) {
        New-Item -ItemType Directory -Path $p -Force | Out-Null
    }
    if (-not (Get-ChildItem -LiteralPath $p -Force | Select-Object -First 1)) {
        New-Item -ItemType File -Path (Join-Path $p '.keep') -Force | Out-Null
    }
}

# Flutter only bundles folders that are listed in pubspec.yaml - warn about missing ones.
$pubspec = Get-Content -LiteralPath (Join-Path $root 'pubspec.yaml') -Raw
$dstFull = (Resolve-Path -LiteralPath $dst).Path.TrimEnd('\')
$missing = @()
Get-ChildItem -LiteralPath $dstFull -Directory -Recurse | ForEach-Object {
    $rel = 'assets/web/' + ($_.FullName.Substring($dstFull.Length + 1) -replace '\\', '/') + '/'
    if ($pubspec -notmatch [regex]::Escape("- $rel")) { $missing += $rel }
}
if ($missing.Count -gt 0) {
    Write-Host ''
    Write-Host 'WARNING: these folders are NOT listed under flutter: assets: in pubspec.yaml' -ForegroundColor Yellow
    Write-Host 'Add them (one line each, e.g. "    - assets/web/models/extra/") or their files will be missing:' -ForegroundColor Yellow
    $missing | ForEach-Object { Write-Host "    - $_" -ForegroundColor Yellow }
}

if (-not (Test-Path -LiteralPath (Join-Path $dst 'icons\icon-1024.png'))) {
    Write-Host ''
    Write-Host 'NOTE: assets\web\icons\icon-1024.png not found - "dart run flutter_launcher_icons" needs it.' -ForegroundColor Yellow
}

$count = (Get-ChildItem -LiteralPath $dst -File -Recurse).Count
Write-Host ''
Write-Host "Done. $count files copied into assets\web" -ForegroundColor Green
Write-Host 'Next: flutter pub get  ->  flutter run --dart-define=GROQ_KEY=gsk_xxx'
