-- AlterTable
ALTER TABLE `Borrowing` ADD COLUMN `renewalCount` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `status` ENUM('ISSUED', 'RETURNED', 'OVERDUE', 'RENEWED', 'LOST') NOT NULL DEFAULT 'ISSUED';
