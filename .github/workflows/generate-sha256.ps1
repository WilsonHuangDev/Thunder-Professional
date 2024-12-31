param($path)

echo $path
rm $path/*.sha-256
$files = Get-ChildItem $path
$hashes = [ordered]@{}
$summary = "
新增功能与优化
------
- 

Bug 修复
------
- 
<br>

**Full Changelog**: https://github.com/WilsonHuangDev/Thunder-Professional/compare/

> [!important]
> 若电脑已安装原版迅雷，请先卸载原版迅雷再安装本软件。

------
> [!important]
> 下载时请注意核对文件SHA-256是否正确。

| 文件名 | SHA-256 |
| --- | --- |
"

foreach ($i in $files) {
    $name = $i.Name
    $hash = Get-FileHash $i -Algorithm SHA256
    $hashString = $hash.Hash
    $hashes.Add($name, $hashString)
    Write-Output $hash.Hash > "${i}.sha-256"
    $summary +=  "| $name | ``${hashString}`` |`n"
}

echo $hashes

$json = ConvertTo-Json $hashes -Compress

$summary +=  "`n<!-- THUNDER-PROFESSIONAL_PKG_SHA256 ${json} -->" 
echo $summary > "$path/checksums.md"
Write-Host "SHA-256 Summary:" -ForegroundColor Gray
Write-Host $summary -ForegroundColor Gray
Write-Host "----------" -ForegroundColor Gray

#if (-not $GITHUB_ACTION -eq $null) {
#    'MD5_SUMMARY=' + $summary.Replace("`n", "<<") | Out-File -FilePath $env:GITHUB_ENV -Append
#}
