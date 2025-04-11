import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

// 为每一个集合定义一个 `loader` 和 `schema`
const postsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/posts" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        tags: z.array(z.string()),
        pubDate: z.date(),
        cover: image()
    })
});

// 导出一个单独的 `collections` 对象来注册你的集合
export const collections = {
    posts: postsCollection,
};