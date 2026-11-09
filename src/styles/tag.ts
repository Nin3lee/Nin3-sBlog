import { getCollection } from "astro:content";

export const tagColors: Record<string, string> = {
    实践: 'var(--tag-practice)',
    测试: 'var(--tag-test)',
    经验: 'var(--tag-experience)',
    设计: 'var(--tag-design)',
    故事: 'var(--tag-story)',
};

export const defaultTagColor = 'var(--tag-default)';

export async function getTagsWithCount() {
    const allPosts = await getCollection("posts");
    const tagCounts: Record<string, number> = {};

    allPosts.forEach((post) => {
        post.data.tags.forEach((tag: string) => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });
    });

    return tagCounts;
}

export function getTagColor(tag: string): string {
    return tagColors[tag] || defaultTagColor;
}

export function getAllTagColors(): Record<string, string> {
    return tagColors;
}