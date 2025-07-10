---
title: 'tokopakedi'
description: 'TokoPakEdi is an e-commerce that allows customers to buy products.'
link: 'https://tokopakedi.hawari.dev'
github: 'https://github.com/fachrihawari/tokopakedi'
publishedAt: 2024-09-15
tags: ['javascript', 'nextjs', 'tailwindcss', 'mongodb', 'midtrans']
---

# TokoPakEdi 🛒

Built a full-featured e-commerce site that handles everything from browsing products to processing payments. Wanted to create something that covers all the basics of online shopping.

## What it does 📱

Standard e-commerce stuff - you can browse products, filter by category and price, add things to cart, and check out. Includes user authentication with **Google OAuth** and regular login/register. Order tracking shows your purchase history.

## Tech stack ⚡

- **Next.js 14** - main framework with app router
- **MongoDB** - database for products, users, orders  
- **Tailwind CSS** - styling
- **Midtrans** - payment processing (Indonesian payment gateway) 💳
- **TypeScript** - type safety
- **Google OAuth** - login option
- **Bun** - runtime & fast package manager

## Key features ✨

The product browsing works pretty well - has search, category filters, price ranges, and pagination. Cart persists between sessions if you're logged in.

Payment integration with Midtrans handles Indonesian payment methods. Order tracking shows purchase history with expandable details.

Used **server actions** for most data operations, which keeps things simple. Product images and details render server-side for better SEO.

Built with Bun runtime instead of Node.js - wanted to try something different. Docker setup makes deployment straightforward.

## What I learned 💡

**Aggregation pipelines** are really powerful for complex queries like faceted search where you need product counts per category:

```javascript
// Example aggregation for product facets
const facets = await productsCollection.aggregate([
  { $match: filter },          // First filter products by search criteria
  { $facet: {                  // Split into multiple aggregations
    priceRanges: [
      { $bucketAuto: { groupBy: "$price", buckets: 5 } }  // Auto-generate 5 price ranges
    ],
    categories: [
      { $group: { _id: "$category", count: { $sum: 1 } } }  // Count products per category
    ]
  }}
])
```

This single query gives me both the price range buckets (like "$10-50", "$50-100") and category counts (like "Electronics: 45 items") that power the filter sidebar. Way more efficient than running separate queries for each filter type.

Database indexing made a **huge difference** - went from slow filtered searches to snappy responses by indexing on `category`, `price`, and `rating` fields.

## Live demo 🌐

Site is running with fake data, so you can browse around and test the checkout flow. Payment goes through Midtrans sandbox so no real money involved.
