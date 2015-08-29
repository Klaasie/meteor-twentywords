/** 
 * Mapping of object
 *
 * Questions {
 * 		"_id", : String,
 * 		"category": Object {
 * 			"nl": String,
 * 			"es": String
 * 		},
 * 		"subcategory": Object {
 * 			"nl": String,
 * 			"es": String
 * 		},
 * 		"sentence": Object {
 * 			"nl": Object {
 * 				"front": String,
 * 				"word": String,
 * 				"back": String
 * 			},
 * 			"es": Object {
 * 				"front": String,
 * 				"word": String,
 * 				"back": String
 * 			}
 * 		}
 * 		"createdAt": Date
 * 		"updatedAt": Date
 * }
 * 
 */

Questions = new Mongo.Collection("questions");