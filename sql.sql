DROP TABLE IF EXISTS `dogesound`;
CREATE TABLE IF NOT EXISTS `dogesound` (
  `idx` int(11) AUTO_INCREMENT,
  `metadata` varchar(255) NOT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;