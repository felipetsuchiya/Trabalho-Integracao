/*
  Warnings:

  - Added the required column `raca` to the `animais` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_animais" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "raca" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_animais" ("created_at", "id", "name", "updated_at") SELECT "created_at", "id", "name", "updated_at" FROM "animais";
DROP TABLE "animais";
ALTER TABLE "new_animais" RENAME TO "animais";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
