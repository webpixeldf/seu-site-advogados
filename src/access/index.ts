import type { Access } from 'payload'

// Only authenticated users can perform write operations
export const isAdmin: Access = ({ req: { user } }) => !!user

// Anyone can read (public data like blog posts, portfolio, FAQ)
export const isPublicRead: Access = () => true
