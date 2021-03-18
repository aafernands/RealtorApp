const router = require("express").Router();
const axios = require("axios");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const requireAuth = require("../middlewares/requireAuth");

const mockResult = [
	{
		property_id: "M3982027198",
		listing_id: "2925927859",
		products: ["core.broker", "co_broke"],
		rdc_web_url:
			"https://www.realtor.com/realestateandhomes-detail/118-Suffolk-St-4AB_New-York_NY_10002_M39820-27198",
		prop_type: "condo",
		prop_sub_type: "coop",
		address: {
			city: "New York",
			line: "118 Suffolk St Unit 4AB",
			postal_code: "10002",
			state_code: "NY",
			state: "New York",
			county: "New York",
			fips_code: "36061",
			lat: 40.718987,
			lon: -73.985857,
			neighborhood_name: "Lower East Side",
		},
		branding: {
			listing_office: {
				list_item: {
					name: "Halstead Real Estate - 831 Broadway",
					photo: null,
					phone: null,
					slogan: null,
					show_realtor_logo: false,
					link: null,
					accent_color: null,
				},
			},
		},
		prop_status: "for_sale",
		price: 1150000,
		baths_half: 1,
		baths_full: 1,
		baths: 2,
		beds: 3,
		agents: [
			{
				primary: true,
				photo: null,
				name: "",
			},
		],
		office: {
			id: "d5a6563f3e8ec1eeb85fe2e36c0c2729",
			name: "Halstead Real Estate - 831 Broadway",
		},
		last_update: "2021-02-10T18:08:17Z",
		client_display_flags: {
			presentation_status: "for_sale",
			is_showcase: false,
			lead_form_phone_required: true,
			price_change: 0,
			is_co_broke_email: true,
			has_open_house: false,
			is_co_broke_phone: false,
			is_new_listing: true,
			is_new_plan: false,
			is_turbo: false,
			is_office_standard_listing: false,
			suppress_map_pin: false,
			show_contact_a_lender_in_lead_form: false,
			show_veterans_united_in_lead_form: false,
			is_showcase_choice_enabled: false,
		},
		lead_forms: {
			form: {
				name: {
					required: true,
					minimum_character_count: 1,
				},
				email: {
					required: true,
					minimum_character_count: 5,
				},
				phone: {
					required: true,
					minimum_character_count: 10,
					maximum_character_count: 11,
				},
				message: {
					required: false,
					minimum_character_count: 0,
				},
				show: true,
			},
			show_agent: false,
			show_broker: false,
			show_builder: false,
			show_contact_a_lender: false,
			show_veterans_united: false,
			form_type: "classic",
			lead_type: "co_broke",
			is_lcm_enabled: false,
			flip_the_market_enabled: false,
			show_text_leads: true,
			cashback_enabled: false,
			smarthome_enabled: false,
		},
		photo_count: 14,
		thumbnail:
			"https://ap.rdcpix.com/f9ad75dfbc3c8cea90c66e7cb0bbb6cel-m2331328061x.jpg",
		page_no: 1,
		rank: 1,
		list_tracking:
			"type|property|data|prop_id|3982027198|list_id|2925928859|page|rank|list_branding|listing_agent|listing_office|advertiser_id|office|property_status|product_code|advantage_code^1|1|0|1|1C7YN|35T|G|4^^$0|1|2|$3|4|5|6|7|H|8|I|9|$A|J|B|K]|C|$D|L]|E|M|F|N|G|O]]",
		mls: {
			name: "TerraHoldings",
			id: "HALS20678615",
			plan_id: null,
			abbreviation: "TENY",
			type: "mls",
		},
		data_source_name: "mls",
	},
	{
		property_id: "M3982027198",
		listing_id: "2925928859",
		products: ["core.broker", "co_broke"],
		rdc_web_url:
			"https://www.realtor.com/realestateandhomes-detail/118-Suffolk-St-4AB_New-York_NY_10002_M39820-27198",
		prop_type: "condo",
		prop_sub_type: "coop",
		address: {
			city: "New York",
			line: "118 Suffolk St Unit 4AB",
			postal_code: "10002",
			state_code: "NY",
			state: "New York",
			county: "New York",
			fips_code: "36061",
			lat: 40.718987,
			lon: -73.985857,
			neighborhood_name: "Lower East Side",
		},
		branding: {
			listing_office: {
				list_item: {
					name: "Halstead Real Estate - 831 Broadway",
					photo: null,
					phone: null,
					slogan: null,
					show_realtor_logo: false,
					link: null,
					accent_color: null,
				},
			},
		},
		prop_status: "for_sale",
		price: 1150000,
		baths_half: 1,
		baths_full: 1,
		baths: 2,
		beds: 3,
		agents: [
			{
				primary: true,
				photo: null,
				name: "",
			},
		],
		office: {
			id: "d5a6563f3e8ec1eeb85fe2e36c0c2729",
			name: "Halstead Real Estate - 831 Broadway",
		},
		last_update: "2021-02-10T18:08:17Z",
		client_display_flags: {
			presentation_status: "for_sale",
			is_showcase: false,
			lead_form_phone_required: true,
			price_change: 0,
			is_co_broke_email: true,
			has_open_house: false,
			is_co_broke_phone: false,
			is_new_listing: true,
			is_new_plan: false,
			is_turbo: false,
			is_office_standard_listing: false,
			suppress_map_pin: false,
			show_contact_a_lender_in_lead_form: false,
			show_veterans_united_in_lead_form: false,
			is_showcase_choice_enabled: false,
		},
		lead_forms: {
			form: {
				name: {
					required: true,
					minimum_character_count: 1,
				},
				email: {
					required: true,
					minimum_character_count: 5,
				},
				phone: {
					required: true,
					minimum_character_count: 10,
					maximum_character_count: 11,
				},
				message: {
					required: false,
					minimum_character_count: 0,
				},
				show: true,
			},
			show_agent: false,
			show_broker: false,
			show_builder: false,
			show_contact_a_lender: false,
			show_veterans_united: false,
			form_type: "classic",
			lead_type: "co_broke",
			is_lcm_enabled: false,
			flip_the_market_enabled: false,
			show_text_leads: true,
			cashback_enabled: false,
			smarthome_enabled: false,
		},
		photo_count: 14,
		thumbnail:
			"https://ap.rdcpix.com/f9ad75dfbc3c8cea90c66e7cb0bbb6cel-m2331328061x.jpg",
		page_no: 1,
		rank: 1,
		list_tracking:
			"type|property|data|prop_id|3982027198|list_id|2925928859|page|rank|list_branding|listing_agent|listing_office|advertiser_id|office|property_status|product_code|advantage_code^1|1|0|1|1C7YN|35T|G|4^^$0|1|2|$3|4|5|6|7|H|8|I|9|$A|J|B|K]|C|$D|L]|E|M|F|N|G|O]]",
		mls: {
			name: "TerraHoldings",
			id: "HALS20678615",
			plan_id: null,
			abbreviation: "TENY",
			type: "mls",
		},
		data_source_name: "mls",
	},
	{
		property_id: "M4376035517",
		listing_id: "2925928392",
		products: ["core.agent", "core.broker", "co_broke"],
		rdc_web_url:
			"https://www.realtor.com/realestateandhomes-detail/201-E-17th-St-Apt-31A_New-York_NY_10003_M43760-35517",
		prop_type: "condo",
		prop_sub_type: "coop",
		address: {
			city: "Manhattan",
			line: "201 E 17th St Apt 31A",
			postal_code: "10003",
			state_code: "NY",
			state: "New York",
			county: "New York",
			fips_code: "36061",
			lat: 40.735366,
			lon: -73.985264,
			neighborhood_name: "Gramercy Park",
		},
		branding: {
			listing_office: {
				list_item: {
					name: "COMPASS",
					photo: null,
					phone: null,
					slogan: null,
					show_realtor_logo: false,
					link: null,
					accent_color: null,
				},
			},
		},
		prop_status: "for_sale",
		price: 898000,
		baths_full: 1,
		baths: 1,
		beds: 1,
		agents: [
			{
				primary: true,
				advertiser_id: "3161404",
				id: "3161404",
				photo: null,
				name: "Laurie Gilmore",
			},
		],
		office: {
			id: "b513c44a4d8c00922c7155d8a90dfde5",
			name: "COMPASS",
		},
		last_update: "2021-02-10T23:04:41Z",
		client_display_flags: {
			presentation_status: "for_sale",
			is_showcase: false,
			lead_form_phone_required: true,
			price_change: 0,
			is_co_broke_email: true,
			has_open_house: false,
			is_co_broke_phone: false,
			is_new_listing: true,
			is_new_plan: false,
			is_turbo: false,
			is_office_standard_listing: false,
			suppress_map_pin: false,
			show_contact_a_lender_in_lead_form: false,
			show_veterans_united_in_lead_form: false,
			is_showcase_choice_enabled: false,
		},
		lead_forms: {
			form: {
				name: {
					required: true,
					minimum_character_count: 1,
				},
				email: {
					required: true,
					minimum_character_count: 5,
				},
				phone: {
					required: true,
					minimum_character_count: 10,
					maximum_character_count: 11,
				},
				message: {
					required: false,
					minimum_character_count: 0,
				},
				show: true,
			},
			show_agent: false,
			show_broker: false,
			show_builder: false,
			show_contact_a_lender: false,
			show_veterans_united: false,
			form_type: "classic",
			lead_type: "co_broke",
			is_lcm_enabled: false,
			flip_the_market_enabled: false,
			show_text_leads: true,
			cashback_enabled: false,
			smarthome_enabled: false,
		},
		photo_count: 14,
		thumbnail:
			"https://ap.rdcpix.com/d0765175dfb3cf1fd1d14fb052ff1bf4l-m2200764059x.jpg",
		page_no: 1,
		rank: 2,
		list_tracking:
			"type|property|data|prop_id|4376035517|list_id|2925928392|page|rank|list_branding|listing_agent|listing_office|advertiser_id|agent|office|broker|property_status|product_code|advantage_code^1|2|0|1|1VRCS|1QT28|196HY|1|G|5^^$0|1|2|$3|4|5|6|7|J|8|K|9|$A|L|B|M]|C|$D|N|E|O|F|P]|G|Q|H|R|I|S]]",
		mls: {
			name: "Compass",
			id: "714335853693143",
			plan_id: null,
			abbreviation: "UCNY",
			type: "mls",
		},
		data_source_name: "mls",
	},
	{
		property_id: "M3797626328",
		listing_id: "2925928377",
		products: ["core.agent", "core.broker", "co_broke"],
		rdc_web_url:
			"https://www.realtor.com/realestateandhomes-detail/176-E-77th-St-Apt-10A_New-York_NY_10075_M37976-26328",
		prop_type: "condo",
		prop_sub_type: "coop",
		address: {
			city: "Manhattan",
			line: "176 E 77th St Apt 10A",
			postal_code: "10075",
			state_code: "NY",
			state: "New York",
			county: "New York",
			fips_code: "36061",
			lat: 40.772867,
			lon: -73.958772,
			neighborhood_name: "Upper East Side",
		},
		branding: {
			listing_office: {
				list_item: {
					name: "COMPASS",
					photo: null,
					phone: null,
					slogan: null,
					show_realtor_logo: false,
					link: null,
					accent_color: null,
				},
			},
		},
		prop_status: "for_sale",
		price: 495000,
		baths_full: 1,
		baths: 1,
		beds: 0,
		agents: [
			{
				primary: true,
				advertiser_id: "3622596",
				id: "3622596",
				photo: null,
				name: "Vickey Barron",
			},
		],
		office: {
			id: "b513c44a4d8c00922c7155d8a90dfde5",
			name: "COMPASS",
		},
		last_update: "2021-02-10T23:04:41Z",
		client_display_flags: {
			presentation_status: "for_sale",
			is_showcase: false,
			lead_form_phone_required: true,
			price_change: 0,
			is_co_broke_email: true,
			has_open_house: false,
			is_co_broke_phone: false,
			is_new_listing: true,
			is_new_plan: false,
			is_turbo: false,
			is_office_standard_listing: false,
			suppress_map_pin: false,
			show_contact_a_lender_in_lead_form: false,
			show_veterans_united_in_lead_form: false,
			is_showcase_choice_enabled: false,
		},
		lead_forms: {
			form: {
				name: {
					required: true,
					minimum_character_count: 1,
				},
				email: {
					required: true,
					minimum_character_count: 5,
				},
				phone: {
					required: true,
					minimum_character_count: 10,
					maximum_character_count: 11,
				},
				message: {
					required: false,
					minimum_character_count: 0,
				},
				show: true,
			},
			show_agent: false,
			show_broker: false,
			show_builder: false,
			show_contact_a_lender: false,
			show_veterans_united: false,
			form_type: "classic",
			lead_type: "co_broke",
			is_lcm_enabled: false,
			flip_the_market_enabled: false,
			show_text_leads: true,
			cashback_enabled: false,
			smarthome_enabled: false,
		},
		photo_count: 8,
		thumbnail:
			"https://ap.rdcpix.com/9d226691ef1a6c4160ccd862efd2df20l-m3753610048x.jpg",
		page_no: 1,
		rank: 3,
		list_tracking:
			"type|property|data|prop_id|3797626328|list_id|2925928377|page|rank|list_branding|listing_agent|listing_office|advertiser_id|agent|office|broker|property_status|product_code|advantage_code^1|3|0|1|25N7O|1QT28|196HY|1|G|5^^$0|1|2|$3|4|5|6|7|J|8|K|9|$A|L|B|M]|C|$D|N|E|O|F|P]|G|Q|H|R|I|S]]",
		mls: {
			name: "Compass",
			id: "708549701514388",
			plan_id: null,
			abbreviation: "UCNY",
			type: "mls",
		},
		data_source_name: "mls",
	},
	{
		property_id: "M4476250787",
		listing_id: "2925926433",
		products: ["core.agent", "core.broker", "co_broke"],
		rdc_web_url:
			"https://www.realtor.com/realestateandhomes-detail/63-E-79th-St-Apt-5S_New-York_NY_10075_M44762-50787",
		prop_type: "condo",
		prop_sub_type: "townhomes",
		address: {
			city: "New York",
			line: "63 E 79th St Apt 5S",
			postal_code: "10075",
			state_code: "NY",
			state: "New York",
			county: "New York",
			fips_code: "36061",
			lat: 40.776255,
			lon: -73.96125,
			neighborhood_name: "Upper East Side",
		},
		branding: {
			listing_office: {
				list_item: {
					name: "Brown Harris Stevens - 43 North Moore Street",
					photo: null,
					phone: null,
					slogan: null,
					show_realtor_logo: false,
					link: null,
					accent_color: null,
				},
			},
		},
		prop_status: "for_sale",
		price: 1575000,
		baths_full: 2,
		baths: 2,
		beds: 2,
		agents: [
			{
				primary: true,
				advertiser_id: "1832706",
				id: "1832706",
				photo: {
					href:
						"https://ap.rdcpix.com/615218699/5cbc98f6a98e5ad1446afdd7bf368c4ea-w0od-r7_w110.jpg",
				},
				name: "Nadine Adamson",
			},
		],
		office: {
			id: "e755dbc569692a3ac7cb6cf2d0fc43cd",
			name: "Brown Harris Stevens - 43 North Moore Street",
		},
		last_update: "2021-02-10T16:08:04Z",
		client_display_flags: {
			presentation_status: "for_sale",
			is_showcase: false,
			lead_form_phone_required: true,
			price_change: 0,
			is_co_broke_email: true,
			has_open_house: false,
			is_co_broke_phone: false,
			is_new_listing: true,
			is_new_plan: false,
			is_turbo: false,
			is_office_standard_listing: false,
			suppress_map_pin: false,
			show_contact_a_lender_in_lead_form: false,
			show_veterans_united_in_lead_form: false,
			is_showcase_choice_enabled: false,
		},
		lead_forms: {
			form: {
				name: {
					required: true,
					minimum_character_count: 1,
				},
				email: {
					required: true,
					minimum_character_count: 5,
				},
				phone: {
					required: true,
					minimum_character_count: 10,
					maximum_character_count: 11,
				},
				message: {
					required: false,
					minimum_character_count: 0,
				},
				show: true,
			},
			show_agent: false,
			show_broker: false,
			show_builder: false,
			show_contact_a_lender: false,
			show_veterans_united: false,
			form_type: "classic",
			lead_type: "co_broke",
			is_lcm_enabled: false,
			flip_the_market_enabled: false,
			show_text_leads: true,
			cashback_enabled: false,
			smarthome_enabled: false,
		},
		photo_count: 0,
		page_no: 1,
		rank: 4,
		list_tracking:
			"type|property|data|prop_id|4476250787|list_id|2925926433|page|rank|list_branding|listing_agent|listing_office|advertiser_id|agent|office|broker|property_status|product_code|advantage_code^1|4|0|1|13A4I|1C97P|17KOD|35T|G|5^^$0|1|2|$3|4|5|6|7|J|8|K|9|$A|L|B|M]|C|$D|N|E|O|F|P]|G|Q|H|R|I|S]]",
		mls: {
			name: "TerraHoldings",
			id: "BHSR20672836",
			plan_id: null,
			abbreviation: "TENY",
			type: "mls",
		},
		data_source_name: "mls",
	},
];

