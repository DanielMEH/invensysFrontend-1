-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-04-2023 a las 03:25:57
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `storedv1`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `ADMIN_AUTH_LOGIN` (IN `email` TEXT)   BEGIN

SELECT password,rol,correo,idUsers FROM admin WHERE correo = email;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ADMIN_INSERT_ACCOUNT` (IN `email` VARCHAR(50), IN `pass` TEXT, IN `authCount` TEXT, IN `datecreate` DATE, IN `timeCreate` TIME, IN `roluser` VARCHAR(50), IN `AceptTerminosYcondiciones` TEXT)   BEGIN
INSERT INTO admin(idUsers,correo,password,authCuenta,fechaCreacion,hora,rol,AceptoterminosYcondiciones) VALUES(UUID(), email,pass,authCount,datecreate,timeCreate,roluser,AceptTerminosYcondiciones );

 
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ADMIN_INSERT_LOGIN` (IN `email` VARCHAR(50), IN `fecha` TEXT, IN `times` TEXT, IN `isAllowed` TEXT, IN `cuent` TEXT, IN `ipA` TEXT, IN `paisA` TEXT, IN `ciudadA` TEXT, IN `country_calling` TEXT, IN `idiomaA` TEXT, IN `longA` TEXT, IN `lagA` TEXT, IN `state` TEXT, IN `tc` TEXT, IN `authCount` TEXT, IN `passw` TEXT)   BEGIN
INSERT INTO admin(idUsers,correo,fechaCreacion,hora,rol,cuenta,ip,pais,ciudad,country_calling_code, idioma,longitud,latitud,estado,AceptoterminosYcondiciones,authCuenta, password	)VALUES(UUID(),email,fecha,times,isAllowed,cuent,ipA,paisA,ciudadA,country_calling,idiomaA,longA,lagA,state,tc,
authCount,passw);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ADMIN_RECOVERY__PASSWORD_CODE` (IN `email` VARCHAR(50), IN `codeAuth` INT)   BEGIN
 UPDATE admin SET codigo=codeAuth WHERE correo=email;
 
 END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ADMIN_SELECT` (IN `id` CHAR(36))   BEGIN

