Add-Type -AssemblyName System.Drawing
$imgPath = 'd:\zeta core\vite-app\public\assets\Icon 03.png'
$img = [System.Drawing.Image]::FromFile($imgPath)
[int]$w = [Math]::Floor($img.Width / 4)
[int]$h = $img.Height

for ($i=0; $i -lt 4; $i++) {
    $rect = New-Object System.Drawing.Rectangle ($i * $w), 0, $w, $h
    $bmp = New-Object System.Drawing.Bitmap $w, $h
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.DrawImage($img, (New-Object System.Drawing.Rectangle 0, 0, $w, $h), $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $bmp.Save("d:\zeta core\vite-app\public\assets\about-icon-$i.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
}
$img.Dispose()
