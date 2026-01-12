# How to Create New Market Outlook Posts


You now have an **automatic ID generation system** for creating new posts!

<br>


### Step 1: Run the Post Generator

```bash
npm run create-post
```

### Step 2: Answer the Prompts

The script will ask you:
- Title
- Excerpt (summary)
- Date
- Category
- Read time

### Step 3: Copy & Paste

The script will generate a complete post template with a **unique auto-generated ID**. Just copy and paste it into `src/data/marketOutlookPosts.ts`

### Step 4: Add Your Content

Fill in the `content` section with your full article using HTML formatting.

<br>

### Example: Complete Post

```typescript
{
  id: "your-post-id",
  title: "Your Post Title",
  excerpt: "A short excerpt of your post.",
  date: "Date of post publication",
  category: "Quarterly Review | Strategy | Sector Analysis",
  readTime: "14 min read",
  content: `
    <h3>Headings of Your Post</h3>
    <p>Content of your post</p>
  `
}
```