SELECT * FROM admin WHERE idUsers = id;

 
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ADMIN_SELECT_CODE` (IN `email` VARCHAR(50))   BEGIN

SELECT codigo FROM admin WHERE correo = email;

 
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ADMIN_SELECT_EMAIL` (`email` VARCHAR(50))   BEGIN
  SELECT * FROM admin WHERE correo = email;
  
  END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ADMIN_STATE_ACCOUNT` (IN `id` CHAR(36), IN `state` TEXT)   BEGIN

UPDATE admin SET estado = state WHERE idUsers = id;

 
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ADMIN_UPDATE_DATA` (IN `id` CHAR(36), IN `nombre` VARCHAR(30), IN `documento` BIGINT, IN `tel` BIGINT, IN `nombreEmpresa` VARCHAR(50))   BEGIN
 UPDATE admin SET name= nombre, document=documento,telefono=tel, nombreTienda=nombreEmpresa WHERE idUsers = id;
 
 END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ADMIN_UPDATE_PASSWORD` (IN `email` VARCHAR(50), IN `pass` TEXT)   BEGIN

UPDATE admin SET password=pass WHERE correo = email;

 
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ADMIN_UPLOAD_IMG` (IN `iduser` CHAR(36), IN `imgURL` TEXT, IN `imgLD` TEXT)   BEGIN
 UPDATE admin SET imgURL= imgURL,imgLD=imgLD WHERE idUsers=iduser;
 
 END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ASIGNED_PERMISION_USER_ACCOUNT` (IN `idModuleAcc` CHAR(36), IN `autorized` TEXT, IN `name_permise` TEXT, IN `state_permise` TEXT)   BEGIN
INSERT INTO permisos(idpermisions,idModulCount,isAllowed,name,estado) VALUES (UUID(),idModuleAcc,autorized,name_permise,state_permise);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ASSIGNED_MODULE_USER_REGISTER` (IN `title` VARCHAR(30), IN `description` VARCHAR(40), IN `state` INT, IN `idUserAsigned` CHAR(36))   BEGIN
INSERT INTO modulo(IDmodulo, titulo, descripcion, statusM,idAdminAcc) VALUES (UUID(),title,description,state,idUserAsigned);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `AUTH_GOOGLE` (IN `email` VARCHAR(50), IN `nombre` VARCHAR(30), IN `imgurl` TEXT, IN `fecha` TEXT, IN `times` TEXT, IN `isAllowed` TEXT, IN `cuent` TEXT, IN `ipA` TEXT, IN `paisA` TEXT, IN `ciudadA` TEXT, IN `country_calling` TEXT, IN `idiomaA` TEXT, IN `longA` TEXT, IN `lagA` TEXT, IN `state` TEXT, IN `tc` TEXT, IN `authCount` TEXT)   BEGIN
INSERT INTO admin(idUsers,correo,name,imgURL,fechaCreacion,hora,rol,cuenta,ip,pais,ciudad,country_calling_code, idioma,longitud,latitud,estado,AceptoterminosYcondiciones,authCuenta	)VALUES(UUID(),email,nombre,imgurl,fecha,times,isAllowed,cuent,ipA,paisA,ciudadA,country_calling,idiomaA,longA,lagA,state,tc,
authCount);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `COUNT_STATE_USER` (IN `id` CHAR(36))   BEGIN
SELECT COUNT(estado) as totalActive FROM account WHERE estado ="Activo" AND idUsers1 =id;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `COUNT_STATE_USER_INACTIVO` (IN `id` CHAR(36))   BEGIN
SELECT COUNT(estado) as totalActive FROM account WHERE estado ="Inactivo" AND idUsers1 =id;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `CREATE_USER` (IN `email` VARCHAR(50), IN `pass` TEXT, IN `dates` TEXT, IN `idAdmin` CHAR(36), IN `TimesHours` TEXT, IN `state` TEXT)   BEGIN
INSERT INTO account(idAccount,correo,password,idUsers1,fecha,hora,estado) VALUES(UUID(),email,pass,idAdmin,dates,TimesHours,state); 
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `DELETE_ALL_USERS` (IN `idUser` CHAR(36), IN `idModul` CHAR(36))   BEGIN
DELETE p.* from permisos p INNER JOIN modulo m ON p.idmodulCount = m.IDmodulo WHERE p.idmodulCount=idModul;
DELETE m.* FROM modulo m INNER JOIN account ac ON m.idAdminAcc = ac.idAccount WHERE m.idAdminAcc = idUser;
DELETE ac.* FROM account ac  WHERE ac.idAccount  = idUser;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `DELETE_MODULE_USER` (IN `idU` CHAR(36))   BEGIN 
DELETE p.*  FROM permisos p WHERE p.idmodulCount= idU;

DELETE m.*FROM modulo m WHERE m.IDmodulo= idU;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `DELETE_PERMISIONS_MODULE_USER` (IN `id` CHAR(36))   BEGIN 

DELETE p.* FROM permisos p WHERE p.idmodulCount = id;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GET_COUNT_USERS` (`id` CHAR(36))   BEGIN
SELECT COUNT(*) as total FROM account  WHERE idUsers1 = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GET_MODULE_ACCOUNT_USER` (IN `id` CHAR(36))   BEGIN

SELECT IDmodulo,titulo FROM modulo WHERE idAdminAcc= id;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GET_PERMISIONS_MODULE_USER` (IN `id` CHAR(36))   BEGIN
SELECT * from permisos where idmodulCount = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GET_USER` (IN `id` CHAR(36))   BEGIN
SELECT ac.* FROM account ac WHERE idUsers1 = id ORDER by ac.fecha DESC ;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GET_USER_CREATE` (`email` VARCHAR(50))   BEGIN
SELECT * FROM account  WHERE correo = email;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GET_USER_SECOND_USER` (`email` VARCHAR(50))   BEGIN

