Add-Type -AssemblyName System.Drawing
$imgPath = 'd:\zeta core\website\assets\Icon PNG.png'
$img = [System.Drawing.Image]::FromFile($imgPath)
[int]$w = [Math]::Floor($img.Width / 4)
[int]$h = [Math]::Floor($img.Height / 2)

for ($row=0; $row -lt 2; $row++) {
    for ($col=0; $col -lt 4; $col++) {
        $idx = ($row * 4) + $col
        $rect = New-Object System.Drawing.Rectangle ($col * $w), ($row * $h), $w, $h
        $bmp = New-Object System.Drawing.Bitmap $w, $h
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.DrawImage($img, (New-Object System.Drawing.Rectangle 0, 0, $w, $h), $rect, [System.Drawing.GraphicsUnit]::Pixel)
        $g.Dispose()
        $bmp.Save("d:\zeta core\vite-app\public\assets\why-icon-$idx.png", [System.Drawing.Imaging.ImageFormat]::Png)
        $bmp.Dispose()
    }
}
$img.Dispose()
