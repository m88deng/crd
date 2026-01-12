#!/usr/bin/env node

/**
 * Helper script to create a new market outlook post with auto-generated ID
 * 
 * Usage:
 *   node scripts/createPost.js
 * 
 * This will generate a post template with a unique ID that you can copy
 * into your marketOutlookPosts.ts file
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Generate a short 8-character hexadecimal hash ID (MarketWatch style)
function generatePostId() {
  const timestamp = Date.now().toString(16);
  const random = Math.random().toString(16).substring(2);
  const combined = timestamp + random;
  
  // Take first 8 characters for a clean, short ID
  return combined.substring(0, 8);
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

console.log('\n🚀 Market Outlook Post Generator\n');
console.log('This will generate a new post template with an auto-generated ID.\n');

const questions = [
  { key: 'title', prompt: 'Post Title: ' },
  { key: 'excerpt', prompt: 'Excerpt (short summary): ' },
  { key: 'date', prompt: 'Date (e.g., "January 12, 2026"): ' },
  { key: 'category', prompt: 'Category (Quarterly Review/Strategy/Sector Analysis): ' },
  { key: 'readTime', prompt: 'Read Time (e.g., "12 min read"): ' },
];

const answers = {};
let currentQuestion = 0;

function askQuestion() {
  if (currentQuestion >= questions.length) {
    generatePost();
    return;
  }

  const q = questions[currentQuestion];
  rl.question(q.prompt, (answer) => {
    answers[q.key] = answer;
    currentQuestion++;
    askQuestion();
  });
}

function generatePost() {
  const postId = generatePostId();
  const slug = slugify(answers.title);
  
  const postTemplate = `
  {
    id: "${postId}",
    title: "${answers.title}",
    excerpt: "${answers.excerpt}",
    date: "${answers.date}",
    category: "${answers.category}",
    readTime: "${answers.readTime}",
    content: \`
      <h3>Section Title</h3>
      <p>Your content goes here...</p>

      <h3>Another Section</h3>
      <p>More content...</p>
      
      <ul>
        <li>Bullet point 1</li>
        <li>Bullet point 2</li>
      </ul>
    \`
  }`;

  console.log('\n✅ Post Generated Successfully!\n');
  console.log('📋 Copy the following code and add it to src/data/marketOutlookPosts.ts:\n');
  console.log('─'.repeat(80));
  console.log(postTemplate);
  console.log('─'.repeat(80));
  console.log(`\n🔗 URL will be: /market-outlook/${slug}-${postId}\n`);
  console.log(`📝 Post ID: ${postId} (short 8-character hash)\n`);
  
  rl.close();
}

askQuestion();

