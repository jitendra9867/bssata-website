<?php
/**
 * Plugin Name: BSSATA Headless Content Model
 * Description: CPTs + ACF admin UI + client-friendly Program Page Builder (repeatable highlight/step/fact editors + media-library gallery uploader — no JSON editing) + direct WPGraphQL field exposure for the headless bssata.org frontend. Requires WPGraphQL; ACF optional (admin UI only).
 * Version:     2.0.0
 * Author:      BSSATA Dev
 */

if (!defined('ABSPATH')) exit;

/* ═══════════════════════════════════════════════════════════════
   1. CUSTOM POST TYPES
   ═══════════════════════════════════════════════════════════════ */

add_action('init', function () {

	$cpts = array(
		'committee_member' => array('Committee Members', 'Committee Member', 'dashicons-groups', 'CommitteeMember', 'committeeMembers'),
		'timeline_event'   => array('Timeline Events', 'Timeline Event', 'dashicons-backup', 'TimelineEvent', 'timelineEvents'),
		'program'          => array('Programs', 'Program', 'dashicons-megaphone', 'Program', 'programs'),
		'program_event'    => array('Program Events', 'Program Event', 'dashicons-calendar-alt', 'ProgramEvent', 'programEvents'),
		'welfare_scheme'   => array('Welfare Schemes', 'Welfare Scheme', 'dashicons-heart', 'WelfareScheme', 'welfareSchemes'),
		'site_highlight'   => array('Site Highlights', 'Site Highlight', 'dashicons-star-filled', 'SiteHighlight', 'siteHighlights'),
		'testimonial'      => array('Testimonials', 'Testimonial', 'dashicons-format-quote', 'Testimonial', 'testimonials'),
		'donor_honor'      => array('Donor Honors', 'Donor Honor', 'dashicons-awards', 'DonorHonor', 'donorHonors'),
		'jandhyala_center' => array('Jandhyala Centers', 'Jandhyala Center', 'dashicons-location', 'JandhyalaCenter', 'jandhyalaCenters'),
		'bala_goseva_donor' => array('Bala Goseva Donors', 'Bala Goseva Donor', 'dashicons-smiley', 'BalaGosevaDonor', 'balaGosevaDonors'),
		'sampradaya_calendar' => array('Sampradaya Calendars', 'Sampradaya Calendar', 'dashicons-media-spreadsheet', 'SampradayaCalendar', 'sampradayaCalendars'),
		'slider_slide'     => array('Slider Slides', 'Slider Slide', 'dashicons-images-alt2', 'SliderSlide', 'sliderSlides'),
		'life_member'      => array('Life Members', 'Life Member', 'dashicons-admin-users', 'LifeMember', 'lifeMembers'),
	);

	foreach ($cpts as $slug => $a) {
		register_post_type($slug, array(
			'labels' => array('name' => $a[0], 'singular_name' => $a[1], 'add_new_item' => 'Add ' . $a[1]),
			'public' => true,
			'rewrite' => false,
			'show_in_rest' => true,
			'supports' => array('title', 'editor', 'thumbnail', 'page-attributes', 'custom-fields'),
			'has_archive' => false,
			'menu_icon' => $a[2],
			'show_in_graphql' => true,
			'graphql_single_name' => $a[3],
			'graphql_plural_name' => $a[4],
		));
	}
}, 5);

/* ═══════════════════════════════════════════════════════════════
   2. META REGISTRY
   meta_key => [graphql field name, type]
   JSON_* fields hold JSON text; structured GraphQL types below.
   NOTE: for `program`, the JSON meta is still the storage format —
   it is now edited through the friendly Page Builder metabox
   (section 6), NOT through raw JSON textareas.
   ═══════════════════════════════════════════════════════════════ */

function bssata_meta_map() {
	return array(
		'committee_member' => array(
			'designation' => array('designation', 'String'),
			'phone'       => array('phone', 'String'),
			'category'    => array('category', 'String'),
		),
		'timeline_event' => array(
			'event_year' => array('eventYear', 'String'),
			'event_date' => array('eventDate', 'String'),
			'description' => array('description', 'String'),
			'impact_tag' => array('impactTag', 'String'),
		),
		'program' => array(
			'tagline'       => array('tagline', 'String'),
			'description'   => array('description', 'String'),
			'icon'          => array('icon', 'String'),
			'highlights_json' => array('highlightsJson', 'String'),
			'how_json'        => array('howJson', 'String'),
			'overview_json'   => array('overviewJson', 'String'),
			'gallery_json'    => array('galleryJson', 'String'),
		),
		'program_event' => array(
			'program_slug' => array('programSlug', 'String'),
			'event_year'   => array('eventYear', 'String'),
			'event_date'   => array('eventDate', 'String'),
			'detail'       => array('detail', 'String'),
		),
		'welfare_scheme' => array(
			'description' => array('description', 'String'),
			'icon'        => array('icon', 'String'),
			'category'    => array('category', 'String'),
			'status'      => array('status', 'String'),
			'link'        => array('link', 'String'),
		),
		'site_highlight' => array(
			'event_year' => array('eventYear', 'String'),
			'category'   => array('category', 'String'),
			'icon'       => array('icon', 'String'),
		),
		'testimonial' => array(
			'role'  => array('role', 'String'),
			'quote' => array('quote', 'String'),
			'icon'  => array('icon', 'String'),
		),
		'donor_honor' => array(
			'honor_year'   => array('honorYear', 'String'),
			'contribution' => array('contribution', 'String'),
			'honor_type'   => array('honorType', 'String'),
		),
		'jandhyala_center' => array(
			'location' => array('location', 'String'),
			'contact'  => array('contact', 'String'),
			'phone'    => array('phone', 'String'),
			'qty'      => array('qty', 'String'),
		),
		'bala_goseva_donor' => array(
			'donor_class' => array('donorClass', 'String'),
			'amount'      => array('amount', 'String'),
		),
		'sampradaya_calendar' => array(
			'cal_year'    => array('calYear', 'String'),
			'samvat'      => array('samvat', 'String'),
			'cal_description' => array('calDescription', 'String'),
			'copy_count'  => array('copyCount', 'String'),
			'is_latest'   => array('isLatest', 'String'),
		),
		'slider_slide' => array(
			'subtitle'    => array('subtitle', 'String'),
			'cta_label'   => array('ctaLabel', 'String'),
			'cta_href'    => array('ctaHref', 'String'),
			'sort_order'  => array('sortOrder', 'String'),
		),
		'life_member' => array(
			'r_no'     => array('rNo', 'String'),
			'gotram'   => array('gotram', 'String'),
			'address'  => array('address', 'String'),
			'phone_no' => array('phoneNo', 'String'),
		),
	);
}

