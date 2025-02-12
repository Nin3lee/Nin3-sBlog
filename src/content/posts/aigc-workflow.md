---
title: 把 AIGC 搬进我的工作流
tags: ["经验"]
pubDate: 2024-11-19
cover: ./images/aigc.png
---

#

**工具集 | 技术栈**：Midjourney、Photoshop

**运营要求**：主标题包含“母亲节” “Monther’s Day”；文案内容为“感谢你不是超人，却为我变成万能”。

**个人理解**：需求包含了主标题和文案部分，而作为设计师的我们，主要从现有的要求和未定义的发挥空间考虑。从海报的设计经验来讲，一张节日海报需要画面内容来填充，文本内容来点缀，因此我们从文本内容来分析画面需要什么，是效率更高的做法。从现有要求考虑，给出的内容比较常规，主标题不过多解读，但文案内容“感谢你不是超人，却为我变成万能”，其核心内容是描述者身份是一个感恩母亲的孩子，即画面中的主要内容需要出现母亲与孩子两个角色，而尽量避免只用单调的意向，如鲜花、贺卡等等。

明白了我们的画面需要什么，那么我们就可以开始着手构思了，拓展思路比较简单的方式是通过对市面现有的母亲节海报进行收集，并头脑风暴提炼其中高频的关键词，发现共性和特性，这对于未来加入 Midjourney 生成图片非常有效，在集中了解后，我们可以发现合适的海报通常有这样一些属性：

**画面特征**：常见用剪影、背影等来概括母亲这类人物群像。

**色彩氛围**：色调几乎落在粉色、红色、橘色等带有温暖气氛的颜色。

**人物动作**：托举、依靠、手拉手、给予、帮助等。

现在我们需要了解一下 Midjourney 的咒语（prompt）需要什么，访问 Midjourney [有关 Prompt 内容的官网文档](https://docs.midjourney.com/docs/prompts)，找到对于咒语构成的描述内容：

> Try to be clear about any context or details that are important to you. Think about:
> - Subject: person, animal, character, location, object
> - Medium: photo, painting, illustration, sculpture, doodle, tapestry
> - Environment: indoors, outdoors, on the moon, underwater, in the city
> - Lighting: soft, ambient, overcast, neon, studio lights
> - Color: vibrant, muted, bright, monochromatic, colorful, black and white, pastel
> - Mood: sedate, calm, raucous, energetic
> - Composition: portrait, headshot, closeup, birds-eye view

尽量清楚任何对你很重要的背景或细节。想一想：
- 主题：人、动物、人物、位置、对象
- 媒介：照片， 绘画， 插画， 雕塑， 涂鸦， 挂毯
- 环境：室内、室外、月球、水下、城市
- 灯光：柔和、环境、阴天、霓虹灯、演播室灯
- 颜色：鲜艳、柔和、明亮、单色、色彩缤纷、黑白、粉彩
- 情绪：沉稳、平静、喧闹、精力充沛
- 构图：肖像、头像、特写、鸟瞰

其中非常清楚的告诉了我们咒语需要用哪些方面的内容来约束画面信息：

**主题、媒介、环境、灯光、颜色、情绪、构图。**

现在，结合文案与对咒语的了解提炼关键词：

**超人形象的母亲托举孩子，剪影风格，氛围温馨，主色调是暖色调。**

翻译成 Midjourney 识读的英文：

superwoman, short cloak, carrying a baby, silhouette, in the style of figurative minimalism, flat illustrations, warm color --s 250 --niji 5