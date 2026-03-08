# 想曰

<div align=center><a href='https://github.com/fzxx/XiangYue'><img src="https://img.shields.io/github/stars/fzxx/XiangYue?style=social" referrerpolicy="no-referrer" alt="GitHub stars"></a>   <a href='https://github.com/fzxx/XiangYue'><img src="https://img.shields.io/github/forks/fzxx/XiangYue?style=social&amp;logo=github" referrerpolicy="no-referrer" alt="GitHub forks"></a>   <a href='https://github.com/fzxx/XiangYue/issues?q=is%3Aissue+is%3Aclosed'><img src="https://img.shields.io/github/issues-closed/fzxx/XiangYue?label=%E5%B7%B2%E8%A7%A3%E5%86%B3%E9%97%AE%E9%A2%98&amp;color=green&amp;logo=github" referrerpolicy="no-referrer" alt="已关闭 Issues"></a>   <a href='https://github.com/fzxx/XiangYue/blob/main/main/License.txt'><img src="https://img.shields.io/badge/License-私下研究专用许可-blue?logo=github" referrerpolicy="no-referrer" alt="许可证"></a>
<a href='https://github.com/fzxx/XiangYue?tab=readme-ov-file#%EF%B8%8F-%E6%8A%80%E6%9C%AF%E7%BB%86%E8%8A%82'><img src="https://img.shields.io/badge/%E6%96%87%E6%9C%AC%E5%8A%A0%E5%AF%86%E9%A6%96%E4%B8%AA%E7%BA%A7%E8%81%94%E7%AE%97%E6%B3%95%E5%B7%A5%E5%85%B7-AES256%20CTR%20+%20ChaCha20%20Poly1305%20IETF-purple?logo=cryptpad&amp;logoColor=white" referrerpolicy="no-referrer" alt="级联算法"></a>   <a href='https://github.com/fzxx/XiangYue?tab=readme-ov-file#-%E7%89%B9%E7%82%B9'><img src="https://img.shields.io/badge/%E6%94%AF%E6%8C%81%E5%A4%9A%E7%A7%8D%E5%AF%86%E6%96%87-%E4%B8%AD%E6%96%87/Base64/Emoji/%E9%9B%B6%E5%AE%BD/%E6%97%A5%E8%AF%AD/%E9%9F%A9%E8%AF%AD/%E8%B1%A1%E5%BD%A2-purple?logo=livechat&amp;logoColor=white" referrerpolicy="no-referrer" alt="多种密文"></a></div>
<span style="color: Blue;"><strong><a href="https://github.com/fzxx/XiangYue" style="color: inherit;">想曰(yuē)</a></strong></span> 是基于现代加密技术的文本加密工具，使用**多算法级联加密**方案，确保数据在本地完成加密/解密，保护隐私安全。


## 🌟 特点

- ㊙️**密文**：支持 `中文/Base64/Emoji/零宽/日语/韩语/象形` 密文
- 🔐**密钥**：`ECDH-X25519 + ECDH-P521`、`Argon2id + HKDF-SHA512`，有效抵御暴力破解
- 🔒**级联算法**：采用 `AES256-CTR` 与 `ChaCha20-Poly1305-IETF` 级联加密，**安全性极高**
- 📄**数据**：所有操作在本地完成，数据不离开设备

## 📋密文示例

以下密文使用 **默认密码** 加密

##### 中文密文

```
雷柜箱慕虎斜灯无羞站愁层梁条人岂解显无靠走峰抬旋吵所扶诉旗晃接勤哈袜方错美过晕盆拧奔随梦疏清跃蝶拍说海鸟房清烟月急压非片抖呱棒千说呱海晨也梯读盘压太甜旗狐向画颗得池厨又沉叉托茶暖峦虚小料叹门跨桂已闹李竖咯棒愿咯迷首馆
```

##### Base64 密文

```
J7ni11NnCUEe1+GtZcIWoJcKNgzsyN8K8BQBKnDn/1mLPkv2ul1VUcedyoIgZpXcNUKfy3HhZI6soaa54UcqLtJs52caSPuVo3EBOYvMqYS2
```

##### Emoji 密文

```
🍿⏫🐜🤕🚛🤧🎲▶️🦕🦢🛴🔣🏨💽⏹️🦴🐫🏓🔌🧂😚🚠🚢📷🪲🪃🚬🦋🤒🍏⏫♎️🦼📀📼😴⚜️👩👾🦇📟🍌🦏🕍⚱️😃🔭🧽🦍🍎🤫🌉🌆🥔🚔🍢😈😐🐌🏓🔋❣️💸🍑
```