add_action('init', function () {
	foreach (bssata_meta_map() as $cpt => $fields) {
		foreach ($fields as $meta_key => $conf) {
			register_post_meta($cpt, $meta_key, array(
				'type' => 'string',
				'single' => true,
				'show_in_rest' => true,
				'default' => '',
			));
		}
	}
});

/* ═══════════════════════════════════════════════════════════════
   3. GRAPHQL
   ═══════════════════════════════════════════════════════════════ */

add_action('graphql_register_types', function () {
	if (!function_exists('register_graphql_field')) return;

	/* flat meta fields */
	foreach (bssata_meta_map() as $cpt => $fields) {
		$graphql_type = null;
		foreach ((array) get_post_types(array('show_in_graphql' => true), 'objects') as $pt) {
			if ($pt->name === $cpt) { $graphql_type = $pt->graphql_single_name; break; }
		}
		if (!$graphql_type) continue;

		foreach ($fields as $meta_key => $conf) {
			register_graphql_field($graphql_type, $conf[0], array(
				'type' => $conf[1],
				'description' => ucfirst(str_replace('_', ' ', $meta_key)),
				'resolve' => function (\WPGraphQL\Model\Post $post) use ($meta_key) {
					return (string) get_post_meta($post->databaseId, $meta_key, true);
				},
			));
		}
	}

	/* program.gallery → structured list from gallery_json (media IDs) */
	register_graphql_object_type('GalleryImage', array(
		'fields' => array(
			'mediaId' => array('type' => 'Int'),
			'src'     => array('type' => 'String'),
			'alt'     => array('type' => 'String'),
			'year'    => array('type' => 'String'),
		),
	));
	register_graphql_field('Program', 'gallery', array(
		'type' => array('list_of' => 'GalleryImage'),
		'description' => 'Program photo gallery resolved from media library IDs in gallery_json',
		'resolve' => function (\WPGraphQL\Model\Post $post) {
			$raw = (string) get_post_meta($post->databaseId, 'gallery_json', true);
			if ($raw === '') return array();
			$items = json_decode($raw, true);
			if (!is_array($items)) return array();
			$out = array();
			foreach ($items as $item) {
				$id = isset($item['mediaId']) ? (int) $item['mediaId'] : (is_numeric($item) ? (int) $item : 0);
				if (!$id) continue;
				$src = wp_get_attachment_url($id);
				if (!$src) continue;
				$out[] = array(
					'mediaId' => $id,
					'src'     => $src,
					'alt'     => (string) get_post_meta($id, '_wp_attachment_image_alt', true),
					'year'    => isset($item['year']) ? (string) $item['year'] : '',
				);
			}
			return $out;
		},
	));

	/* ---- Site Settings (root query) ---- */
	register_graphql_object_type('BankAccount', array(
		'fields' => array(
			'bankName'      => array('type' => 'String'),
			'accountNumber' => array('type' => 'String'),
			'ifscCode'      => array('type' => 'String'),
			'branch'        => array('type' => 'String'),
		),
	));

	register_graphql_object_type('SiteSettings', array(
		'fields' => array(
			'organizationName'       => array('type' => 'String'),
			'regNo'                  => array('type' => 'String'),
			'tagline'                => array('type' => 'String'),
			'address'                => array('type' => 'String'),
			'officeAddress'          => array('type' => 'String'),
			'email'                  => array('type' => 'String'),
			'phone'                  => array('type' => 'String'),
			'website'                => array('type' => 'String'),
			'twelveACertificateText' => array('type' => 'String'),
			'bankAccounts'           => array('type' => array('list_of' => 'BankAccount')),
			'gotrams'                => array('type' => array('list_of' => 'String')),
		),
	));

	register_graphql_field('RootQuery', 'siteSettings', array(
		'type' => 'SiteSettings',
		'description' => 'Site-wide settings (bank details, address, contacts, 12A text, gotrams)',
		'resolve' => function () {
			$opt = function ($key) { return (string) get_option('options_' . $key, ''); };

			$banks = array();
			foreach (preg_split('/\r\n|\r|\n/', $opt('bank_accounts')) as $line) {
				$line = trim($line);
				if ($line === '') continue;
				$p = array_pad(array_map('trim', explode('|', $line)), 4, '');
				$banks[] = array(
					'bankName'      => $p[0],
					'accountNumber' => $p[1],
					'ifscCode'      => $p[2],
					'branch'        => $p[3],
				);
			}

			$gotrams = array_values(array_filter(array_map('trim', preg_split('/\r\n|\r|\n|,/', $opt('gotrams')))));

			return array(
				'organizationName'       => $opt('organization_name'),
				'regNo'                  => $opt('reg_no'),
				'tagline'                => $opt('tagline'),
				'address'                => $opt('address'),
				'officeAddress'          => $opt('office_address'),
				'email'                  => $opt('email'),
				'phone'                  => $opt('phone'),
				'website'                => $opt('website'),
				'twelveACertificateText' => $opt('twelve_a_certificate_text'),
				'bankAccounts'           => $banks,
				'gotrams'                => $gotrams,
			);
		},
	));
});