router.get("/api/search/:state/:city", (req, res) => {
	// return res.json(mockResult);

	var options = {
		method: "GET",
		url: "https://realtor.p.rapidapi.com/properties/v2/list-for-sale",
		params: {
			city: req.params.city,
			limit: "50",
			offset: "0",
			state_code: req.params.state,
			sort: "relevance",
		},
		headers: {
			// Enter API KEY HERE
			"x-rapidapi-key": "1c2de0c4ebmshcb0bb230ca62e99p1c1f55jsn671e37f5966a",

			"x-rapidapi-host": "realtor.p.rapidapi.com",
		},
	};

	axios
		.request(options)
		.then(function (response) {
			res.json(response.data.properties);
		})
		.catch(function (error) {
			console.error(error);
			res.status(500).json(error.data);
		});
});

/**
 * [2.2]
 * this is the server route to handle the save favorite request.
 * it required login (requireAuth - middelware)
 */
router.put("/api/properties", requireAuth, (req, res) => {
	const property = req.body.property;
	/**
	 * [2.4]
	 * update database user with the new favorite property
	 */
	User.updateOne({ _id: req.user._id }, { $push: { properties: property } })
		.then(() => {
			/**
			 * [2.5] 
			 * update successfuly
			 * return to the client side / response back to the client
			 */
			// saved
			res.json({ data: "saved" });
		})
		.catch((err) => {
			res.json({ error: err });
		});
});
router.get("/api/properties", requireAuth, (req, res) => {
	User.findOne({ _id: req.user._id })
		.select("properties")
		.then((user) => {
			res.json(user.properties);
		})
		.catch((err) => {
			res.status(500).json({ error: err });
		});
});
router.delete("/api/properties/:id", requireAuth, (req, res) => {
	User.findOne({ _id: req.user._id })
		.then((user) => {
			property = user.properties.filter(
				(property) => property.listing_id !== req.params.id
			);
			return User.updateOne(
				{ _id: req.user._id },
				{ $set: { properties: property } }
			);
		})
		.then(() => {
			// success
			res.json({ message: "removed" });
		})
		.catch((err) => {
			res.status(500).json({ error: err });
		});
});
router.put("/api/properties/:id", requireAuth, (req, res) => {
	// add the listing_id to propertyViewed array in mongodb
	User.updateOne(
		{ _id: req.user._id },
		{ $addToSet: { propertyViewed: req.params.id } }
	)
		.then(() => {
			// saved
			// res.json({ data: "saved" }); // content-type: application/json
			res.send("saved"); // content-type: text/plain
		})
		.catch((err) => {
			res.status(500).json({ error: err });
		});
});
router.get("/api/user/data", requireAuth, (req, res) => {
	User.findOne({ _id: req.user._id })
		.select("properties propertyViewed")
		.then((user) => {
			// return result as json object
			res.json({
				// have to map properties to return only the listing_id instead of the whole property object
				favorite: user.properties.map((property) => property.listing_id),
				propertyViewed: user.propertyViewed,
			});
		})
		.catch((err) => {
			res.status(500).json({ error: err });
		});
});
module.exports = router;