##### 零宽密文（可藏在中文、网址、提取码、英文、Base64等可见字符中）

`https://github.com/fzxx/⁣⁡⁤؜⁣‍⁤⁣⁪⁡⁢‍⁤؜⁢⁭⁢⁯⁡⁢⁤⁯⁪⁢⁡‍⁤⁣⁤⁯⁤⁤⁢؜⁤⁮⁡⁠⁪‍⁣‍⁣⁣⁢⁬⁤͏⁤⁢⁣‌⁣⁪⁠⁮⁢⁯⁢⁮⁤⁠⁣⁣⁣‍⁣⁠⁤‍⁡‌⁤͏⁤⁡⁪⁬⁣⁫⁡⁠⁢⁢⁪‍⁢⁠⁤⁬⁡⁣⁤؜⁪⁢⁣⁪⁪‌⁢⁠⁪⁠⁣⁢⁪‍⁣⁫⁡⁬⁤⁭⁤⁠⁪‍⁢⁫⁢⁡⁡⁫⁣⁣⁡͏‌XiangYue`

##### 日语密文

```
ヷㇴょわㇿデぞズゆェピゆベナこマびむしヾノざュゝるスしニユダクぷすゾゔうゼダりち〴ㇹぐぁぇヘぷゼぺにづヂボゔㇲこぱミみぼメェだは
```

##### 韩语密文

```
퍼헬팁청쌀빠꽂뭇활현라골띤틀문헬룸로쿠텁완권ㅂ기멎끔해되릎펫닫궉뉴담답폼칼받듀릭맑일친끼죄루디ㄲ집멎블권대안지당톤사혐군즈꼭율한
```

##### 象形密文

```
𓅺𓎓𓐌𓃩𓋅𓁳𓈦𓋾𓃵𓋄𓄖𓈽𓃭𓈚𓀄𓌏𓀭𓉎𓁙𓅮𓅯𓋶𓀣𓀬𓌚𓅟𓌧𓀊𓃭𓅭𓅮𓎴𓂌𓈉𓄸𓎜𓎙𓀹𓃦𓂄𓏫𓅍𓃯𓁱𓁀𓈸𓆀𓈁𓏄𓐤𓀢𓄗𓋃𓃭𓌝𓈴𓋚𓆐𓉬𓇹𓐌𓌨𓄗𓋩
```


## 🖥️在线与离线使用

