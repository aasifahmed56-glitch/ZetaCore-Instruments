Add-Type -AssemblyName System.Drawing
$imgPath = 'd:\zeta core\website\assets\Icon PNG.png'
$img = [System.Drawing.Image]::FromFile($imgPath)
Write-Output "Width: $($img.Width), Height: $($img.Height)"
$img.Dispose()
