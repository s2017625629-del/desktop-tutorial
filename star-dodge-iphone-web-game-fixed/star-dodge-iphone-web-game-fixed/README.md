# Star Dodge iPhone Web Game - Fixed Version

这个版本已经把主要 CSS 和 JavaScript 直接写进 index.html。
所以即使你只打开 index.html，也不会再出现白色页面、默认按钮、样式丢失的问题。

## 电脑本地测试
直接双击 index.html，可以看到完整游戏界面。

## 手机局域网测试
电脑进入此文件夹，运行：

```bash
python -m http.server 8000 --bind 0.0.0.0
```

然后 iPhone 和电脑连接同一个 Wi-Fi，在 Safari 输入：

```text
http://你的电脑IPv4地址:8000
```

## 真正部署
把整个文件夹上传到 Netlify、Vercel、GitHub Pages 或 Cloudflare Pages。
部署成功后，用 iPhone Safari 打开平台给你的 HTTPS 网址。

## iPhone 添加到主屏幕
Safari 打开网址后，点击分享按钮，然后选择“添加到主屏幕”。