/* ═══════════════════════════════════════════════════════════════
   4. ACF ADMIN UI (editing forms; values are plain meta/options)
   Program JSON content is NOT exposed here any more — it is edited
   through the Page Builder metabox (section 6).
   ═══════════════════════════════════════════════════════════════ */

add_action('acf/init', function () {
	if (!function_exists('acf_add_local_field_group')) return;

	if (function_exists('acf_add_options_page')) {
		acf_add_options_page(array(
			'page_title' => 'Site Settings',
			'menu_title' => 'Site Settings',
			'menu_slug'  => 'site-settings',
			'capability' => 'manage_options',
			'position'   => '2.1',
			'icon_url'   => 'dashicons-bank',
		));
	}

	$f = function ($key, $label, $name, $type, $extra = array()) {
		return array_merge(array('key' => $key, 'label' => $label, 'name' => $name, 'type' => $type), $extra);
	};

	acf_add_local_field_group(array(
		'key' => 'g_committee', 'title' => 'Committee Fields',
		'location' => array(array(array('param' => 'post_type', 'operator' => '==', 'value' => 'committee_member'))),
		'fields' => array(
			$f('f_cm_d', 'Designation', 'designation', 'text', array('required' => 1)),
			$f('f_cm_p', 'Phone', 'phone', 'text'),
			$f('f_cm_c', 'Category', 'category', 'select', array('choices' => array(
				'leadership' => 'Core Leadership', 'executive' => 'Executive Committee',
				'members' => 'Committee Members', 'advisors' => 'Advisors',
				'abroad' => 'UK / Abroad Coordinators'), 'default_value' => 'members')),
		),
	));

	acf_add_local_field_group(array(
		'key' => 'g_timeline', 'title' => 'Timeline Fields',
		'location' => array(array(array('param' => 'post_type', 'operator' => '==', 'value' => 'timeline_event'))),
		'fields' => array(
			$f('f_tl_y', 'Year', 'event_year', 'text', array('required' => 1)),
			$f('f_tl_d', 'Date', 'event_date', 'text', array('instructions' => 'e.g. "July" or "January 25"')),
			$f('f_tl_de', 'Description', 'description', 'textarea'),
			$f('f_tl_t', 'Impact Tag', 'impact_tag', 'text', array('instructions' => 'Short tag or emoji, e.g. 🏗️')),
		),
	));

	/* Program basic fields only — Highlights / Steps / Overview / Gallery
	   are managed in the "Program Page Builder" box below the editor. */
	acf_add_local_field_group(array(
		'key' => 'g_program', 'title' => 'Program Fields',
		'location' => array(array(array('param' => 'post_type', 'operator' => '==', 'value' => 'program'))),
		'fields' => array(
			$f('f_pg_t', 'Tagline', 'tagline', 'text', array('instructions' => 'One-line summary shown under the program title on the website.')),
			$f('f_pg_d', 'Description', 'description', 'textarea', array('instructions' => 'The "About this Program" paragraph on the website.')),
			$f('f_pg_i', 'Icon (emoji)', 'icon', 'text', array('default_value' => '🙏')),
		),
	));

	acf_add_local_field_group(array(
		'key' => 'g_program_event', 'title' => 'Program Event Fields',
		'location' => array(array(array('param' => 'post_type', 'operator' => '==', 'value' => 'program_event'))),
		'fields' => array(
			$f('f_pe_slug', 'Program Slug', 'program_slug', 'text', array('required' => 1, 'instructions' => 'e.g. karthika-samaradhana')),
			$f('f_pe_y', 'Year', 'event_year', 'text', array('required' => 1)),
			$f('f_pe_d', 'Date', 'event_date', 'text'),
			$f('f_pe_det', 'Detail', 'detail', 'textarea'),
		),
	));

	acf_add_local_field_group(array(
		'key' => 'g_scheme', 'title' => 'Scheme Fields',
		'location' => array(array(array('param' => 'post_type', 'operator' => '==', 'value' => 'welfare_scheme'))),
		'fields' => array(
			$f('f_sc_d', 'Description', 'description', 'textarea', array('required' => 1)),
			$f('f_sc_i', 'Icon (emoji)', 'icon', 'text', array('default_value' => '🎗️')),
			$f('f_sc_c', 'Category', 'category', 'select', array('choices' => array(
				'Cultural' => 'Cultural', 'Religious' => 'Religious', 'Education' => 'Education',
				'Service' => 'Service', 'Distribution' => 'Distribution',
				'Infrastructure' => 'Infrastructure', 'Membership' => 'Membership'),
				'default_value' => 'Service')),
			$f('f_sc_s', 'Status', 'status', 'select', array('choices' => array(
				'Active' => 'Active', 'Upcoming' => 'Upcoming', 'Completed' => 'Completed'),
				'default_value' => 'Active')),
			$f('f_sc_l', 'Link', 'link', 'text', array('instructions' => 'Internal path e.g. /programs/ugadi')),
		),
	));

	acf_add_local_field_group(array(
		'key' => 'g_highlight', 'title' => 'Highlight Fields',
		'location' => array(array(array('param' => 'post_type', 'operator' => '==', 'value' => 'site_highlight'))),
		'fields' => array(
			$f('f_hl_y', 'Year', 'event_year', 'text', array('required' => 1)),
			$f('f_hl_c', 'Category', 'category', 'text'),
			$f('f_hl_i', 'Icon (emoji)', 'icon', 'text', array('default_value' => '✨')),
		),
	));

	acf_add_local_field_group(array(
		'key' => 'g_testimonial', 'title' => 'Testimonial Fields',
		'location' => array(array(array('param' => 'post_type', 'operator' => '==', 'value' => 'testimonial'))),
		'fields' => array(
			$f('f_ts_r', 'Role', 'role', 'text'),
			$f('f_ts_q', 'Quote', 'quote', 'textarea', array('required' => 1)),
			$f('f_ts_i', 'Icon (emoji)', 'icon', 'text', array('default_value' => '🙏')),
		),
	));

	acf_add_local_field_group(array(
		'key' => 'g_donor', 'title' => 'Donor Fields',
		'location' => array(array(array('param' => 'post_type', 'operator' => '==', 'value' => 'donor_honor'))),
		'fields' => array(
			$f('f_dn_y', 'Year', 'honor_year', 'text', array('required' => 1)),
			$f('f_dn_c', 'Contribution', 'contribution', 'textarea'),
			$f('f_dn_t', 'Honor Type', 'honor_type', 'select', array('choices' => array(
				'visista-vyakthi' => 'Visista Vyakthi (distinguished person)',
				'visista-data' => 'Visista Data (distinguished donor)'),
				'default_value' => 'visista-vyakthi')),
		),
	));

	acf_add_local_field_group(array(
		'key' => 'g_center', 'title' => 'Jandhyala Center Fields',
		'location' => array(array(array('param' => 'post_type', 'operator' => '==', 'value' => 'jandhyala_center'))),
		'fields' => array(
			$f('f_jc_l', 'Location', 'location', 'textarea', array('required' => 1)),
			$f('f_jc_c', 'Contact Person', 'contact', 'text'),
			$f('f_jc_p', 'Phone', 'phone', 'text'),
			$f('f_jc_q', 'Quantity', 'qty', 'text'),
		),
	));

	acf_add_local_field_group(array(
		'key' => 'g_bala', 'title' => 'Bala Goseva Donor Fields',
		'location' => array(array(array('param' => 'post_type', 'operator' => '==', 'value' => 'bala_goseva_donor'))),
		'fields' => array(
			$f('f_bg_c', 'Class / Detail', 'donor_class', 'text', array('required' => 1)),
			$f('f_bg_a', 'Amount', 'amount', 'text', array('required' => 1)),
		),
	));

	acf_add_local_field_group(array(
		'key' => 'g_cal', 'title' => 'Sampradaya Calendar Fields',
		'location' => array(array(array('param' => 'post_type', 'operator' => '==', 'value' => 'sampradaya_calendar'))),
		'fields' => array(
			$f('f_ca_y', 'Year', 'cal_year', 'text', array('required' => 1)),
			$f('f_ca_s', 'Samvat', 'samvat', 'text'),
			$f('f_ca_d', 'Description', 'cal_description', 'textarea'),
			$f('f_ca_c', 'Copies', 'copy_count', 'text', array('default_value' => '3000+')),
			$f('f_ca_l', 'Is Latest', 'is_latest', 'select', array('choices' => array('yes' => 'Yes', 'no' => 'No'), 'default_value' => 'no')),
		),
	));

	acf_add_local_field_group(array(
		'key' => 'g_slide', 'title' => 'Slider Slide Fields',
		'location' => array(array(array('param' => 'post_type', 'operator' => '==', 'value' => 'slider_slide'))),
		'fields' => array(
			$f('f_sl_s', 'Subtitle', 'subtitle', 'text'),
			$f('f_sl_cl', 'CTA Label', 'cta_label', 'text'),
			$f('f_sl_ch', 'CTA Link', 'cta_href', 'text'),
			$f('f_sl_so', 'Sort Order', 'sort_order', 'text'),
		),
	));

	acf_add_local_field_group(array(
		'key' => 'g_life', 'title' => 'Life Member Fields',
		'location' => array(array(array('param' => 'post_type', 'operator' => '==', 'value' => 'life_member'))),
		'fields' => array(
			$f('f_lm_r', 'Registration No', 'r_no', 'text', array('required' => 1)),
			$f('f_lm_g', 'Gotram', 'gotram', 'text'),
			$f('f_lm_a', 'Address', 'address', 'textarea'),
			$f('f_lm_p', 'Phone', 'phone_no', 'text'),
		),
	));

	acf_add_local_field_group(array(
		'key' => 'g_settings', 'title' => 'Site Settings Fields',
		'location' => array(array(array('param' => 'options_page', 'operator' => '==', 'value' => 'site-settings'))),
		'fields' => array(
			$f('f_ss_org', 'Organization Name', 'organization_name', 'text'),
			$f('f_ss_reg', 'Registration No', 'reg_no', 'text'),
			$f('f_ss_tag', 'Tagline', 'tagline', 'text'),
			$f('f_ss_addr', 'Address (main office)', 'address', 'textarea'),
			$f('f_ss_off', 'Office Address (secondary)', 'office_address', 'textarea'),
			$f('f_ss_em', 'Email', 'email', 'email'),
			$f('f_ss_ph', 'Phone', 'phone', 'text'),
			$f('f_ss_web', 'Website', 'website', 'text'),
			$f('f_ss_12a', '12A Certificate Text', 'twelve_a_certificate_text', 'textarea'),
			$f('f_ss_bank', 'Bank Accounts', 'bank_accounts', 'textarea',
				array('instructions' => 'One account per line: Bank Name | Account Number | IFSC Code | Branch')),
			$f('f_ss_got', 'Gotrams', 'gotrams', 'textarea',
				array('instructions' => 'One gotram per line (or comma separated) for the members directory filter')),
		),
	));
});