SELECT 	idAccount FROM account WHERE correo = email;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `INSERT_MODULE_USER` (IN `title` VARCHAR(30), IN `description` VARCHAR(40), IN `id` CHAR(36))   BEGIN
Insert INTO modulo (IDmodulo,titulo, descripcion,idAdminAcc)  VALUES(UUID(),title, description,id);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SELECT_ALL_MODULE_USERS` (`id` CHAR(36))   BEGIN
      SELECT m.IDmodulo FROM modulo m WHERE m.idAdminAcc = id;
                                         
  END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `UPDATE_SESION_USER` (`dispositivo1` TEXT, `ip1` TEXT, `tokens1` TEXT, `fechaUltHour1` TEXT, `lugarConection1` TEXT, `idioma1` VARCHAR(30), `navegador1` TEXT, `infoNavegIp1` TEXT, `ciudad1` VARCHAR(50), `Pais1` VARCHAR(40), `region1` VARCHAR(50), `idAccountUsers1` CHAR(36))   BEGIN 
UPDATE services SET  dispositivo = dispositivo1, ip = ip1, tokens = tokens1, fechaUltHour = fechaUltHour1, lugarConection = lugarConection1, idioma = idioma1, navegador = navegador1, infoNavegIp = infoNavegIp1, ciudad = ciudad1, Pais = Pais1, region = region1, idAccountUsers = idAccountUsers1;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USER_LOGIN` (IN `email` VARCHAR(50))   BEGIN
select idAccount, correo, password from account where correo=email;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `USER_LOGIN_MODULO` (IN `id` CHAR(36))   BEGIN
SELECT m.titulo FROM modulo m where m.idAdminAcc = id;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `account`
--

