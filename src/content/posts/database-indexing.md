---
title: 'Database Indexing'
description: 'Learn how database indexing works'
publishedAt: 2025-07-21
tags: ["database", "indexing", "performance"]
---

## Preamble

Imagine you have a large book with thousands of pages, and you want to find a specific topic quickly. Instead of flipping through every page, you can use the index at the back of the book to jump directly to the relevant section. This is similar to how database indexing works.


![Finding something in a book](https://example.com/database-indexing.png)

Database indexing is a technique used to speed up the retrieval of rows from a database table. It creates a data structure that allows the database to find data without scanning every row in the table, much like how an index in a book helps you find information quickly.

## How Indexing Works

When you create an index on a database table, the database builds a separate data structure that contains the indexed columns and pointers to the actual rows in the table. This index is usually implemented as a B-tree or a hash table, which allows for efficient searching.

![B-tree Index](https://example.com/btree-index.png)

![hash table Index](https://example.com/hash-table-index.png)