[![在线页面](https://img.shields.io/badge/在线页面-想曰-yellow?logo=googlechrome&logoColor=white)](https://xyue.515188.xyz/)   [![免尴尬页](https://img.shields.io/badge/免尴尬页-想说-green?logo=firefox&logoColor=white)](https://xshuo.515188.xyz/)   [![Release](https://img.shields.io/github/v/release/fzxx/XiangYue?label=离线客户端&color=blue&logo=github)](https://github.com/fzxx/XiangYue/releases)

<a href="https://xiangyue.js.org/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/备用页①-想曰-yellow?logo=googlechrome&logoColor=white" alt="备用页①"></a>   <a href="https://xiangyue.netlify.app/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/备用页②-想曰-yellow?logo=googlechrome&logoColor=white" alt="备用页②"></a>


## 🔄️更新日志

[![更新日志](https://img.shields.io/badge/更新日志-gold?style=for-the-badge&logo=refinedgithub&logoColor=white)](https://github.com/fzxx/XiangYue/blob/main/CHANGELOG.md)

## 🛡️ 安全细节

[![安全细节](https://img.shields.io/badge/%E5%AE%89%E5%85%A8%E7%BB%86%E8%8A%82-gold?style=for-the-badge&logo=github&&logoColor=black)](https://github.com/fzxx/XiangYue/blob/main/SECURITY.md)

## 😕 疑问

#### 发送给多人如何管理多个密码？如何安全地传递密码、公钥？

- 使用可靠的密码管理器，例如：**KeePass**、KeePassXC、**Bitwarden**
- 使用**开源的阅后即焚文档**传递密码、公钥，例如：**PrivateBin**、pastebin；或使用**一次性光密钥对**传递暗公钥。

#### 少量文字也会生成较长的文本，能缩短吗？

- 因为**追求安全性**，所以添加了随机种子、校验标签参数，密文中存储这些参数导致的；去掉参数**追求短密文会削弱安全性**，目前已做到保障安全性的情况下最短了。

#### 感觉加密/解密慢？支持加密/解密的最大容量？

- 使用**Argon2id算法**的正常现象；Base64模式下，短文本理应1秒内加/解密完成，5M的文本（大约200万字）应3秒左右，**Edge浏览器卡顿**需要关闭增强 Web 安全性（设置 → 隐私、搜索和服务 → 安全性）其它浏览器也可以按设置查看并关闭相应的选项。

- 不影响速度的情况下，**建议5M以下**（测试支持50M+）；超大的文本请使用压缩包或者其它方式加密。

#### 可以给密文再次加密？或者嵌入？

- `明文 → emoji密文 → 中文密文 → ......`  可以这样无限套娃加密，但不会增加安全性，安全性取决于你的密码，因此不建议这样做。
- **中文密文**嵌入**零宽密文**，会优先解密零宽，达成一文双解的效果，但并不能瞒过机器识别。

#### 经过某些软件发送密文后，解密错误？

- 是因为**某些软件喜欢折叠聊天内容**，或者发送过长的密文被截断，**安卓系统粘贴板有长度限制**，建议你检查密文的完整性；Eomij密文可能因为不同设备内置的表情不一导致解密错误，零宽密文有被某些平台过滤字符的可能。

#### 零宽密文只有两个字符？可见字符可以自定义？

- 密文总长度没有变，只是**转为不可见字符藏在两个可见字符中间**，是为了让人知道密文在哪，方便复制。
- 可以，只需**手动替换**密文中的可见字符（零宽密文**只是对人不可见**，机器是秒识别的，但识别不代表能解密）。

#### 非对称加密的光、暗密钥对都要生成？光暗密钥对的位置可以互换？

- 如果没有特别的需求，不用生成暗密钥对。
- 填入密钥对时，光暗密钥对的位置**可以互换**，但**需要保持加/解密时一致的位置**。

#### 非对称加密的对方公钥框，填自己的公钥会怎么样？

- 会导致密文只有自己可以解密，这**不是BUG**，而是隐藏用法，特别留给有藏日记到暗密文需求的人。

#### 如何用非对称加密进行群聊？

- **简化版**：首先所有人**各自生成自己的光密钥对**；然后**所有人公开光公钥**，由群主拿所有人的公钥一对一加密发送**相同的随机密码**，然后所有人都用该随机密码进行**对称加密**，即可开始群聊。
- **复杂版**：首先由群主生成两个密钥对(**群主光密钥对**和**本群光密钥对**)，群员各自生成**自己的光密钥对**；然后**所有人公开光公钥**，由群主拿所有人的公钥一对一加密发送**本群光密钥对**，然后所有人都填**本群光密钥对**，对方公钥框填**本群光密钥对的公钥**，即可开始群聊（此时无需各自的光密钥对，只需保存好，作为下次交换群密钥对时使用）；如需暗密文，则使用与光密钥对不同的渠道再次传递**本群暗密钥对**（群主生成）。

#### 非对称加密如何确保不被中间人攻击？如何实现向前安全性(历史记录不可解密)？

- 需要使用**可信渠道交换公钥**（线下、第三方邮箱、其它聊天软件、**阅后即焚文档**等等），确认双方公钥无误后开始聊天。
- **每次聊完一个话题**，生成新的密钥对，**加密发送新的公钥**给对方，下次聊天使用新密钥对（旧密钥对完全删除）；如果是群聊，每次新增成员需要群主发送密钥，减少成员，需要**群主生成新的密钥**并让所有人换成新密钥。

## 🫧相关项目

[文图变 - 文件藏到图片](https://github.com/fzxx/FileImgSwap)

[坏坏包 - 让压缩包像坏了](https://github.com/fzxx/NaughtyDamagePack)

[闪电擦除 - 让文件无法恢复](https://github.com/fzxx/FlashErase)

## 📖 许可证

[想曰](https://github.com/fzxx/XiangYue) - [私下研究专用许可](https://github.com/fzxx/XiangYue/blob/main/License.txt)

[libsodium.js](https://github.com/jedisct1/libsodium.js/) - ISC 许可证

[pako](https://github.com/nodeca/pako) - MIT 许可证
