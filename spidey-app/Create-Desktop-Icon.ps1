# Creates a "Spidey 3D" icon on your Windows desktop that starts the app.
# Run:  right-click this file -> "Run with PowerShell"
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$desktop = [Environment]::GetFolderPath('Desktop')
$ws = New-Object -ComObject WScript.Shell
$lnk = $ws.CreateShortcut((Join-Path $desktop 'Spidey 3D.lnk'))
$lnk.TargetPath = Join-Path $here 'START-SPIDEY.bat'
$lnk.WorkingDirectory = $here
$lnk.IconLocation = (Join-Path $here 'public\icons\spidey.ico') + ',0'
$lnk.Description = 'Spidey 3D - Talk, Repeat, Type and News'
$lnk.WindowStyle = 7   # start minimised (the browser window opens on its own)
$lnk.Save()
Write-Host 'Done! Look for the Spidey 3D icon on your desktop.' -ForegroundColor Green
