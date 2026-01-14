/**
 * Data Barrel Export
 * 
 * Centralized exports for all data files and types.
 * Import from '@/data' instead of individual files.
 * 
 * @example
 * ```tsx
 * // ✅ Clean imports
 * import { outlookPosts, type OutlookPost } from '@/data';
 * 
 * // ❌ Avoid deep imports
 * import { outlookPosts } from '@/data/marketOutlookPosts';
 * ```
 */

// Export market outlook data and types
export { 
  outlookPosts,
  type OutlookPost 
} from './marketOutlookPosts';

// Future: Add more data exports as needed
// export { aboutMeData } from './aboutme';

/**
 * Usage examples:
 * 
 * ```tsx
 * import { outlookPosts, type OutlookPost } from '@/data';
 * 
 * // Use the data
 * const latestPosts = outlookPosts.slice(0, 3);
 * 
 * // Use the type
 * function renderPost(post: OutlookPost) {
 *   return <div>{post.title}</div>;
 * }
 * ```
 */

