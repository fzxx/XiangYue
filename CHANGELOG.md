# 更新日志

## v1.3.0.0

- 密钥派生算法升级为`Argon2id + HKDF-SHA512`，减少密文长度，速度不变的情况下**极限提升安全性**，并且解密兼容旧版本密文

- 优化页面、加/解密、映射密文、随机密码、缓存管理的逻辑
- 更换压缩库，提升压缩率，兼容旧版本

## v1.2.3.0

- 修改零宽密文 加/解密 逻辑，使**可见字符在加密后可自定义修改**
- 微调图标、提示

## v1.2.0.0

- 增加零宽密文（部分软件会过滤零宽字符，使用前需自测）
- 增强密文识别逻辑
- 修复安卓版的一些问题

## v1.1.2.0

- 增加记住设置（本地存储）
- 优化动画问题
- 安卓客户端已升级为离线版

## v1.1.0.0

- 增加`Emoji`表情密文😀
- 增加在线页面 [**想说**](https://xshuo.515188.xyz/) 发给朋友，免尴尬
- 修复部分逻辑问题

## v1.0.0.0 - 正式发布

- `中文/Base64`密文
- 级联算法
- 夜间模式
- 生成随机密码

## v0.9.0.0

- 升级`Font Awesome`版本

## v0.8.0.0

- 优化界面动画效果
- 优化代码结构、减少冗余

## v0.7.0.0

- 加密算法更换为 `AES256-CTR + ChaCha20-Poly1305-IETF`

## v0.6.0.0

- `中文/Base64`密文自动识别
- 密文前后空格换行符自动去除

## v0.5.0.0

- 增加复制粘贴按钮、优化弹出的提示条
- 增加中文密文

## v0.4.0.0

- 增加生成随机密码、无密码时使用默认密码
- 加密算法更换为 `AES-CBC + AES-GCM` （因为仅使用浏览器API）

## v0.3.0.0

- 增加夜间模式、显示密码
- 密钥派生算法更换为 `PBKDF2-SHA256 + HKDF-SHA256`

## v0.2.0.0

- 优化界面，添加图标
- 密钥派生算法更换为 `HKDF-SHA256`

## v0.1.0.0

- 使用`Deflate`压缩算法、`AES-CBC`加密算法，输出`Base64`密文

- 密钥派生使用`SHA256`