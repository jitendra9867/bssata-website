-- ============================================================
-- Brahmana Seva Samiti (Regd No: 48/97) - Database Schema
-- Portal Database: bss_portal
-- ============================================================
 
-- ------------------------------------------------------------
-- 1. Life Members Table
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS life_members (
  sl_no            INT AUTO_INCREMENT PRIMARY KEY,
  r_no             INT UNIQUE NOT NULL,
  enrollment_date  DATE NULL,
  fullname         VARCHAR(255) NOT NULL,
  address          TEXT,
  gotram           VARCHAR(100) NOT NULL,
  phone_no         VARCHAR(20) NOT NULL,
  created_at       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at       TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------
-- 2. Executive Committee Table
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS executive_committee (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  designation   VARCHAR(100) NOT NULL,
  member_name   VARCHAR(255) NOT NULL,
  phone_no      VARCHAR(20) NOT NULL,
  display_order INT DEFAULT 0,
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------
-- 3. Welfare Schemes Table
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS welfare_schemes (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  scheme_name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  display_order INT DEFAULT 0,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- SEED DATA
-- ============================================================

-- Executive Committee Members
INSERT INTO executive_committee (designation, member_name, phone_no, display_order) VALUES
  ('President',                  'Sri Pispati Lakshmi Kantharao',          '93472 59787', 1),
  ('Honorable President',        'Sri Dendukuri Narayana Murthy',           '98493 11140', 2),
  ('Treasurer',                  'Sri Susarla Venkata Ramana',              '92905 15564', 3),
  ('Executive President',        'Sri Vankamamidi Venkataramayya',          '98663 37559', 4),
  ('Secretary',                  'Sri Pamidighantam Venkata Satyanarayana', '78939 61234', 5);

-- Sample Life Members
INSERT INTO life_members (r_no, enrollment_date, fullname, address, gotram, phone_no) VALUES
  (71,  '2018-06-15', 'Sristi Subrahmanyam',                   'Guntur, Andhra Pradesh', 'Harithasa',    '9704382135'),
  (111, '2019-03-22', 'Pothukuchi Venkata Bhavannnarayana',    'Guntur, Andhra Pradesh', 'Harithasa',    '9848379284'),
  (128, '2020-01-10', 'Kota Jaya Sankaram',                     'Guntur, Andhra Pradesh', 'Koundinyasa',  '8555022395');

-- Welfare Schemes
INSERT INTO welfare_schemes (scheme_name, description, display_order) VALUES
  ('Karthika Samaradhana',          'Annual community feast and gatherings during the holy month of Karthika.', 1),
  ('Panchangam Distribution',       'Distribution of Traditional Calendars (Panchangam) to all members and community households.', 2),
  ('Free Mass Upanayanams',         'Sacred thread ceremonies conducted free of cost for underprivileged Brahmin youth.', 3),
  ('Aabdheekam Services',           'Execution of ancestral rites preservation services for families in need.', 4),
  ('Sandhyavandanam & Mantra Classes', 'Structured classes for Sandhyavandanam, Mantra Pushpam, and Rudram for all age groups.', 5),
  ('Jhandhyam Distribution',        'Distribution of Sacred Threads (Jhandhyam) on Jeenala Pournami to eligible members.', 6),
  ('Life Certificate Desk',         'Provision of Life Certificate validation desk for Central/State pensioners (Jan, Feb, Nov, Dec).', 7),
  ('Legal Cell',                    'Legal Cell assistance providing low-cost legal advice to community members.', 8),
  ('Sri Vidyanidhi Scheme',         'Educational financial assistance for verified Brahmin students pursuing higher education.', 9),
  ('Life Membership Enrollment',    'Life Membership Enrollment Scheme with INR 1,001 entry threshold for permanent membership.', 10),
  ('Arama Kshetram Maintenance',    'Comprehensive infrastructure and maintenance for final rites management facilities.', 11),
  ('Ugadi Cultural Celebrations',   'Panchanga Sravanam and honors distribution during Ugadi cultural celebrations.', 12);