CREATE TABLE `account` (
  `correo` varchar(50) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `fecha` text DEFAULT NULL,
  `estado` text DEFAULT NULL,
  `hora` text DEFAULT NULL,
  `URLimage` text DEFAULT NULL,
  `imgId` text DEFAULT NULL,
  `idAccount` char(36) NOT NULL,
  `idUsers1` char(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `account`
--

INSERT INTO `account` (`correo`, `password`, `fecha`, `estado`, `hora`, `URLimage`, `imgId`, `idAccount`, `idUsers1`) VALUES
('danielo@gmail.com', '$2b$10$WeIKcD5liv/ekOhmS3ERFO8a/.8A5X9I6nYpbe/..h4w48OKSjwLq', 'abril 4º 2023', '', '5:01:58 pm', NULL, NULL, '51ffcabe-d334-11ed-b33a-1078d241b29f', '0d2adb95-d32a-11ed-ab07-1078d241b29f'),
('danielo1@gmail.com', '$2b$10$vF9EBJHK0nhFkNVNKkFOm.HJeORsLwm33RDme2yahAxIc1zO.8oda', 'abril 4º 2023', 'Activo', '5:02:09 pm', NULL, NULL, '5859a701-d334-11ed-b33a-1078d241b29f', '0d2adb95-d32a-11ed-ab07-1078d241b29f');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

CREATE TABLE `admin` (
  `idUsers` char(36) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `imgURL` text DEFAULT NULL,
  `imgLD` text DEFAULT NULL,
  `document` bigint(20) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `authCuenta` text DEFAULT NULL,
  `estado` set('activo','inactivo') DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `codigo` int(11) DEFAULT NULL,
  `telefono` bigint(20) DEFAULT NULL,
  `nombreTienda` varchar(50) DEFAULT NULL,
  `fechaCreacion` text DEFAULT NULL,
  `hora` time NOT NULL,
  `rol` varchar(50) NOT NULL,
  `AceptoterminosYcondiciones` text NOT NULL,
  `cuenta` text NOT NULL,
  `pais` text NOT NULL,
  `ciudad` text NOT NULL,
  `country_calling_code` text NOT NULL,
  `latitud` text NOT NULL,
  `longitud` text NOT NULL,
  `idioma` text NOT NULL,
  `ip` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `admin`
--

INSERT INTO `admin` (`idUsers`, `name`, `imgURL`, `imgLD`, `document`, `password`, `authCuenta`, `estado`, `correo`, `codigo`, `telefono`, `nombreTienda`, `fechaCreacion`, `hora`, `rol`, `AceptoterminosYcondiciones`, `cuenta`, `pais`, `ciudad`, `country_calling_code`, `latitud`, `longitud`, `idioma`, `ip`) VALUES
('0d2adb95-d32a-11ed-ab07-1078d241b29f', 'Daniel ospina', 'https://lh3.googleusercontent.com/a/AGNmyxb-4h52q218wbkuRBjA-rRfKZLmlMoMnPwP-9fn-A=s96-c', NULL, 1005090349, NULL, 'OK', 'activo', 'ospinaortizjuandaniel351@gmail.com', NULL, 3003764561, 'exito', '4º abril  2023', '03:48:27', 'superAdmin', 'si', 'Google', 'Colombia', 'Armenia', '+57', '4.5379', '-75.6807', 'es-CO', '201.190.115.255');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modulo`
--

CREATE TABLE `modulo` (
  `IDmodulo` char(36) NOT NULL,
  `titulo` varchar(30) NOT NULL,
  `descripcion` varchar(40) NOT NULL,
  `statusM` int(11) NOT NULL,
  `idAdminAcc` char(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `idpermisions` char(36) NOT NULL,
  `idmodulCount` char(36) NOT NULL,
  `isAllowed` text DEFAULT NULL,
  `name` text DEFAULT NULL,
  `estado` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `services`
--

CREATE TABLE `services` (
  `idServices` char(36) NOT NULL,
  `dispositivo` text NOT NULL,
  `ip` text NOT NULL,
  `tokens` text NOT NULL,
  `fechaUltHour` text NOT NULL,
  `lugarConection` text NOT NULL,
  `idioma` varchar(30) NOT NULL,
  `navegador` text NOT NULL,
  `infoNavegIp` text NOT NULL,
  `ciudad` varchar(50) NOT NULL,
  `Pais` varchar(40) NOT NULL,
  `region` varchar(50) NOT NULL,
  `idAccountUsers` char(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `services`
--

INSERT INTO `services` (`idServices`, `dispositivo`, `ip`, `tokens`, `fechaUltHour`, `lugarConection`, `idioma`, `navegador`, `infoNavegIp`, `ciudad`, `Pais`, `region`, `idAccountUsers`) VALUES
('', 'desktop', '181.51.187.30', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZDEiOiI1MWZmY2FiZS1kMzM0LTExZWQtYjMzYS0xMDc4ZDI0MWIyOWYiLCJpYXQiOjE2ODA2NDYyNzMsImV4cCI6MTY4MDczMjY3M30.myYaB8o4HeG7bib7RSN6qU8LQBepojv8B_xqwQcid3c', 'martes, 4 de abril de 2023 17:11', 'Armenia', 'es-CO', 'chrome', '34.56', 'Armenia', 'Colombia', 'Antioquia', '51ffcabe-d334-11ed-b33a-1078d241b29f');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`idAccount`),
  ADD KEY `fk_accUsers` (`idUsers1`);

--
-- Indices de la tabla `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`idUsers`);

--
-- Indices de la tabla `modulo`
--
ALTER TABLE `modulo`
  ADD PRIMARY KEY (`IDmodulo`),
  ADD KEY `aceso_,odul_usuario` (`idAdminAcc`);

--
-- Indices de la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`idpermisions`),
  ADD KEY `accmodul_permisions` (`idmodulCount`);

--
-- Indices de la tabla `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`idServices`),
  ADD KEY `acce_usersfk` (`idAccountUsers`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `account`
--
ALTER TABLE `account`
  ADD CONSTRAINT `acce_users` FOREIGN KEY (`idUsers1`) REFERENCES `admin` (`idUsers`);

--
-- Filtros para la tabla `modulo`
--
ALTER TABLE `modulo`
  ADD CONSTRAINT `aceso_,odul_usuario` FOREIGN KEY (`idAdminAcc`) REFERENCES `account` (`idAccount`);

--
-- Filtros para la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD CONSTRAINT `accmodul_permisions` FOREIGN KEY (`idmodulCount`) REFERENCES `modulo` (`IDmodulo`);

--
-- Filtros para la tabla `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `acc_usersfk` FOREIGN KEY (`idAccountUsers`) REFERENCES `account` (`idAccount`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
