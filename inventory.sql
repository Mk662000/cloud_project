-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 28, 2022 at 09:11 PM
-- Server version: 5.7.31
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `description` varchar(500) NOT NULL,
  `img` varchar(500) NOT NULL,
  `count` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `rating` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_categories` (`cat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `img`, `count`, `cat_id`, `rating`) VALUES
(4, 'Benazepril', '491', 'Benazepril is used to treat high blood pressure (hypertension). Lowering high blood pressure helps prevent strokes, heart attacks, and kidney problems. Benazepril is an ACE inhibitor and works by relaxing blood vessels so that blood can flow more easily.\r\n', '1.jpg', 100, 2, 3.3),
(5, 'Captopril', '889', 'Captopril belongs to a class of medications called ACE inhibitors. It is used to improve survival after heart attacks, it can be used to prevent kidney injury in some diabetic patients, and to treat arterial hypertension.', '2.jpg', 50, 2, 1.6),
(8, 'Enalapril', '335', 'Enalapril is an angiotensin-converting enzyme (ACE) inhibitor antihypertensive, marketed by Merck under the brand names Renetec and Vasotec.', '3.jpg', 75, 2, 3.3),
(9, 'Fosinopril', '674', 'Fosinopril is an angiotensin-converting enzyme (ACE) inhibitor antihypertensive. It is marketed by Bristol-Myers Squibb under the brand name Monopril. ', '4.jpg', 80, 2, 4.8),
(12, 'Lisinopril', '234', 'Lisinopril is an angiotensin-converting enzyme inhibitor that inhibits ACE and is used in cases of heart failure, hypertension, myocardial infarction, and diabetic nephropathy.', '5.jpg', 150, 2, 5),
(13, 'Moexipril', '1992', 'Moexipril hydrochloride Moexipril is a competitive inhibitor of ACE, which prevents the conversion of angiotensin I to angiotensin II, which causes vasoconstriction and thus inhibition of angiotensin II causes vascular relaxation and hypotension.', '6.jpg', 150, 2, 1.8),
(14, 'Perindopril', '1072', 'Perindopril is an angiotensin-converting enzyme inhibitor that inhibits ACE and is used in cases of heart failure, hypertension, myocardial infarction, and diabetic nephropathy.', '7.jpg', 200, 2, 2.2),
(15, 'Quinapril', '381', 'Quinapril, also sold under the brand name Ecopril and others, is a medication used to treat high blood pressure, heart failure, and diabetic nephropathy. It is a good initial treatment for high blood pressure. This medication is taken orally. Common side effects include headache, dizziness, tired feeling, and cough.', '8.jpg', 175, 2, 3.3),
(16, 'Ramipril', '1027', 'Ramipril is an angiotensin-converting enzyme (ACE) inhibitor antihypertensive.', '9.jpg', 130, 2, 1.1),
(17, 'Trandolapril', '2104', 'Trandolapril is an antihypertensive, an ACE inhibitor. This drug lowers blood pressure. The drug is given initially at 1 mg/day, and the dose is titrated up to 4 mg/day; If the patient does not tolerate this dose, the maximum dose that the patient can tolerate can be continued.', '10.jpg', 50, 2, 1.6),
(18, 'Omeprazole', '1191', 'Omeprazole is a drug that affects the acidity of the stomach and is a drug that inhibits the secretion of acid in the stomach. Therefore, the drug is encapsulated in an enteric coating because it is an unstable drug.', '11.jpg', 180, 3, 2.9),
(19, 'Lansoprazole', '2407', 'Lansoprazole is a proton pump inhibitor that prevents the stomach from producing its own acid. It is manufactured by a group of companies around the world under different brand names. In the United States, it was first approved by the Food and Drug Administration in 1995. Patent protection for Revacid expired on November 10, 2009.', '12.jpg', 135, 3, 2.8),
(20, 'Rabeprazole', '773', 'Rabeprazole is a selective proton-pump inhibitor, useful in reducing stomach acid and treating peptic ulcers and gastritis.', '13.jpg', 100, 3, 1.1),
(21, 'Pantoprazole', '265', 'Pantoprazole is a drug that inhibits the proton pump and blocks the secretion of stomach acids. First marketed under the trade name Protonex, pantoprazole is used as a limited-time treatment for esophagitis, which is caused by the backflow of stomach acids and juices, and which includes symptoms such as heartburn, hyperacidity and pain when swallowing.', '14.jpg', 175, 3, 2.1),
(24, 'Esomeprazole', '250', 'Esomeprazole, sold under the brand name Nexium among other brand names, is a drug that reduces stomach acid. It is used to treat gastroesophageal reflux disease, peptic ulcer disease, and Zollinger-Ellison syndrome. Efficacy is similar to other proton pump inhibitors. It is taken orally or by injection into a vein.', '15.jpg', 235, 3, 1.6),
(25, 'Cimetidine', '1077', 'Cimetidine is an H2-receptor antagonist that was previously used to treat peptic ulcers and gastroesophageal reflux disease. Its use has now declined due to its side effects and the existence of better alternatives.', '16.jpg', 160, 3, 1.4),
(26, 'Ranitidine', '700', 'Ranitidine is an antihistamine that suppresses gastric acid production. It is commonly used in the treatment of peptic and esophageal ulcer diseases. It can be obtained without a prescription.', '17.jpg', 250, 3, 1.5),
(27, 'Famotidine', '', 'Famotidine is a type II H2 blocker used in the treatment of peptic ulcers and gastroesophageal reflux disease.', '18.jpg', 180, 3, 3.4),
(28, 'Nizatidine', '2180', 'Nizatidine is a histamine-2 receptor blocker that is used to treat peptic ulcers, duodenal ulcers, gastroesophageal reflux disease (GERD , TRUNCATE( RAND()*(5-1+1) ,1) ), and prevent stress ulcers.', '19.jpg', 80, 3, 1.4),
(29, 'Metoclopramide', '261', 'Metoclopramide is an antiemetic and prokinetic drug. It is therefore primarily used to treat nausea and vomiting and to facilitate gastric emptying in patients with gastroparesis. It is available under different brand names such as Maxolon, Reglan, Degan, Maxiran, Premperan, and Belomid.', '20.jfif', 260, 3, 1.7),
(30, 'Doxapram', '2443', 'Doxapram hydrochloride is a respiratory stimulant, given intravenously. Doxapram stimulates the increase in tidal volume and respiratory rate.', '21.jfif', 85, 6, 2.6),
(31, 'Almitrine', '1911', 'Almetrine is a diphenylmethylpiperazine derivative classified by the Anatomic Therapeutic Chemical Classification System as a respiratory stimulant. This medication stimulates breathing by stimulating chemical receptors in the carotid bodies. Server Laboratories produce this drug under the trade name Duxil.', '22.jfif', 135, 6, 2.7),
(32, 'Bemegride', '1612', 'Bemegride is a central nervous system stimulant. The drug was first made in 1911. It was used in a hypnotic overdose. As with other chemoreceptor agonists, it is considered potent vomiting at doses in excess of those normally used in the treatment of barbiturate overdose although vomiting and aspiration are a concern during treatment.', '23.jfif', 100, 6, 1.9),
(33, 'Omalizumab', '16620', 'Omalizumab is a monoclonal antibody developed by Roche/Gennitech and Novartis for the treatment of moderate to severe allergic asthma unresponsive to high doses of corticosteroids. It is also used in the treatment of chronic spontaneous urticaria that cannot be treated with high doses of the H1 antihistamine.', '24.jfif', 20, 6, 1.3),
(34, 'Flunisolide', '1362', 'Flunisolide is a medicine used to treat: allergic rhinitis', '25.jfif', 65, 6, 4),
(35, 'Isoetharine', '60', 'Isoetharine is a selective short-acting adrenoreceptor agonist. It could be called the \"adrenaline granddaughter\" in a line of agonists that gave quick relief from bronchospasm and asthma. Epinephrine was the first of those, then isoprenaline. Isoetharine was the third drug in this line, and thus the third generation or granddaughter of origin.', '26.jfif', 300, 6, 1.3),
(36, 'Theophylline', '6226', 'Theophylline or theophylline, also known as 3-dimethyl xanthine, belongs to methyl and is a drug used in the treatment of respiratory diseases such as chronic obstructive pulmonary disease and asthma.', '27.jfif', 65, 6, 4.5),
(37, 'Codeine', '900', 'Codeine or methylmorphine is an opioid that is used as a pain reliever, cough medicine, and anti-diarrhea. Codeine or 3-methylmorphine occurs naturally in the form of morphine and contains a methyl group.', '28.jfif', 150, 6, 3.6),
(38, 'Ipratropium', '1120', 'Ipratropium bromide is a medicine that relieves bronchospasm. It is an anticholinergic medicine used to treat chronic obstructive pulmonary disease and severe asthma. Ipratropium bromide blocks muscarinic acetylcholine receptors in the smooth muscle of the bronchi of the lungs, dilating the bronchi.', '29.jfif', 85, 6, 4.5),
(39, 'Methadone', '336', 'Methadone is a pain reliever that belongs to a group of treatments called opiates or narcotic treatments. It is used to treat moderate to severe pain, as it works by inhibiting pain receptors in the central nervous system.', '30.jfif', 75, 6, 1.6),
(40, 'aspirin', '160', 'Aspirin or salicylic acid is one of the best-known and most popular medications. It is used to treat symptoms of fever and rheumatic pain during the last century and is still a distinct treatment over its alternatives. It is also used to avoid the formation of clots that cause heart attacks.', '31.jfif', 350, 5, 4.7),
(41, 'Ultracet', '4553', 'This product is used to treat moderate to moderately severe pain. It contains 2 medications: tramadol and acetaminophen. Tramadol is similar to opioid analgesics. It works in the brain to change how your body feels and responds to pain. Acetaminophen is used to relieve pain, and it can also reduce a fever.', '32.jfif', 70, 5, 3.8),
(42, 'almotriptan', '4570', 'Almotriptan is a medicine used to treat migraine, and it belongs to the group of triptans, developed and produced by Almeral.', '33.jpg', 50, 5, 1.1),
(43, 'Eletriptan', '6100', 'Eletriptan is a drug in the group of triptans used to treat migraine headaches.', '34.jfif', 80, 5, 4),
(44, 'ergotamine', '5000', 'Ergotamine is an ergoline peptide and alkaloid from the family of rye spurs. Its structure and biological activity are similar to ergoline, it has a structure similar to some neurotransmitters, and it has biological activity and a vasoconstrictor effect. It is used therapeutically in the treatment of acute migraine attacks.', '35.jfif', 40, 5, 4.8),
(45, 'frovatriptan', '1330', 'Frovatriptan is a medicine in the group of triptans available under the trade name Fruva developed by Vernalis for the treatment of migraine headaches and the prevention of menstrual headaches. This drug is marketed by Endo Pharmaceuticals in North America and Menarini in Europe.', '36.jfif', 85, 5, 2.2),
(46, 'naratriptan', '1163', 'Naratriptan is a medicine in the group of triptans used to treat migraine headaches.', '37.jfif', 175, 5, 1.6),
(47, 'rizatriptan', '2080', 'Rizatriptan, sold under the brand name Maxalt among others, is a medication used to treat migraine headaches. It should be used as soon as the headache starts. It is taken orally. Common side effects include chest pain, dizziness, dry mouth, and numbness.', '38.jfif', 145, 5, 1.4),
(48, 'zolmitriptan', '368', 'Zolmitriptan is a medicine from the group of triptans used to treat migraine headaches.', '39.jfif', 165, 5, 2.2),
(49, 'celecoxib', '3040', 'Like rofecoxib, celecoxib is a non-steroidal anti-inflammatory drug in the family of COX-2 inhibitors. It is usually used in the treatment of rheumatic symptoms. Manufactured by Pfizer International.', '40.jfif', 135, 5, 2.1),
(50, 'Adderall', '1808', 'Adderall is the brand name for a stimulant. The drug consists of amphetamine and dextroamphetamine, which are believed to work by increasing the amount of dopamine released in the brain. Studies have reported that Adderall works widely to increase alertness, focus and overall cognitive performance, by decreasing the user\'s feeling of fatigue.', '41.jfif', 500, 4, 3.8),
(51, 'concerta', '912', 'Methylphenidate is a central nervous system stimulant of the substituted phenethylamine group. It is used to treat attention deficit hyperactivity disorder and narcolepsy. Methylphenidate has been studied with research for over 50 years and has been shown to have very good efficacy, safety, and track record for treating ADHD.', '42.jfif', 135, 4, 2.7),
(52, 'Nuvigil', '560', 'Armodafinil is a drug used to treat: hypersomnia, multiple sclerosis, narcolepsy', '43.jfif', 100, 4, 2),
(53, 'Ritalin', '1280', 'Methylphenidate is a central nervous system stimulant of the substituted phenethylamine group. It is used to treat attention deficit hyperactivity disorder and narcolepsy. Methylphenidate has been studied with research for over 50 years and has been shown to have very good efficacy, safety, and track record for treating ADHD.', '44.jfif', 180, 4, 2.2),
(54, 'provigil', '432', 'Modafinil is a stimulant drug. It has been approved by the United States Food and Drug Administration for the treatment of narcolepsy, shift in sleep disturbances, and excessive daytime sleepiness associated with obstructive sleep apnea.', '45.jfif', 500, 4, 5),
(55, 'Focalin', '1920', 'Dexmethylphenidate, sold under the trade name Focalin among others, is a drug used to treat attention deficit hyperactivity disorder (ADHD) in people older than 5 years of age. If no benefit is seen after 4 weeks it is reasonable to discontinue its use. It is given orally.', '46.jfif', 400, 4, 3.4),
(56, 'Dexedrine', '3300', 'system stimulant, a mirror isomer of amphetamine, which is used in the treatment of attention deficit hyperactivity disorder and narcolepsy, as well as as an aphrodisiac and mood enhancer. ', '47.jfif', 400, 4, 2.2),
(57, 'Desoxyn', '2080', 'Methamphetamine is a very potent central nervous system stimulant that belongs primarily to recreational drugs and is used to a lesser extent in second-line treatments for ADHD and in cases of obesity. Methamphetamine was discovered in 1893 in the form of two mirror forms: levo-methamphetamine and dextro-methamphetamine.', '48.jfif', 360, 4, 1.7),
(58, 'Methylin', '480', 'Methylphenidate is a central nervous system stimulant of the substituted phenethylamine group. It is used to treat attention deficit hyperactivity disorder and narcolepsy.', '49.jfif', 500, 4, 5),
(59, 'Phentercot', '240', 'Phentermine is a drug used for weight loss.', '50.jfif', 500, 4, 3.7);

-- --------------------------------------------------------

--
-- Table structure for table `product_categories`
--

DROP TABLE IF EXISTS `product_categories`;
CREATE TABLE IF NOT EXISTS `product_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_categories`
--

INSERT INTO `product_categories` (`id`, `name`) VALUES
(2, 'Cardiovascular system'),
(3, 'gastrointestinal tract'),
(4, 'CNS'),
(5, 'analgesics'),
(6, 'Respiratory system');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `product_categories` FOREIGN KEY (`cat_id`) REFERENCES `product_categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
