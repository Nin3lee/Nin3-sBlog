import { getCollection } from "astro:content";
export const tagColors: Record<string, string> = {
    实践: '#66AD5F',
    测试: '#7F94FF',
    经验: '#209BF6',
    设计: '#9E34F0',
    故事: '#FF6F61',
    // ......
    // Add more tags and their corresponding colors
};

export const defaultTagColor = '#3498db';
// Default color for tags not in the list

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