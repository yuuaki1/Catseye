/*
  Warnings:

  - You are about to drop the column `catSlug` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `views` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_postSlug_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userEmail_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_catSlug_fkey";

-- DropIndex
DROP INDEX "Post_slug_key";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "catSlug",
DROP COLUMN "slug",
DROP COLUMN "views";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Comment";
