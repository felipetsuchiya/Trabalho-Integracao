/*
  Warnings:

  - The primary key for the `animais` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `animais` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_animais" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "raca" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_animais" ("created_at", "id", "name", "raca", "updated_at") SELECT "created_at", "id", "name", "raca", "updated_at" FROM "animais";
DROP TABLE "animais";
ALTER TABLE "new_animais" RENAME TO "animais";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