/* ═══════════════════════════════════════════════════════════════
   5. PROGRAM PAGE BUILDER — client-friendly editing (no JSON!)
   Storage keys are unchanged (highlights_json, how_json,
   overview_json, gallery_json) so GraphQL + the Next.js frontend
   keep working without any change.
   ═══════════════════════════════════════════════════════════════ */

add_action('add_meta_boxes', function () {
	add_meta_box('bssata_program_builder', '🧩 Program Page Builder', 'bssata_program_builder_render', 'program', 'normal', 'high');
});

function bssata_program_builder_render($post) {
	wp_nonce_field('bssata_program_builder', 'bssata_program_builder_nonce');

	$highlights = (string) get_post_meta($post->ID, 'highlights_json', true);
	$how        = (string) get_post_meta($post->ID, 'how_json', true);
	$overview   = (string) get_post_meta($post->ID, 'overview_json', true);
	$gallery    = (string) get_post_meta($post->ID, 'gallery_json', true);

	$has_overview = trim($overview) !== '';
	?>
	<style>
		.bss-builder { font-size: 13px; }
		.bss-builder .bss-section { border: 1px solid #dcdcde; border-radius: 8px; margin: 0 0 14px; background: #fff; }
		.bss-builder .bss-section > h3 { margin: 0; padding: 10px 14px; border-bottom: 1px solid #f0f0f1; font-size: 14px; background: #f6f7f7; border-radius: 8px 8px 0 0; }
		.bss-builder .bss-section > h3 .bss-help { display: block; font-weight: 400; color: #646970; font-size: 12px; margin-top: 2px; }
		.bss-builder .bss-section-body { padding: 12px 14px; }
		.bss-builder .bss-row { display: flex; gap: 8px; align-items: flex-start; padding: 8px; border: 1px solid #e2e4e7; border-radius: 6px; margin-bottom: 8px; background: #fbfbfc; }
		.bss-builder .bss-field { flex: 1; }
		.bss-builder .bss-field.bss-w-narrow { flex: 0 0 70px; }
		.bss-builder .bss-field.bss-w-mid { flex: 0 0 220px; }
		.bss-builder .bss-input { width: 100%; }
		.bss-builder .bss-controls { display: flex; gap: 4px; flex: 0 0 auto; }
		.bss-builder .bss-btn { cursor: pointer; border: 1px solid #c3c4c7; border-radius: 4px; background: #fff; padding: 0 8px; line-height: 26px; height: 28px; }
		.bss-builder .bss-btn:hover { background: #f0f0f1; }
		.bss-builder .bss-btn-danger { color: #b32d2e; border-color: #b32d2e33; }
		.bss-builder .bss-add { margin: 2px 0 4px; }
		.bss-builder .bss-empty { color: #646970; font-style: italic; padding: 6px 0; }
		.bss-builder .bss-ggrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
		.bss-builder .bss-gcard { border: 1px solid #e2e4e7; border-radius: 6px; background: #fbfbfc; padding: 8px; text-align: center; }
		.bss-builder .bss-gthumb { width: 100%; height: 90px; object-fit: cover; border-radius: 4px; background: #f0f0f1; display: block; }
		.bss-builder .bss-gname { font-size: 11px; color: #646970; margin: 6px 0 4px; word-break: break-all; }
		.bss-builder .bss-gyear { width: 100%; margin-bottom: 6px; }
		.bss-builder .bss-gactions { display: flex; gap: 4px; justify-content: center; }
		.bss-builder .bss-sub { font-weight: 600; margin: 10px 0 6px; }
		.bss-builder .bss-toggle-row { display: flex; align-items: center; gap: 8px; }
		.bss-builder .bss-venue { border-top: 1px dashed #dcdcde; margin-top: 12px; padding-top: 10px; }
	</style>

	<div class="bss-builder" id="bss-builder-root">
		<input type="hidden" name="bss_highlights_json" id="bss_highlights_json" value="<?php echo esc_attr($highlights); ?>">
		<input type="hidden" name="bss_how_json" id="bss_how_json" value="<?php echo esc_attr($how); ?>">
		<input type="hidden" name="bss_overview_json" id="bss_overview_json" value="<?php echo esc_attr($overview); ?>">
		<input type="hidden" name="bss_gallery_json" id="bss_gallery_json" value="<?php echo esc_attr($gallery); ?>">

		<!-- HIGHLIGHTS -->
		<div class="bss-section">
			<h3>⭐ Program Highlights
				<span class="bss-help">The colored cards shown on the program page. Each card: an emoji, a short title and one or two lines of text. Use ↑ ↓ to reorder.</span>
			</h3>
			<div class="bss-section-body">
				<div class="bss-rows" data-store="bss_highlights_json" data-kind="highlights"></div>
				<button type="button" class="button bss-add" data-target="bss_highlights_json">+ Add Highlight</button>
			</div>
		</div>

		<!-- HOW TO PARTICIPATE -->
		<div class="bss-section">
			<h3>📝 How to Participate (steps)
				<span class="bss-help">Numbered steps shown on the program page. One step per row — keep each step a single friendly sentence.</span>
			</h3>
			<div class="bss-section-body">
				<div class="bss-rows" data-store="bss_how_json" data-kind="steps"></div>
				<button type="button" class="button bss-add" data-target="bss_how_json">+ Add Step</button>
			</div>
		</div>

		<!-- OVERVIEW -->
		<div class="bss-section">
			<h3>📄 Overview Section (optional)
				<span class="bss-help">A rich introduction with paragraphs, rituals, facts and venue. Only enable this for programs that use it (e.g. Karthika Samaradhana).</span>
			</h3>
			<div class="bss-section-body">
				<div class="bss-toggle-row">
					<label><input type="checkbox" id="bss_overview_enabled" <?php checked($has_overview); ?>> Enable the Overview section on the website</label>
				</div>
				<div id="bss_overview_fields" <?php if (!$has_overview) echo 'style="display:none"'; ?>>
					<div style="display:flex; gap:10px; margin:10px 0;">
						<div class="bss-field"><label>Eyebrow (small text above title)</label><input type="text" class="bss-input" id="bss_ov_eyebrow" placeholder="Since 1996"></div>
						<div class="bss-field"><label>Overview Title</label><input type="text" class="bss-input" id="bss_ov_title" placeholder="A Tradition of Devotion &amp; Community Feast"></div>
					</div>
					<div class="bss-sub">Paragraphs</div>
					<div class="bss-rows" data-store="__ov_paragraphs" data-kind="paragraphs"></div>
					<button type="button" class="button bss-add" data-target="__ov_paragraphs">+ Add Paragraph</button>

					<div class="bss-sub">Rituals / Programme Includes (emoji + name)</div>
					<div class="bss-rows" data-store="__ov_rituals" data-kind="rituals"></div>
					<button type="button" class="button bss-add" data-target="__ov_rituals">+ Add Ritual</button>

					<div class="bss-sub">Fact Cards</div>
					<div class="bss-rows" data-store="__ov_facts" data-kind="facts"></div>
					<button type="button" class="button bss-add" data-target="__ov_facts">+ Add Fact</button>

					<div class="bss-venue">
						<div class="bss-sub">Venue (optional)</div>
						<div style="display:flex; gap:10px; margin-bottom:8px;">
							<div class="bss-field"><label>Venue Label</label><input type="text" class="bss-input" id="bss_venue_label" placeholder="Venue for the last several years"></div>
							<div class="bss-field"><label>Venue Name</label><input type="text" class="bss-input" id="bss_venue_name" placeholder="Central Public School"></div>
						</div>
						<div class="bss-field"><label>Venue Address</label><input type="text" class="bss-input" id="bss_venue_address" placeholder="4th Line, near Mahatma Gandhi College, A.T. Agraharam, Guntur."></div>
					</div>
				</div>
			</div>
		</div>

		<!-- GALLERY -->
		<div class="bss-section">
			<h3>🖼️ Photo Gallery
				<span class="bss-help">Upload or pick photos from the Media Library, set an optional Year per photo (photos are grouped by year on the website), and reorder with ↑ ↓. Alt text comes from the Media Library — set it when uploading.</span>
			</h3>
			<div class="bss-section-body">
				<button type="button" class="button button-primary" id="bss_gallery_add">+ Add Gallery Images</button>
				<span id="bss_gallery_count" style="margin-left:10px;color:#646970;"></span>
				<div style="height:10px;"></div>
				<div class="bss-ggrid" id="bss_gallery_grid"></div>
				<p class="bss-empty" id="bss_gallery_empty" style="display:none;">No photos yet — click “Add Gallery Images” to upload from your computer or pick from the Media Library.</p>
			</div>
		</div>
	</div>

	<script>
	(function () {
		var root = document.getElementById('bss-builder-root');
		if (!root || window.__bssBuilderInit) return;
		window.__bssBuilderInit = true;

		function byId(id) { return document.getElementById(id); }
		function all(sel, el) { return Array.prototype.slice.call((el || root).querySelectorAll(sel)); }
		function parse(id) {
			var v = (byId(id) ? byId(id).value : '').trim();
			if (!v) return null;
			try { return JSON.parse(v); } catch (e) { return null; }
		}
		function store(id, obj) { if (byId(id)) byId(id).value = JSON.stringify(obj); }

		/* ---------- generic repeater rows ---------- */
		function makeInput(field, value) {
			var inp;
			if (field.type === 'textarea') { inp = document.createElement('textarea'); inp.rows = field.rows || 2; }
			else { inp = document.createElement('input'); inp.type = 'text'; }
			inp.className = 'bss-input';
			inp.placeholder = field.placeholder || '';
			inp.dataset.key = field.key;
			inp.value = value != null ? value : '';
			return inp;
		}

		function makeRow(fields, item, list, storeId, kind) {
			var row = document.createElement('div');
			row.className = 'bss-row';
			fields.forEach(function (f) {
				var w = document.createElement('div');
				w.className = 'bss-field' + (f.w === 'narrow' ? ' bss-w-narrow' : f.w === 'mid' ? ' bss-w-mid' : '');
				if (f.label) { var l = document.createElement('label'); l.textContent = f.label; w.appendChild(l); }
				w.appendChild(makeInput(f, item[f.key]));
				row.appendChild(w);
			});
			var ctrl = document.createElement('div');
			ctrl.className = 'bss-controls';
			function btn(txt, cls, fn) {
				var b = document.createElement('button');
				b.type = 'button'; b.className = 'bss-btn ' + (cls || ''); b.textContent = txt;
				b.addEventListener('click', fn); return b;
			}
			ctrl.appendChild(btn('↑', '', function () { move(list, row, -1); persistAll(); }));
			ctrl.appendChild(btn('↓', '', function () { move(list, row, 1); persistAll(); }));
			ctrl.appendChild(btn('✕', 'bss-btn-danger', function () { row.remove(); persistAll(); }));
			row.appendChild(ctrl);
			row.addEventListener('input', persistAll);
			return row;
		}

		function move(list, row, dir) {
			var rows = all('.bss-row', list);
			var i = rows.indexOf(row);
			var j = i + dir;
			if (j < 0 || j >= rows.length) return;
			if (dir < 0) list.insertBefore(row, rows[j]);
			else list.insertBefore(row, rows[j].nextSibling);
		}

		var SPECS = {
			highlights: { fields: [
				{ key: 'icon', w: 'narrow', placeholder: 'Emoji' },
				{ key: 'title', w: 'mid', placeholder: 'Card title' },
				{ key: 'text', type: 'textarea', rows: 2, placeholder: 'Description text shown on the card' }
			] },
			steps: { fields: [
				{ key: 'text', type: 'textarea', rows: 2, placeholder: 'One step, e.g. “Contact the Secretary to register.”' }
			] },
			paragraphs: { fields: [
				{ key: 'text', type: 'textarea', rows: 4, placeholder: 'One paragraph of the overview text' }
			] },
			rituals: { fields: [
				{ key: 'icon', w: 'narrow', placeholder: 'Emoji' },
				{ key: 'name', placeholder: 'Ritual name, e.g. Siva Abhishekam' }
			] },
			facts: { fields: [
				{ key: 'icon', w: 'narrow', placeholder: 'Emoji' },
				{ key: 'title', w: 'mid', placeholder: 'Fact title' },
				{ key: 'text', type: 'textarea', rows: 2, placeholder: 'Fact text' }
			] }
		};

		var OV_STORES = { __ov_paragraphs: null, __ov_rituals: null, __ov_facts: null };

		function renderList(listEl) {
			var kind = listEl.dataset.kind;
			var storeId = listEl.dataset.store;
			var spec = SPECS[kind];
			listEl.innerHTML = '';
			var items = [];
			if (storeId === '__ov_paragraphs' || storeId === '__ov_rituals' || storeId === '__ov_facts') {
				items = OV_STORES[storeId] || [];
			} else {
				var parsed = parse(storeId);
				if (Array.isArray(parsed)) {
					items = parsed.map(function (it) {
						if (typeof it === 'string') return { text: it };
						return it;
					});
				}
			}
			if (!items.length) {
				var e = document.createElement('p');
				e.className = 'bss-empty';
				e.textContent = 'Nothing added yet.';
				listEl.appendChild(e);
			}
			items.forEach(function (item) { listEl.appendChild(makeRow(spec.fields, item, listEl, storeId, kind)); });
		}

		function collectList(listEl) {
			return all('.bss-row', listEl).map(function (row) {
				var obj = {};
				all('.bss-input', row).forEach(function (inp) { obj[inp.dataset.key] = inp.value; });
				return obj;
			});
		}

		function persistAll() {
			/* highlights */
			store('bss_highlights_json', collectList(all('.bss-rows[data-kind="highlights"]')[0] || document.createElement('div')));
			/* steps */
			var steps = collectList(all('.bss-rows[data-kind="steps"]')[0] || document.createElement('div'));
			store('bss_how_json', steps.map(function (s) { return s.text; }));

			/* overview */
			if (byId('bss_overview_enabled').checked) {
				OV_STORES.__ov_paragraphs = collectList(all('.bss-rows[data-kind="paragraphs"]')[0]);
				OV_STORES.__ov_rituals = collectList(all('.bss-rows[data-kind="rituals"]')[0]);
				OV_STORES.__ov_facts = collectList(all('.bss-rows[data-kind="facts"]')[0]);
				var venue = null;
				if (byId('bss_venue_name').value.trim() !== '') {
					venue = {
						label: byId('bss_venue_label').value,
						name: byId('bss_venue_name').value,
						address: byId('bss_venue_address').value
					};
				}
				store('bss_overview_json', {
					eyebrow: byId('bss_ov_eyebrow').value,
					title: byId('bss_ov_title').value,
					paragraphs: OV_STORES.__ov_paragraphs.map(function (p) { return p.text; }),
					rituals: OV_STORES.__ov_rituals,
					facts: OV_STORES.__ov_facts,
					venue: venue
				});
			} else {
				store('bss_overview_json', '');
			}

			/* gallery */
			store('bss_gallery_json', galleryItems.map(function (g) { return { mediaId: g.mediaId, year: g.year || '' }; }));
		}

		/* wire "add" buttons */
		all('.bss-add').forEach(function (btn) {
			btn.addEventListener('click', function () {
				var target = btn.dataset.target;
				var listEl = all('.bss-rows[data-store="' + target + '"]')[0];
				if (!listEl) return;
				var emptyEl = listEl.querySelector('.bss-empty');
				if (emptyEl) emptyEl.remove();
				var kind = listEl.dataset.kind;
				var blank = {};
				SPECS[kind].fields.forEach(function (f) { blank[f.key] = ''; });
				listEl.appendChild(makeRow(SPECS[kind].fields, blank, listEl, target, kind));
				persistAll();
				var inputs = all('.bss-input', listEl.lastChild);
				if (inputs.length) inputs[inputs.length - 1].focus();
			});
		});

		/* overview toggle + prefill */
		var ov = parse('bss_overview_json') || {};
		if (ov && typeof ov === 'object' && !Array.isArray(ov)) {
			byId('bss_ov_eyebrow').value = ov.eyebrow || '';
			byId('bss_ov_title').value = ov.title || '';
			OV_STORES.__ov_paragraphs = (ov.paragraphs || []).map(function (t) { return { text: t }; });
			OV_STORES.__ov_rituals = ov.rituals || [];
			OV_STORES.__ov_facts = ov.facts || [];
			if (ov.venue) {
				byId('bss_venue_label').value = ov.venue.label || '';
				byId('bss_venue_name').value = ov.venue.name || '';
				byId('bss_venue_address').value = ov.venue.address || '';
			}
		}
		byId('bss_overview_enabled').addEventListener('change', function () {
			byId('bss_overview_fields').style.display = this.checked ? '' : 'none';
			persistAll();
		});
		['bss_ov_eyebrow', 'bss_ov_title', 'bss_venue_label', 'bss_venue_name', 'bss_venue_address'].forEach(function (id) {
			byId(id).addEventListener('input', persistAll);
		});

		/* ---------- gallery ---------- */
		var galleryItems = [];
		var gparsed = parse('bss_gallery_json');
		if (Array.isArray(gparsed)) {
			galleryItems = gparsed.map(function (g) {
				if (typeof g === 'number') return { mediaId: g, year: '' };
				return { mediaId: parseInt(g.mediaId, 10) || 0, year: g.year || '' };
			}).filter(function (g) { return g.mediaId; });
		}

		function renderGallery() {
			var grid = byId('bss_gallery_grid');
			grid.innerHTML = '';
			byId('bss_gallery_empty').style.display = galleryItems.length ? 'none' : '';
			byId('bss_gallery_count').textContent = galleryItems.length ? galleryItems.length + ' photo(s)' : '';
			galleryItems.forEach(function (item, idx) {
				var card = document.createElement('div');
				card.className = 'bss-gcard';

				var img = document.createElement('img');
				img.className = 'bss-gthumb';
				img.alt = '';
				card.appendChild(img);

				var name = document.createElement('div');
				name.className = 'bss-gname';
				name.textContent = '#' + item.mediaId;
				card.appendChild(name);

				var year = document.createElement('input');
				year.type = 'text';
				year.className = 'bss-gyear';
				year.placeholder = 'Year (e.g. 2025)';
				year.value = item.year || '';
				year.addEventListener('input', function () { item.year = year.value; persistAll(); });
				card.appendChild(year);

				var actions = document.createElement('div');
				actions.className = 'bss-gactions';
				function gbtn(txt, fn) {
					var b = document.createElement('button');
					b.type = 'button'; b.className = 'bss-btn'; b.textContent = txt;
					b.addEventListener('click', fn); return b;
				}
				actions.appendChild(gbtn('↑', function () {
					if (idx === 0) return;
					var t = galleryItems[idx - 1]; galleryItems[idx - 1] = galleryItems[idx]; galleryItems[idx] = t;
					persistAll(); renderGallery();
				}));
				actions.appendChild(gbtn('↓', function () {
					if (idx >= galleryItems.length - 1) return;
					var t = galleryItems[idx + 1]; galleryItems[idx + 1] = galleryItems[idx]; galleryItems[idx] = t;
					persistAll(); renderGallery();
				}));
				actions.appendChild(gbtn('✕', function () {
					galleryItems.splice(idx, 1); persistAll(); renderGallery();
				}));
				card.appendChild(actions);

				grid.appendChild(card);

				fetch('<?php echo esc_url_raw(rest_url('wp/v2/media/')); ?>' + item.mediaId)
					.then(function (r) { return r.json(); })
					.then(function (a) {
						var s = a.media_details && a.media_details.sizes || {};
						var url = (s.thumbnail && s.thumbnail.source_url) || (s.medium && s.medium.source_url) || a.source_url;
						img.src = url || '';
						name.textContent = (a.title && a.title.rendered) || ('#' + item.mediaId);
					})
					.catch(function () { name.textContent = '#' + item.mediaId + ' (preview unavailable)'; });
			});
		}

		var frame;
		byId('bss_gallery_add').addEventListener('click', function (e) {
			e.preventDefault();
			if (!window.wp || !wp.media) { alert('Media library not loaded — reload the page.'); return; }
			if (!frame) {
				frame = wp.media({ title: 'Add Gallery Images', multiple: 'add', library: { type: 'image' } });
				frame.on('select', function () {
					var sel = frame.state().get('selection');
					sel.each(function (a) {
						var id = a.get('id');
						if (galleryItems.some(function (g) { return g.mediaId === id; })) return;
						galleryItems.push({ mediaId: id, year: '' });
					});
					persistAll(); renderGallery();
				});
			}
			frame.open();
		});

		/* initial render */
		renderList(all('.bss-rows[data-kind="highlights"]')[0]);
		renderList(all('.bss-rows[data-kind="steps"]')[0]);
		renderList(all('.bss-rows[data-kind="paragraphs"]')[0]);
		renderList(all('.bss-rows[data-kind="rituals"]')[0]);
		renderList(all('.bss-rows[data-kind="facts"]')[0]);
		renderGallery();
	})();
	</script>
	<?php
}

add_action('save_post_program', function ($post_id) {
	if (!isset($_POST['bssata_program_builder_nonce']) || !wp_verify_nonce($_POST['bssata_program_builder_nonce'], 'bssata_program_builder')) return;
	if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
	if (wp_is_post_revision($post_id)) return;
	if (!current_user_can('edit_post', $post_id)) return;

	$fields = array(
		'bss_highlights_json' => 'highlights_json',
		'bss_how_json'        => 'how_json',
		'bss_overview_json'   => 'overview_json',
		'bss_gallery_json'    => 'gallery_json',
	);
	foreach ($fields as $post_field => $meta_key) {
		if (!isset($_POST[$post_field])) continue; /* not posted (quick edit etc.) → keep existing */
		$raw = (string) wp_unslash($_POST[$post_field]);
		$trimmed = trim($raw);
		if ($trimmed === '') { update_post_meta($post_id, $meta_key, ''); continue; }
		$decoded = json_decode($raw, true);
		if ($decoded === null) continue; /* invalid JSON → keep existing value */
		update_post_meta($post_id, $meta_key, wp_json_encode($decoded, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
	}
}, 10, 1);

/* ═══════════════════════════════════════════════════════════════
   6. REST — settings route (seed path)
   ═══════════════════════════════════════════════════════════════ */

add_action('rest_api_init', function () {
	$keys = array('organization_name', 'reg_no', 'tagline', 'address', 'office_address',
		'email', 'phone', 'website', 'twelve_a_certificate_text', 'bank_accounts', 'gotrams');

	register_rest_route('bssata/v1', '/settings', array(
		array(
			'methods' => 'GET',
			'permission_callback' => '__return_true',
			'callback' => function () use ($keys) {
				$out = array();
				foreach ($keys as $k) $out[$k] = (string) get_option('options_' . $k, '');
				return $out;
			},
		),
		array(
			'methods' => 'POST',
			'permission_callback' => function () { return current_user_can('manage_options'); },
			'callback' => function ($req) use ($keys) {
				$body = $req->get_json_params();
				foreach ($keys as $k) {
					if (isset($body[$k])) update_option('options_' . $k, (string) $body[$k]);
				}
				return array('success' => true);
			},
		),
	));
});

/* ═══════════════════════════════════════════════════════════════
   7. ADMIN NOTICE — missing WPGraphQL
   ═══════════════════════════════════════════════════════════════ */

add_action('admin_notices', function () {
	if (!class_exists('WPGraphQL')) {
		echo '<div class="notice notice-error"><p><strong>BSSATA Headless Content Model:</strong> WPGraphQL must be active for GraphQL exposure. CPTs/ACF work regardless.</p></div>';
	}
});
