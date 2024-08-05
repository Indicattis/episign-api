-- CreateTable
CREATE TABLE `docs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `filename` VARCHAR(191) NOT NULL,
    `data` LONGBLOB NOT NULL,
    `status` BOOLEAN NOT NULL,
    `emp_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employees` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `emp_name` VARCHAR(191) NOT NULL,
    `emp_register` VARCHAR(191) NOT NULL,
    `hash` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `employees_emp_register_key`(`emp_register`),
    UNIQUE INDEX `employees_hash_key`(`hash`),
    UNIQUE INDEX `employees_token_key`(`token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
