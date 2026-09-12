Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630
$bmp = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# 1. Base dark navy background
$bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 8, 5, 30))
$g.FillRectangle($bgBrush, 0, 0, $width, $height)

# 2. Glowing atmospheric gradients
# Violet glow top-right
$pathViolet = New-Object System.Drawing.Drawing2D.GraphicsPath
$pathViolet.AddEllipse(600, -200, 800, 800)
$pgbViolet = New-Object System.Drawing.Drawing2D.PathGradientBrush($pathViolet)
$pgbViolet.CenterColor = [System.Drawing.Color]::FromArgb(90, 21, 0, 176)
$pgbViolet.SurroundColors = @([System.Drawing.Color]::FromArgb(0, 8, 5, 30))
$g.FillPath($pgbViolet, $pathViolet)

# Orange glow bottom-left
$pathOrange = New-Object System.Drawing.Drawing2D.GraphicsPath
$pathOrange.AddEllipse(-200, 250, 750, 750)
$pgbOrange = New-Object System.Drawing.Drawing2D.PathGradientBrush($pathOrange)
$pgbOrange.CenterColor = [System.Drawing.Color]::FromArgb(70, 253, 131, 2)
$pgbOrange.SurroundColors = @([System.Drawing.Color]::FromArgb(0, 8, 5, 30))
$g.FillPath($pgbOrange, $pathOrange)

# Subtle cyber grid pattern
$gridPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(12, 255, 255, 255), 1)
for ($x = 0; $x -lt $width; $x += 60) {
    $g.DrawLine($gridPen, $x, 0, $x, $height)
}
for ($y = 0; $y -lt $height; $y += 60) {
    $g.DrawLine($gridPen, 0, $y, $width, $y)
}

# 3. Top Section: Clean White Logo Card + Category Badge
$logoPath = "c:\Users\CHARLES\Documents\DEV\THEGENZ\public\thegenzlogo-white.png"
if (Test-Path $logoPath) {
    $logoImg = [System.Drawing.Image]::FromFile($logoPath)
    $logoCardX = 70
    $logoCardY = 55
    $logoW = 220
    $logoH = [int]($logoImg.Height * ($logoW / $logoImg.Width))
    if ($logoH -gt 75) {
        $logoH = 75
        $logoW = [int]($logoImg.Width * ($logoH / $logoImg.Height))
    }
    
    # White card backdrop
    $cardBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(250, 255, 255, 255))
    $g.FillRectangle($cardBrush, $logoCardX - 12, $logoCardY - 8, $logoW + 24, $logoH + 16)
    
    $cardBorder = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(200, 226, 232, 240), 1.5)
    $g.DrawRectangle($cardBorder, $logoCardX - 12, $logoCardY - 8, $logoW + 24, $logoH + 16)
    
    $g.DrawImage($logoImg, $logoCardX, $logoCardY, $logoW, $logoH)
    $logoImg.Dispose()
}

# Top right: Category Pill
$pillBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 244, 229))
$pillBorder = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(200, 253, 131, 2), 1.5)
$pillX = 740
$pillY = 65
$pillW = 390
$pillH = 42
$g.FillRectangle($pillBrush, $pillX, $pillY, $pillW, $pillH)
$g.DrawRectangle($pillBorder, $pillX, $pillY, $pillW, $pillH)

$fontBadge = New-Object System.Drawing.Font("Segoe UI", 11, [System.Drawing.FontStyle]::Bold)
$badgeTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 217, 107, 0))
$sfCenter = New-Object System.Drawing.StringFormat
$sfCenter.Alignment = [System.Drawing.StringAlignment]::Center
$sfCenter.LineAlignment = [System.Drawing.StringAlignment]::Center
$g.DrawString("AFRICAN AI VENTURE-BUILDING PLATFORM", $fontBadge, $badgeTextBrush, [System.Drawing.RectangleF]::new($pillX, $pillY, $pillW, $pillH), $sfCenter)

# 4. Main Headline: Bold & Punchy
$fontH1 = New-Object System.Drawing.Font("Segoe UI", 46, [System.Drawing.FontStyle]::Bold)
$whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$accentBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 129, 140, 248))
$energyBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 253, 131, 2))

# Line 1: Turning AI Talent and Ideas
$g.DrawString("Turning AI Talent and Ideas", $fontH1, $whiteBrush, 70, 180)

# Line 2: Into Companies.
$g.DrawString("Into Companies.", $fontH1, $accentBrush, 70, 255)

# 5. Subtitle & Value Proposition
$fontSub = New-Object System.Drawing.Font("Segoe UI", 18, [System.Drawing.FontStyle]::Regular)
$grayBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 220, 224, 235))
$subRect = New-Object System.Drawing.RectangleF(70, 345, 1050, 95)
$subText = "The venture-building platform connecting African AI builders, real-world industry problems, and venture resources to launch enduring companies."
$g.DrawString($subText, $fontSub, $grayBrush, $subRect)

# 6. Three Pillars Callout Bar
$pillarBarY = 460
$fontPillar = New-Object System.Drawing.Font("Segoe UI", 14, [System.Drawing.FontStyle]::Bold)
$g.DrawString("LEARN", $fontPillar, $whiteBrush, 70, $pillarBarY)
$g.DrawString("|", $fontPillar, $grayBrush, 155, $pillarBarY)
$g.DrawString("BUILD", $fontPillar, $energyBrush, 180, $pillarBarY)
$g.DrawString("|", $fontPillar, $grayBrush, 255, $pillarBarY)
$g.DrawString("CONNECT", $fontPillar, $whiteBrush, 280, $pillarBarY)

$stageBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 212, 175, 55))
$g.DrawString("PRE-SEED * 2026", $fontPillar, $stageBrush, 960, $pillarBarY)

# 7. Divider Line
$divPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(50, 255, 255, 255), 1.5)
$g.DrawLine($divPen, 70, 515, 1130, 515)

# 8. Bottom Bar: Brand identification and direct URL
$fontFooter = New-Object System.Drawing.Font("Segoe UI", 15, [System.Drawing.FontStyle]::Bold)
$footerGrayBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 180, 190, 210))
$g.DrawString("TheGenZ AI Hub - African AI Ecosystem", $fontFooter, $footerGrayBrush, 70, 545)

$fontUrl = New-Object System.Drawing.Font("Segoe UI", 16, [System.Drawing.FontStyle]::Bold)
$sfRight = New-Object System.Drawing.StringFormat
$sfRight.Alignment = [System.Drawing.StringAlignment]::Far
$g.DrawString("thegenz-ai-hub.vercel.app", $fontUrl, $energyBrush, 1130, 545, $sfRight)

# Save high-quality PNG
$targetPath = "c:\Users\CHARLES\Documents\DEV\THEGENZ\public\og-image.png"
$bmp.Save($targetPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()

Write-Host "SUCCESS: Generated 1200x630 OG image at $targetPath"
