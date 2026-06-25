Add-Type -AssemblyName System.Drawing
$imgPath = 'd:\zeta core\website\assets\Icon 02.webp'
try {
    $img = [System.Drawing.Image]::FromFile($imgPath)
    Write-Output "Icon 02.webp: Width= $($img.Width), Height= $($img.Height)"
    $img.Dispose()
} catch {
    Write-Output "Failed to read Icon 02.webp"
}

$imgPath2 = 'd:\zeta core\website\assets\Icon PNG.png'
try {
    $img2 = [System.Drawing.Image]::FromFile($imgPath2)
    Write-Output "Icon PNG.png: Width= $($img2.Width), Height= $($img2.Height)"
    $img2.Dispose()
} catch {
    Write-Output "Failed to read Icon PNG.png"
}
