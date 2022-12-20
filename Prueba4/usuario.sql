/*
 Navicat Premium Data Transfer

 Source Server         : Citas
 Source Server Type    : MySQL
 Source Server Version : 100425
 Source Host           : localhost:3306
 Source Schema         : usuario

 Target Server Type    : MySQL
 Target Server Version : 100425
 File Encoding         : 65001

 Date: 20/12/2022 19:02:13
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for historial
-- ----------------------------
DROP TABLE IF EXISTS `historial`;
CREATE TABLE `historial`  (
  `IdHistorial` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `RutUsu` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `HashUsu` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Clave1D` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Clave2D` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Clave3D` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Clave1Org` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Clave2Org` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Clave3Org` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Fecha` datetime(5) NOT NULL ON UPDATE CURRENT_TIMESTAMP(5),
  PRIMARY KEY (`IdHistorial`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of historial
-- ----------------------------
INSERT INTO `historial` VALUES (0000000001, '19490979', 'aaaa', 'aaaa', 'aaaa', 'aaaa', 'aaa', 'aaa', 'aaa', '2022-12-18 00:00:00.00000');
INSERT INTO `historial` VALUES (0000000002, '19490979', 'f346a8dd3905996459ddd8edec7de68d', '45c48cce2e2d7fbdea1afc51c7c6ad26', '75c147fbaae2994cc35420fb55d2aeb13827c40a', '3c4eeef822505c61af611452eeb82a0c', '1', 'a', '700', '2022-12-18 00:00:00.00000');
INSERT INTO `historial` VALUES (0000000003, '19490979', 'f346a8dd3905996459ddd8edec7de68d', '45c48cce2e2d7fbdea1afc51c7c6ad26', '75c147fbaae2994cc35420fb55d2aeb13827c40a', '3c4eeef822505c61af611452eeb82a0c', '4', 'e', '900', '2022-12-18 00:00:00.00000');
INSERT INTO `historial` VALUES (0000000004, '19490979', 'f346a8dd3905996459ddd8edec7de68d', '45c48cce2e2d7fbdea1afc51c7c6ad26', '75c147fbaae2994cc35420fb55d2aeb13827c40a', '3c4eeef822505c61af611452eeb82a0c', '6', 'u', '450', '2022-12-18 00:00:00.00000');
INSERT INTO `historial` VALUES (0000000005, '19490979', 'f346a8dd3905996459ddd8edec7de68d', '45c48cce2e2d7fbdea1afc51c7c6ad26', '75c147fbaae2994cc35420fb55d2aeb13827c40a', '3c4eeef822505c61af611452eeb82a0c', '7', 'o', '800', '0000-00-00 00:00:00.00000');
INSERT INTO `historial` VALUES (0000000006, '19490979', 'f346a8dd3905996459ddd8edec7de68d', '45c48cce2e2d7fbdea1afc51c7c6ad26', '75c147fbaae2994cc35420fb55d2aeb13827c40a', '3c4eeef822505c61af611452eeb82a0c', '3', 'u', '750', '2022-12-18 00:46:39.00000');
INSERT INTO `historial` VALUES (0000000007, '19490979', 'f346a8dd3905996459ddd8edec7de68d', 'eccbc87e4b5ce2fe28308fd9f2a7baf3', '69c29def2c455c36a84389717cf85f2e4e752220', '2bfbb7e74c9fbd339f1454c0fb095ef0', '3', 'i', '350', '2022-12-18 00:50:06.00000');
INSERT INTO `historial` VALUES (0000000008, '19490979', 'f346a8dd3905996459ddd8edec7de68d', 'cfcd208495d565ef66e7dff9f98764da', '75c147fbaae2994cc35420fb55d2aeb13827c40a', '70fa10d31e2837e22261426d37d924e7', '0', 'u', '100', '2022-12-18 00:50:57.00000');
INSERT INTO `historial` VALUES (0000000009, '19490979', 'f346a8dd3905996459ddd8edec7de68d', '8f14e45fceea167a5a36dedd4bea2543', '69c29def2c455c36a84389717cf85f2e4e752220', 'ee4e8774600926c887343135e1db12ee', '7', 'i', '450', '2022-12-18 00:52:25.00000');
INSERT INTO `historial` VALUES (0000000010, '19490979', 'f346a8dd3905996459ddd8edec7de68d', 'e4da3b7fbbce2345d7772b0674a318d5', '386c9b53c0a2b6fe53b148541529c7ac30830854', '2bfbb7e74c9fbd339f1454c0fb095ef0', '5', 'e', '350', '2022-12-18 00:53:42.00000');
INSERT INTO `historial` VALUES (0000000011, '19490979', 'f346a8dd3905996459ddd8edec7de68d', '8f14e45fceea167a5a36dedd4bea2543', '75c147fbaae2994cc35420fb55d2aeb13827c40a', 'c2683b89f163f5f6a67c27efd4bb6a1e', '7', 'u', '400', '2022-12-18 00:55:26.00000');
INSERT INTO `historial` VALUES (0000000012, '19490979', 'f346a8dd3905996459ddd8edec7de68d', 'c4ca4238a0b923820dcc509a6f75849b', '4192dee2f886e99ececbb2eee0d2f37f11257974', '2bfbb7e74c9fbd339f1454c0fb095ef0', '1', 'a', '350', '2022-12-19 22:16:11.00000');
INSERT INTO `historial` VALUES (0000000013, '19490979', '6eb5e25fa2098d589a4f936c7145fd2c', '45c48cce2e2d7fbdea1afc51c7c6ad26', '69c29def2c455c36a84389717cf85f2e4e752220', '2eeb50ad36b1a31ef73bd7aae4fbb479', '9', 'i', '900', '2022-12-19 23:35:18.00000');
INSERT INTO `historial` VALUES (0000000014, '19490979', '22ac431e0255ba424e9ae6ff84013461', 'c81e728d9d4c2f636f067f89cc14862c', '75c147fbaae2994cc35420fb55d2aeb13827c40a', '42fcf47ea5e87c546d80016168be4efa', '2', 'u', '500', '2022-12-19 23:36:13.00000');
INSERT INTO `historial` VALUES (0000000015, '19490979', 'b19e38208af93df4692163beaf9ca4d7', '45c48cce2e2d7fbdea1afc51c7c6ad26', '69c29def2c455c36a84389717cf85f2e4e752220', '3f4c4fe269ef599a46bdc6106038c80f', '9', 'i', '950', '2022-12-19 23:41:55.00000');
INSERT INTO `historial` VALUES (0000000016, '19490979', 'a8e43c3b12df1feaf198092830f6f7d1', 'c9f0f895fb98ab9159f51fd0297e236d', '4192dee2f886e99ececbb2eee0d2f37f11257974', 'e4c0e45cbd675fb494dfed0bf015fc4a', '8', 'a', '300', '2022-12-19 23:43:28.00000');
INSERT INTO `historial` VALUES (0000000017, '19490979', '', 'c81e728d9d4c2f636f067f89cc14862c', '4192dee2f886e99ececbb2eee0d2f37f11257974', '57ae34c08f3aeee8d1ce29f66efd2d97', '2', 'a', '250', '2022-12-19 23:45:44.00000');

SET FOREIGN_KEY_CHECKS = 1;
